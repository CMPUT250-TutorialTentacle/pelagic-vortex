"use strict";
//=============================================================================
// FELSKI_AUTOSAVE.js
//=============================================================================

var Imported = Imported || {};
Imported.FELSKI_AUTOSAVE = true;

var Felski = Felski || {};  
Felski.AUTOSAVE = {};
Felski.AUTOSAVE.version = 1.01;

/*:
* @plugindesc v1.0.1 This plugin enables autosaving in your game. For RPG Maker MV 1.6.1.
* @author Felski
* @help 
* It allows saving on differnt situations like on entering a map or closing the menu.
* You can also save during eventing using the plugin command AUTOSAVE.
*
* ============================================================================
* Terms of Use
* ============================================================================
* Copyright (C) 2019 Felski
*
* These plugins may be used in free or commercial games.
* 'Felski' must be given credit in your games.
* You are allowed to edit the code.
* Do NOT claim the plugins as your own.
* Do NOT change the filename, parameters, and information of the plugin.
* You are NOT allowed to redistribute these plugins.
* You may NOT take code for your own released plugins without credit.
*
* ============================================================================
* Changelog
* ============================================================================
* V1.0.0
* - Initial release.
*
* V1.0.1
* - fixed compatibility with Yanfly's Save Core plugin.
* - added a plugin parameter to disable the auto save feature.
*
* @param Save Settings
*
* @param Auto Save Slots
* @parent Save Settings
* @desc How many auto save slots should the game have?
* @type Integer
* @default 2
*
* @param Save After Map Change
* @parent Save Settings
* @desc Should the game autosave after the map is changed?
* @type Boolean
* @on save on map change
* @off don't save on map change
* @default true
*
* @param Save On Menu Exit
* @parent Save Settings
* @desc Should the game save when the menu is exited?
* @type Boolean
* @on save on menu exit
* @off don't save on menu exit
* @default true
*
* @param Enable Auto Saving
* @parent Save Settings
* @desc Enable the auto save feature
* @type Boolean
* @on autosave enabled
* @off autosave disabled
* @default true
*
*
* @param Save Texts
*
* @param Auto Save Text
* @parent Save Texts
* @desc Text shown in the save and load menu to identify auto save slots.
* @type String
* @default Autosave
*
* @param Save After Map Change Text
* @parent Save Texts
* @desc Text that is displayed for a after map change auto saves.
* @type String
* @default Entering Area
*
* @param Save On Menu Exit Text
* @parent Save Texts
* @desc Text that is displayed for menu exit auto saves.
* @type String
* @default Closing Menu
*
* @param Save Standard Text
* @parent Save Texts
* @desc Text that is displayed for a normal save.
* @type String
* @default Normal Save
*/

var parameters = PluginManager.parameters('FELSKI_AUTOSAVE');

Felski.AUTOSAVE.slots = Number(parameters['Auto Save Slots'] || 2);
Felski.AUTOSAVE.autosaveText = String(parameters['Auto Save Text'] || 'Autosave');
Felski.AUTOSAVE.saveCounter = 1;

Felski.AUTOSAVE.onMapChange = String(parameters['Save After Map Change'] || 'true');
Felski.AUTOSAVE.onMapChange = eval(Felski.AUTOSAVE.onMapChange);
Felski.AUTOSAVE.onMapChangeText = String(parameters['Save After Map Change Text'] || 'Entering Area');
Felski.AUTOSAVE.onMenuExit = String(parameters['Save On Menu Exit'] || 'true');
Felski.AUTOSAVE.onMenuExit = eval(Felski.AUTOSAVE.onMenuExit);
Felski.AUTOSAVE.onMenuExitText = String(parameters['Save On Menu Exit Text'] || 'Closing Menu');
Felski.AUTOSAVE.standardText = String(parameters['Save Standard Text'] || 'Normal Save');

Felski.AUTOSAVE.enableAutosave = String(parameters['Enable Auto Saving'] || 'true');
Felski.AUTOSAVE.enableAutosave = eval(Felski.AUTOSAVE.enableAutosave);

Felski.AUTOSAVE.triggerText = Felski.AUTOSAVE.standardText;

