/*:
@plugindesc Simply shakes the screen
@author TheoAllen
@help 
Version 1.0

This plugin simply shakes the screen. I'm not sure what else to add.

To use this plugin, use Plugin Command from the event command, then
type this:

Shake <power> <duration>
- <duration> = duration in frames. Putting 45 means it will last for
               45 frames.
- <power> = How many pixel of shake/displacement. Putting 10 means 
            it will shake up to 10 pixel displacement. Power is 
            gradually wears off as the time passes.

p.s: you can substitute "Shake" with "ShakeScreen" or "ScreenShake"
for your own convenience.

Example:
Shake 10 45
ShakeScreen 10 45
ScreenShake 10 45

Terms of Use:
- Free for commercial
- Credit is optional, but do not claim!
*/
var Theo = Theo || {}
Theo.Shake = {}

Theo.Shake.gameTemp_init = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function(){
    Theo.Shake.gameTemp_init.call(this);
    this.shake_maxdur = 0;
    this.shake_dur = 0;
    this.shake_pow = 0;
}

Game_Temp.prototype.shake_screen = function(power, duration){
    this.shake_maxdur = duration;
    this.shake_dur = duration;
    this.shake_pow = power;
}

Theo.Shake.spritesetBase_updatePos = Spriteset_Base.prototype.updatePosition;
Spriteset_Base.prototype.updatePosition = function(){
    Theo.Shake.spritesetBase_updatePos.call(this);
    if($gameTemp.shake_dur > 0){
        $gameTemp.shake_dur -= 1;
        let rate = $gameTemp.shake_dur/$gameTemp.shake_maxdur;
        this.x += Math.random() * $gameTemp.shake_pow * rate * (Math.random() >= 0.5 ? 1 : -1);
        this.y += Math.random() * $gameTemp.shake_pow * rate * (Math.random() >= 0.5 ? 1 : -1);
    }
}

Theo.Shake.plugin_command = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
    Theo.Shake.plugin_command.call(this, command, args);
    command = command.toLowerCase();
    if(command === 'shakescreen' || command === 'shake' || command === 'screenshake'){
        $gameTemp.shake_screen(args[0], args[1]);
    }
}