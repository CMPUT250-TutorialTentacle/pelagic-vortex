/*:
* @plugindesc Remove all reference to level system
* @author MAZEMAKER (http://mazemaker.itch.io/)
*
* 
* @param updateLayout
* @type boolean
* @default true
* @desc Update character simple status layout (such as on menu screen)
*
* @param yanflyOverride
* @type boolean
* @default false
* @desc Remove exp references & update layout for Yanfly Status Menu Core (v1.04 tested). 
*
* @help
Only removes visual aspect of level system.
Be sure to change character maximum level to "1"
if you wish to completely remove. 

If using with "yanflyOverride", please place below
Yanfly plugin or else error may occur. 
*/
var Imported = Imported || [];
Imported.MAZE_NoLevels = true;

var parameters = PluginManager.parameters('MAZE_NoLevels');
var updateLayout = parameters["updateLayout"] == "true" ? true: false;
var yanflyOverride = parameters["yanflyOverride"] == "true" ? true : false;


(function() {

	var drawActorLevel = Window_Base.prototype.drawActorLevel;
	Window_Base.prototype.drawActorLevel = function(actor, x, y) {
		//
	};

	Window_Status.prototype.drawExpInfo = function(x, y) {
	    //
	};

	if (updateLayout)
	{
		Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
		    var lineHeight = this.lineHeight();
		    var width2 = width - 150 - this.textPadding();
		    var x2 = x + width2 + this.textPadding() * 2; // + 210;
		    //var width2 = width - this.textPadding();
		    this.drawActorName(actor, x, y);
		    this.drawActorLevel(actor, x, y + lineHeight * 1);
		    this.drawActorIcons(actor, x2, y + lineHeight * 1, 144, 0);
		    this.drawActorIcons(actor, x2, y + lineHeight * 2, 144, 4);
		    this.drawActorClass(actor, x2, y);
		    this.drawActorHp(actor, x, y + lineHeight * 1, width2);
		    this.drawActorMp(actor, x, y + lineHeight * 2, width2);
		};

		Window_Base.prototype.drawActorIcons = function(actor, x, y, width, offset) {
			// skip the first X states (for drawing multiple lines across multiple function calls)
			offset = offset || 0;

		    width = width || 144;
		    var icons = actor.allIcons().slice(offset, offset+Math.floor(width / Window_Base._iconWidth));
		    for (var i = 0; i < icons.length; i++) {
		        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
		    }
		};
	}

	if (yanflyOverride)
	{
		Window_StatusInfo.prototype.drawGeneral = function() {
			var dx = this.standardPadding() / 2;
			var dy = this.lineHeight() / 2;
			var dw = (this.contents.width - this.standardPadding());
			var dh = this.lineHeight();
			var text;
			this.changeTextColor(this.systemColor());
			this.drawText(Yanfly.Param.StatusParamText, dx, dy, dw, 'center');
			this.drawGeneralParam();
		};

		Window_StatusInfo.prototype.drawGeneralParam = function() {
		    var rect = new Rectangle();
		    rect.width = (this.contents.width - this.standardPadding() * 2) / 2;
		    rect.y = this.lineHeight();
		    rect.height = this.lineHeight();
		    var dx = rect.x + this.textPadding() * 6;
		    var dw = rect.width - this.textPadding() * 8;
		    for (var i = 0; i < 8; ++i) {
		      if (i < 2) {
		        rect.y += this.lineHeight();
		      } else if (i === 2) {
		      	rect.x += rect.width;
		        rect.y = this.lineHeight() * 2;
		        dx += rect.width;
		      } else {
		      	rect.y += this.lineHeight();
		      }
		      this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
		      this.changeTextColor(this.systemColor());
		  		this.drawText(TextManager.param(i), dx, rect.y, dw, 'left');
		  		this.changeTextColor(this.normalColor());
		  		text = Yanfly.Util.toGroup(this._actor.param(i));
		  		this.drawText(text, dx, rect.y, dw, 'right');
		    }
		};
	}

})();