(function() {

//************************************************************************************************
//
// Save Handling
//
//************************************************************************************************

    Game_System.prototype.autoSaveGame = function() {
        if(!Felski.AUTOSAVE.enableAutosave) return;
        $gameSystem.onBeforeSave();
        if (DataManager.saveGame(Felski.AUTOSAVE.saveCounter)) {
            console.log("Autosave successful. Saved in slot "+ Felski.AUTOSAVE.saveCounter + " with trigger " + Felski.AUTOSAVE.triggerText);
            StorageManager.cleanBackup(Felski.AUTOSAVE.saveCounter);
            if(Felski.AUTOSAVE.saveCounter >= Felski.AUTOSAVE.slots){
                Felski.AUTOSAVE.saveCounter = 1;
            }else{
                Felski.AUTOSAVE.saveCounter = Felski.AUTOSAVE.saveCounter + 1;
            }
        } else {
            console.warn("Autosave Failed.");
        }
    };


//************************************************************************************************
//
// DataManager
//
//************************************************************************************************

    Felski.AUTOSAVE.DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function() {
        var contents = Felski.AUTOSAVE.DataManager_makeSaveContents.call(this);
        contents.saveCounter = Felski.AUTOSAVE.saveCounter;
        return contents;
    };

    Felski.AUTOSAVE.DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        Felski.AUTOSAVE.DataManager_extractSaveContents.call(this, contents);
        Felski.AUTOSAVE.saveCounter = contents.saveCounter;
    };

    Felski.AUTOSAVE.DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function() {
        var info = Felski.AUTOSAVE.DataManager_makeSavefileInfo.call(this);
        info.title = Felski.AUTOSAVE.triggerText;
        return info;
    };

    Felski.AUTOSAVE.DataManager_maxSavefiles = DataManager.maxSavefiles;
    DataManager.maxSavefiles = function() {
        var r = Felski.AUTOSAVE.DataManager_maxSavefiles.call(this);
        var r2 = r + Felski.AUTOSAVE.slots;
        return r2;
    };


//************************************************************************************************
//
// Window_SavefileList
//
//************************************************************************************************

    Window_SavefileList.prototype.drawFileId = function(id, x, y) {
        if(id <= Felski.AUTOSAVE.slots){
            if (this._mode === 'save') {
                this.changePaintOpacity(false);
            }
            this.drawText(Felski.AUTOSAVE.autosaveText + ' ' + id, x, y, 180);
        }else{
            this.changePaintOpacity(true);
            this.drawText(TextManager.file + ' ' + (id - Felski.AUTOSAVE.slots), x, y, 180);
        }
    };

//************************************************************************************************
//
// Scene_Menu
//
//************************************************************************************************

    Scene_Menu.prototype.popScene = function() {
        Scene_Base.prototype.popScene.call(this);
        if(Felski.AUTOSAVE.onMenuExit) {
            Felski.AUTOSAVE.triggerText = Felski.AUTOSAVE.onMenuExitText;
            $gameSystem.autoSaveGame();

        }
    };


//************************************************************************************************
//
// Scene_Save
//
//************************************************************************************************

    Felski.AUTOSAVE.Scene_Save_onSavefileOk = Scene_Save.prototype.onSavefileOk;
    Scene_Save.prototype.onSavefileOk = function() {
        if(this.savefileId() <= Felski.AUTOSAVE.slots){
            this.onSaveFailure();
        }else{
            Felski.AUTOSAVE.triggerText = Felski.AUTOSAVE.standardText;
            Felski.AUTOSAVE.Scene_Save_onSavefileOk.call(this);
        }
    };

//************************************************************************************************
//
// Game_Player
//
//************************************************************************************************

    Felski.AUTOSAVE.Game_Player_performTransfer = Game_Player.prototype.performTransfer;
    Game_Player.prototype.performTransfer = function() {
        Felski.AUTOSAVE.Game_Player_performTransfer.call(this);
        if (this._newMapId > 0) {
            if(Felski.AUTOSAVE.onMapChange) {
                Felski.AUTOSAVE.triggerText = Felski.AUTOSAVE.onMapChangeText;
                $gameSystem.autoSaveGame();
            }
        }
    };

//************************************************************************************************
//
// Game_Interpreter
//
//************************************************************************************************

    // Transfer Player
    Felski.AUTOSAVE.Game_Interpreter_command201 = Game_Interpreter.prototype.command201;
    Game_Interpreter.prototype.command201 = function() {
        Felski.AUTOSAVE.Game_Interpreter_command201.call(this);
        if(Felski.AUTOSAVE.onMapChange) {
            Felski.AUTOSAVE.triggerText = Felski.AUTOSAVE.onMapChangeText;
            $gameSystem.autoSaveGame();
        }
    };

    Felski.AUTOSAVE.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Felski.AUTOSAVE.Game_Interpreter_pluginCommand.call(this, command, args);
        command = command.toUpperCase(); 
        if (command === 'AUTOSAVE'){
            $gameSystem.autoSaveGame();
        }
    };

//************************************************************************************************
//
// Yanfly Save Core Compatibility
//
//************************************************************************************************
    
    if(Imported.YEP_SaveCore){     
        Window_SavefileList.prototype.drawFileId = function(id, x, y) {
            if(id <= Felski.AUTOSAVE.slots){
                this.drawText(Felski.AUTOSAVE.autosaveText + ' ' + id, x, y, 180);
            }else{
                this.changePaintOpacity(true);
                this.drawText(TextManager.file + ' ' + (id - Felski.AUTOSAVE.slots), x, y, 180);
            }
        };

        Scene_Save.prototype.onSavefileOk = function() {
            Felski.AUTOSAVE.triggerText = Felski.AUTOSAVE.standardText;
            Felski.AUTOSAVE.Scene_Save_onSavefileOk.call(this);
        };

        Felski.AUTOSAVE.Window_SaveAction_isSaveEnabled = Window_SaveAction.prototype.isSaveEnabled;
        Window_SaveAction.prototype.isSaveEnabled = function() {
            var ret = Felski.AUTOSAVE.Window_SaveAction_isSaveEnabled.call(this);
            if(this.savefileId() <= Felski.AUTOSAVE.slots){
                return false;
            }else{
                return ret;
            }
        };
    }
    
})();
