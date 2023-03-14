/*:
 * Character Anchors by Shaz
 * Shaz_CharacterAnchors.js
 * Ver 1.00 2019.02.10
 *
 * @plugindesc Adjust anchor positions to change alignment with tiles.
 * @author Shaz
 *
 * @help This plugin allows you to adjust a character's sprite x and y anchors
 * to change the way it lines up with other tiles on the map.
 * This plugin has no plugin commands.
 *
 *
 * BACKGROUND:
 * By default, character sprites are lined up on the map so they are
 * centered horizontally on a tile, and vertically so the bottoms match.
 * The default character sprite anchors to achieve this are 0.5 for
 * x/horizontal (the middle) and 1 for y/vertical (the bottom).
 *
 * This plugin changes the anchor points of the sprite (0, 0 is top left; 1, 1
 * is bottom right), but not the point on the map to which it's anchored 
 * (whatever anchor point you specify will be lined up to the center of the
 * tile horizontally, and the bottom of the tile vertically).
 * 
 *
 * USAGE:
 * Place the following into the note box on an event or as a comment on an
 * event page to set an event's sprite anchor point:
 * <anchorX: n>
 * <anchorY: n>
 *
 * where n is any integer or floating point number (including negative numbers)
 *
 * In an event's note box, use only one or both tags:
 * <anchorX: n><anchorY: n>
 *
 * In an event page's comment, use only one or both tags, in a single
 * comment on the same line or on separate lines, or in two comments:
 *
 * Comment: <anchorX: n><anchorY: n>
 *
 * Comment: <anchorX: n>
 *          <anchorY: n>
 *
 * Comment: <anchorX: n>
 * Comment: <anchorY: n>
 *
 * If you have the same tag (anchorX or anchorY) defined several times on a
 * single event page, the last one will be used.
 *
 *
 * SCRIPT CALL:
 * If needed, you can adjust a character's anchor dynamically (without defining
 * it on the event) with the following script calls:
 *     $gameMap.event(id).setAnchorX(n)
 *     $gameMap.event(id).setAnchorY(n)
 *
 * You can even change the player's sprite anchor:
 *     $gamePlayer.setAnchorX(n)
 *     $gamePlayer.setAnchorY(n)
 *
 * Or a follower's sprite anchor:
 *     $gamePlayer.followers()[0].setAnchorX(n)
 *     $gamePlayer.followers()[0].setAnchorY(n)
 *
 * or inside a move route on the player or an event:
 *     Script: this.setAnchorX(n)
 *     Script: this.setAnchorY(n)
 * 
 * though setting anchors via script call may not be permanent (may revert 
 * when the map is reloaded or you return to the map from a menu).
 *
 * 
 * EXPERIMENT:
 * Add an event to your map, play the game, and open the dev tools (F8)
 * In the console tab, type the following, where id is your event id with no
 * leading zeros:
 *     evt = $gameMap.event(id)
 * Then experiment with the anchors to see how the sprite moves:
 *     evt.setAnchorX(n)
 *     evt.setAnchorY(n)
 */

var Imported = Imported || {};
Imported.Shaz_CharacterAnchors = true;

var Shaz = Shaz || {};
Shaz.CA = Shaz.CA || {};
Shaz.CA.Version = 1.00;

(function() {
	var _Shaz_CA_Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
	Game_CharacterBase.prototype.initMembers = function() {
		_Shaz_CA_Game_CharacterBase_initMembers.call(this);
		this.resetAnchors();
	};

	Game_CharacterBase.prototype.resetAnchors = function() {
		this._anchorX = 0.5;
		this._anchorY = 1;
	};

	Game_CharacterBase.prototype.setAnchorX = function(anchorX) {
		this._anchorX = anchorX;
	};

	Game_CharacterBase.prototype.setAnchorY = function(anchorY) {
		this._anchorY = anchorY;
	};

	Game_CharacterBase.prototype.anchorX = function() {
		return this._anchorX;
	};

	Game_CharacterBase.prototype.anchorY = function() {
		return this._anchorY;
	};

	var _Shaz_CA_Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
	Game_Event.prototype.clearPageSettings = function() {
		_Shaz_CA_Game_Event_clearPageSettings.call(this);
		this.resetAnchors();
	};

	var _Shaz_CA_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
	Game_Event.prototype.setupPageSettings = function() {
		_Shaz_CA_Game_Event_setupPageSettings.call(this);
		if (this.event().meta.anchorX) {
			this.setAnchorX(parseFloat(this.event().meta.anchorX));
		}

		if (this.event().meta.anchorY) {
			this.setAnchorY(parseFloat(this.event().meta.anchorY));
		}

		if (this.page() && this.list()) {
			this.list().filter(function(cmd) {
				if (cmd.code === 108 || cmd.code === 408) {
					if (cmd.parameters[0].match(/<anchorX:\s*(-?[\d\.]+)>/i)) {
						this.setAnchorX(parseFloat(RegExp.$1));
					}
					if (cmd.parameters[0].match(/<anchorY:\s*(-?[\d\.]+)>/i)) {
						this.setAnchorY(parseFloat(RegExp.$1));
					}
				}
			}.bind(this));
		}
	};

	_Shaz_Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
	Sprite_Character.prototype.updatePosition = function() {
		_Shaz_Sprite_Character_updatePosition.call(this);
		this.updateAnchors();
	};

	Sprite_Character.prototype.updateAnchors = function() {
		this.anchor.x = this._character.anchorX();
		this.anchor.y = this._character.anchorY();
	};

})();