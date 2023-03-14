//=============================================================================
// Keep Moving (Event)
// by Shaz
// Last Updated: 2015.11.04
//=============================================================================

/*:
 * @plugindesc Allows an event to continue moving while you interact with it
 * @author Shaz
 *
 * @help
 * This plugin prevents the default behaviour of events, where they stop moving
 * and turn towards the PC when you interact with them.
 *
 * Use the following plugin command on an event page:
 *   KeepMoving
 */

(function() {
  var _Game_Event_initMembers = Game_Event.prototype.initMembers;
  Game_Event.prototype.initMembers = function() {
    _Game_Event_initMembers.call(this);
    this._nolock = false;
  };

  var _Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
  Game_Event.prototype.clearPageSettings = function() {
    _Game_Event_clearPageSettings.call(this);
    this._nolock = false;
  };

  var _Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
  Game_Event.prototype.setupPageSettings = function() {
    _Game_Event_setupPageSettings.call(this);
    if (this.list().some(function(cmd) {
      return cmd.code === 356 && cmd.parameters[0].split(" ").shift().toUpperCase() === "KEEPMOVING";
      })) {
      this._nolock = true;
    }
  };

  var _Game_Event_lock = Game_Event.prototype.lock;
  Game_Event.prototype.lock = function() {
    if (!this._nolock) {
      _Game_Event_lock.call(this);
    }
  };
})();