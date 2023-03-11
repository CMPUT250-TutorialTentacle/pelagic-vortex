// ============================================================================
// Character Noisy Steps by Akumu Games
// ============================================================================
// For: RPGMAKER MV
// AG_CharacterNoisySteps.js
// Version: 1.2.1
// Free to use for commercial and non commercial projects as long as proper credit is given.
// ============================================================================
/*:
 * @plugindesc Characters will produce stepping sound effects when they move on the map terrain.
 *
 * @author Akumu Games
 * ============================================================================
 * @param Player Step SE Volume
 * @desc The volume at which stepping sound effect will play for the player.
 * @default 40
 * @param Events Step SE Volume
 * @desc The volume at which stepping sound effect will play for events.
 * @default 20
 * @param Step SE Pitch
 * @desc The pitch at which stepping sound effect will play for characters.
 * @default 100
 * @param Pitch Variance
 * @desc The range at which the pitch can oscillate between (placing this value at 0 will null this feature).
 * @default 5
 * @param Pan Variance
 * @desc The pan difference that will play when an event is located to the right/left from the player (placing this value at 0 will null this feature).
 * @default 40
 * @param Disable Player Noisy Steps Switch ID
 * @desc When this switch is turned ON, the player won't produce stepping sound effects.
 * @default 0
 * @param Disable Events Noisy Steps Switch ID
 * @desc When this switch is turned ON, all events on the map won't produce stepping sound effects.
 * @default 0
 * @param Terrain Tag 0 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 0.
 * @default
 * @param Terrain Tag 1 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 1.
 * @default concrete
 * @param Terrain Tag 2 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 2.
 * @default sand
 * @param Terrain Tag 3 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 3.
 * @default carpet
 * @param Terrain Tag 4 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 4.
 * @default grass
 * @param Terrain Tag 5 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 5.
 * @default metal
 * @param Terrain Tag 6 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 6.
 * @default wood
 * @param Terrain Tag 7 SE
 * @desc Stepping sound effect file name assigned to tiles with terrain tag: 7.
 * @default dirt
 * @param Size Tag Pitch Increment
 * @desc Pitch increment/decrement for event tag <Size:Big|Tiny> (placing this value at 0 won't have any effect).
 * @default 40
 * @param Special Tag 1 SE
 * @desc Stepping sound effect file name assigned to event tag <Special:1>.
 * @default robot
 * @param Special Tag 2 SE
 * @desc Stepping sound effect file name assigned to event tag <Special:2>.
 * @default wheels
 * @param Special Tag 3 SE
 * @desc Stepping sound effect file name assigned to event tag <Special:3>.
 * @default claws
 * @param Special Tag 4 SE
 * @desc Stepping sound effect file name assigned to event tag <Special:4>.
 * @default chains
 * @param Special Tag 5 SE
 * @desc Stepping sound effect file name assigned to event tag <Special:5>.
 * @default dragged
 * ============================================================================
 * @help
 * ============================================================================
 * Intructions
 * ============================================================================
 *
 * Once you have assigned terrain tag IDs to the tileset and configured the plugin
 * parameters accordingly, you can then tag a map event to produce stepping sound
 * effects by simply placing the string "<NPC>" somewhere in its event note input
 * field.
 * You can also employ special tags to events in order to replace the default
 * tileset stepping SE. This is useful for events that walk around the map in an
 * unique pattern (like for example an evil demon with claws in their feet).
 * For this, simply tag the event with "<Special:N>", where N is the number of
 * the special stepping SE you previously indicated in the plugin parameters.
 * If you don't wish an event to play both, the terrain and special stepping SE
 * simultaneously, add the tag "<SpecialOnly>".
 * The other special tag is "<Size:Big|Tiny>". This is designed to create a more
 * powerful or subtle stepping SE for events bigger/smaller than normal. This
 * effect is simulated by increase/decreasing the stepping SE pitch when played.
 * As always, make sure to change the plugin parameters for this as required.
 *
 * Keep in mind:
 *     - The player will always make noisy steps unless the designated switch
 * is turned ON.
 *     - If a map event is off the screen or its priority is above player, it
 * won't make noisy steps.
 *     - Characters will only make noisy steps if their Walking Animation flag
 * is ON.
 *
 * All stepping sound effects must be placed in the "Audio/SE" game folder, just
 * like any other SE you often use :) You can import them from the editor or
 * manually. Have fun!
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * You can use the following plugin command to change the sound effect assigned
 * to a terrain tag:
 *      SetTerrainTagSE <terrainTagId> <SE file name>
 *
 *    examples: SetTerrainTagSE 1 Water
 *              SetTerrainTagSE 3
 *
 * Also, if for some reason you require to disable noisy steps for a single
 * event, you can use the following script call:
 *      setNoisyStepsDisabled(flag)
 *
 *    examples: $gameMap.event(5).setNoisyStepsDisabled(true);
 *              $gameMap.event(this._eventId).setNoisyStepsDisabled(true);
 * ============================================================================
 */

