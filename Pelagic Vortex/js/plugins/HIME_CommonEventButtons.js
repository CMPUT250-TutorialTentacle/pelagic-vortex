/*:
-------------------------------------------------------------------------------
@title Common Event Buttons
@author Hime --> HimeWorks (http://himeworks.com)
@version 1.1
@date Feb 1, 2016
@filename HIME_CommonEventButtons.js
@url http://himeworks.com/2016/01/common-event-buttons/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------------
@plugindesc v1.1 - Allows you to execute common events with the press of a 
button on the map.
@help 
-------------------------------------------------------------------------------
== Description ==

By default, common events can only be executed when you have an event call a
common event, or if a common event runs automatically when a condition is met.

With this plugin, you can assign common events to certain buttons on the
keyboard. When that button is pressed, the common event will be executed as
long as you are on the map and common events can be executed!

This allows you to create your own special logic when certain keys are
pressed, without having to find or write a plugin for it.

So for example, if you wanted to press a button to switch the order of your
party members while on the map, you can create a common event and then put
together the event logic. Finally, you can assign this common event to one
of your game buttons! No scripting required.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Free for use in commercial projects, but it would be nice to let me know
- Please provide credits to HimeWorks

== Change Log ==

1.1 - Feb 1, 2016
 * Supports common event buttons in the battle scene now
 * Refactored to make it easier to extend to other scenes
1.0 - Jan 21, 2016
 * initial release

== Usage ==

To assign a common event to a button, create a comment somewhere in the
common event and then write

  <trigger button: BUTTON_NAME />
  
RPG Maker offers a very limited set of buttons to work with by default. They
are as follows:

  ok       - Z key, or Enter key
  escape   - X key, or Esc key
  shift    - left or right shift
  control  - left or right ctrl/alt
  pageup   - Q key, or page up key
  pagedown - W key, or page down key
  up       - up arrow, or numpad 8
  down     - down arrow, or numpad 2
  left     - left arrow, or numpad 4     
  right    - right arrow, or numpad 6
  debug    - F9
  
So for example, if you wanted a common event to run whenever you press one
of the escape buttons, you would write

  <trigger button: escape />
  
And, if successful, the common event you assigned to it will run when you
press the button on the map.

You can use other keyboard plugins to provide more buttons, such as

ZE Keymapper: http://mvplugins.com/plugin/Zalerinian/ZE%20-%20Key%20Mapper
Quasi Input: http://forums.rpgmakerweb.com/index.php?/topic/51087-quasi-input/

Please refer to the instructions in those plugins for a list of button names.

-------------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.TH_CommonEventButtons = 1;
TH.CommonEventButtons = TH.CommonEventButtons || {};

(function ($) {

  $.Regex = /<trigger[-_ ]button:\s*(.+?)\s*\/>/im

  $.buttonTrigger = function(commonEvent) {
    if (commonEvent.buttonTrigger === undefined) {
      commonEvent.buttonTrigger = null;
      var list = commonEvent.list;
      for (var i = 0; i < list.length; i++) {
        var cmd = list[i];
        if (cmd.code === 108) {
          var res = $.Regex.exec(cmd.parameters[0]);
          if (res) {
            commonEvent.buttonTrigger = res[1];
          }
        }
      }
    }
    return commonEvent.buttonTrigger;
  };
  
  Scene_Base.prototype.loadCommonEventButtons = function() {
    this._commonEventButtons = {};
    for (var i = 1; i < $dataCommonEvents.length; i++) {
      var cev = $dataCommonEvents[i];
      var button = $.buttonTrigger(cev)
      if (button) {
        this._commonEventButtons[button] = cev.id
      }
    }
  };
  
  Scene_Base.prototype.updateCommonEventButtons = function() {
    if (!this.canCheckCommonEventButton()) {
      return;
    }
    for (var key in this._commonEventButtons) {
      if (Input.isTriggered(key)) {
        $gameTemp.reserveCommonEvent(this._commonEventButtons[key]);
      }
    }
  };
  
  Scene_Base.prototype.canCheckCommonEventButton = function() {
    if ($gameMap.isEventRunning()) {
      return false;
    }
    return true;
  }
  
  /***************************************************************************/

  var TH_SceneMap_initialize = Scene_Map.prototype.initialize;
  Scene_Map.prototype.initialize = function() {
    TH_SceneMap_initialize.call(this);
    this.loadCommonEventButtons();      
  };
  
  var TH_SceneMap_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function() {
    TH_SceneMap_update.call(this);
    this.updateCommonEventButtons();
  };
  
  /***************************************************************************/
  
  var TH_SceneBattle_initialize = Scene_Battle.prototype.initialize;
  Scene_Battle.prototype.initialize = function() {
    TH_SceneBattle_initialize.call(this);
    this.loadCommonEventButtons();      
  };
  
  var TH_SceneBattle_update = Scene_Battle.prototype.update;
  Scene_Battle.prototype.update = function() {
    TH_SceneBattle_update.call(this);
    this.updateCommonEventButtons();
  };

})(TH.CommonEventButtons);