//=============================================================================
// Parameter Variables
//=============================================================================
(function() {
  
    var parameters = PluginManager.parameters('AG_CharacterNoisySteps');
    var _playerStepSEVolume = Number(parameters['Player Step SE Volume'] || '0');
    var _eventsStepSEVolume = Number(parameters['Events Step SE Volume'] || '0');
    var _stepSEPitch = Number(parameters['Step SE Pitch'] || '100');
    var _pitchVariance = Number(parameters['Pitch Variance'] || '0');
    var _panVariance = Number(parameters['Pan Variance'] || '0');
    var _disablePlayerNoisyStepsSwitch = Number(parameters['Disable Player Noisy Steps Switch ID'] || 0);
    var _disableEventsNoisyStepsSwitch = Number(parameters['Disable Events Noisy Steps Switch ID'] || 0);
    var _terrainTagSE = [String(parameters['Terrain Tag 0 SE'] || ''),
                         String(parameters['Terrain Tag 1 SE'] || ''),
                         String(parameters['Terrain Tag 2 SE'] || ''),
                         String(parameters['Terrain Tag 3 SE'] || ''),
                         String(parameters['Terrain Tag 4 SE'] || ''),
                         String(parameters['Terrain Tag 5 SE'] || ''),
                         String(parameters['Terrain Tag 6 SE'] || ''),
                         String(parameters['Terrain Tag 7 SE'] || '')];
    var _sizeTagPitch = Number(parameters['Size Tag Pitch Increment'] || '0');
    var _specialTagSE = [String(parameters['Special Tag 1 SE'] || ''),
                         String(parameters['Special Tag 2 SE'] || ''),
                         String(parameters['Special Tag 3 SE'] || ''),
                         String(parameters['Special Tag 4 SE'] || ''),
                         String(parameters['Special Tag 5 SE'] || '')];
  
    function isPlayerNoisyStepsDisabled(){
        return $gameSwitches.value(_disablePlayerNoisyStepsSwitch);
    }
  
    function isEventsNoisyStepsDisabled(){
        return $gameSwitches.value(_disableEventsNoisyStepsSwitch);
    }
  
    function getRandomRangeInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

//=============================================================================
// Game_Interpreter
//=============================================================================

    var Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Game_Interpreter_pluginCommand.call(this, command, args)
        if (command === 'SetTerrainTagSE'){
            var terrainTag = args[0];
            if (terrainTag >= 0 && terrainTag <= 7){
                _terrainTagSE[terrainTag] = args[1];
            }
        }
    };
  
//=============================================================================
// Game_CharacterBase
//=============================================================================
  
    Game_CharacterBase.prototype._noisyStep = false;
    Game_CharacterBase.prototype._noisyStepWaitCount = 0;
  
    var characterNoisySteps_Game_CharacterBase_update = Game_CharacterBase.prototype.update;
    Game_CharacterBase.prototype.update = function() {
        this.performNoisyStep();
        if(this._noisyStep){
            this.resetNoisyStepWaitCount();
        }else if(this._noisyStepWaitCount > 0){
            this._noisyStepWaitCount--;
        }
        characterNoisySteps_Game_CharacterBase_update.call(this);
    };
  
    var characterNoisySteps_Game_CharacterBase_setMoveSpeed = Game_CharacterBase.prototype.setMoveSpeed;
    Game_CharacterBase.prototype.setMoveSpeed = function(moveSpeed) {
        characterNoisySteps_Game_CharacterBase_setMoveSpeed.call(this, moveSpeed);
        this.resetNoisyStepWaitCount();
    };
  
    Game_CharacterBase.prototype.resetNoisyStepWaitCount = function() {
        this._noisyStepWaitCount = 256/Math.pow(2, this.realMoveSpeed());
        this._noisyStep = false;
    };
  
    Game_CharacterBase.prototype.isNPC = function() {
        return false;
    };
  
    Game_CharacterBase.prototype.performNoisyStep = function() { };

//=============================================================================
// Game_Player
//=============================================================================
  
    Game_Player.prototype.performNoisyStep = function() {
        if(!isPlayerNoisyStepsDisabled() && this.hasWalkAnime() && this._noisyStepWaitCount == 0 && this.isMoving()){
            this.playNoisyStep();
            this._noisyStep = true;
        }
    };
  
    Game_Player.prototype.playNoisyStep = function() {
        var pitch = getRandomRangeInt(_stepSEPitch - _pitchVariance, _stepSEPitch + _pitchVariance);
        AudioManager.playSe({ name: _terrainTagSE[this.terrainTag()], volume: _playerStepSEVolume, pitch: pitch, pan: 0 });
    };

//=============================================================================
// Game_Event
//=============================================================================
  
  
    var characterNoisySteps_Game_Event_initMembers = Game_Event.prototype.initMembers;
    Game_Event.prototype.initMembers = function() {
        characterNoisySteps_Game_Event_initMembers.call(this);
        this._noisyStepsDisabled = false;
    };
  
    Game_Event.prototype.performNoisyStep = function() {
        if(!isEventsNoisyStepsDisabled() && !this._noisyStepsDisabled && this.isNPC() && this.isNearTheScreen() && this._priorityType < 2 && this.hasWalkAnime() && this._noisyStepWaitCount == 0 && this.isMoving()){
            if(!this.isSpecialOnly()){
                this.playNoisyStep();
            }
            this.playSpecialNoisyStep();
            this._noisyStep = true;
        }
    };
  
    Game_Event.prototype.playNoisyStep = function() {
        var pitch = getRandomRangeInt(_stepSEPitch - _pitchVariance, _stepSEPitch + _pitchVariance) + _sizeTagPitch*this.sizeMultiplier();
        var pan = _panVariance * this.panVarianceOffset($gamePlayer);
        AudioManager.playSe({ name: _terrainTagSE[this.terrainTag()], volume: _eventsStepSEVolume, pitch: pitch, pan: pan });
    };
  
    Game_Event.prototype.playSpecialNoisyStep = function() {
        if(this.isSpecial()){
            var pitch = getRandomRangeInt(_stepSEPitch - _pitchVariance, _stepSEPitch + _pitchVariance) + _sizeTagPitch*this.sizeMultiplier();
            var pan = _panVariance * this.panVarianceOffset($gamePlayer);
            if(this.event().note.indexOf('<Special:1>') != -1){
                AudioManager.playSe({ name: _specialTagSE[0], volume: _eventsStepSEVolume, pitch: pitch, pan: pan });  
            }
            if(this.event().note.indexOf('<Special:2>') != -1){
                AudioManager.playSe({ name: _specialTagSE[1], volume: _eventsStepSEVolume, pitch: pitch, pan: pan });  
            }
            if(this.event().note.indexOf('<Special:3>') != -1){
                AudioManager.playSe({ name: _specialTagSE[2], volume: _eventsStepSEVolume, pitch: pitch, pan: pan });  
            }
            if(this.event().note.indexOf('<Special:4>') != -1){
                AudioManager.playSe({ name: _specialTagSE[3], volume: _eventsStepSEVolume, pitch: pitch, pan: pan });  
            }
            if(this.event().note.indexOf('<Special:5>') != -1){
                AudioManager.playSe({ name: _specialTagSE[4], volume: _eventsStepSEVolume, pitch: pitch, pan: pan });  
            }
        }
    };
  
    Game_Event.prototype.panVarianceOffset = function(character) {
        if(character._x < this._x){
            return 1;
        }
        else if(character._x > this._x){
            return -1;
        }
        else{
            return 0;
        }
    };
  
    Game_Event.prototype.isNPC = function() {
        return this.event().note.indexOf('<NPC>') != -1;
    };
  
    Game_Event.prototype.isSpecial = function() {
        return this.event().note.indexOf('<Special:') != -1;
    };
  
    Game_Event.prototype.isSpecialOnly = function() {
        return this.event().note.indexOf('<SpecialOnly>') != -1;
    };
  
    Game_Event.prototype.sizeMultiplier = function() {
        if(this.event().note.indexOf('<Size:Tiny>') != -1){
            return 1;
        }else if(this.event().note.indexOf('<Size:Big>') != -1){
            return -1;
        }else{
            return 0;
        }
    };
  
    Game_Event.prototype.setNoisyStepsDisabled = function(flag) {
        this._noisyStepsDisabled = flag;
    };
})();