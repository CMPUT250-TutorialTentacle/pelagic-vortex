/*:
 * @plugindesc Skip video on key press
 * @author Dmytryk (Dmy, Demetrius)
 *
 * @help This plugin allows to skip videos by pressing the Escape key
 * or Enter key.
 *
 * This plugin relies on MV’s private variables so it is essentially A HACK.
 * It may break in future versions. But for now, it works fine.
 *
 * This plugin is placed into public domain according to the CC0 public domain
 * dedication. See https://creativecommons.org/publicdomain/zero/1.0/ for more
 * information.
 *
 * @param Disabler switch
 * @desc Number of switch. Allows to disable the plugin when the switch is OFF.
 * If set to 0, the plugin will always work.
 * @type number
 * @default 0
 */
/*:ru
 * @plugindesc Сбросить видео при нажатии на клавишу
 * @author Dmytryk (Dmy, Demetrius)
 *
 * @help Этот плагин позволяет пропустить видео, нажав на клавиши Escape или
 * Enter.
 *
 * Этот плагин использует внутренние переменные MV, поэтому это хак.
 * Он может перестать работать в следующих версиях. Но пока что работает.
 *
 * Этот плагин передан в общественное достояние согласно CC0. Подробнее см. на
 * странице https://creativecommons.org/publicdomain/zero/1.0/deed.ru
 *
 * @param Disabler switch
 * @desc Номер переключателя. Позволяет отключить плагин, когда переключатель
 * ВКЛ. Если указать 0, то плагин будет работать всегда.
 * @type number
 * @default 0
 */

if (typeof Imported === 'undefined') {
  Imported = {};
}
Imported.DMY_SkipVideo = '0.1';

(function () {

  var parameters = PluginManager.parameters('DMY_SkipVideo');
  var disablerSwitch = Number(parameters['Disabler switch']);

  function videoIsSkippable() {
    if (disablerSwitch === 0 || isNaN(disablerSwitch)) {
      return true;
    }

    return !$gameSwitches.value(disablerSwitch);
  }

  var _Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function () {
    if (Graphics.isVideoPlaying() && (Input.isTriggered('menu')
                                        || Input.isTriggered('escape')
                                        || Input.isTriggered('cancel')
                                        || Input.isTriggered('ok')
                                        || TouchInput.isCancelled())
                                  && videoIsSkippable()) {
      if ('_video' in Graphics && 'pause' in Graphics._video
                              && typeof Graphics._video.pause === 'function') {
        Graphics._video.pause();
        Graphics._onVideoEnd();
      }
    }
    else {
      _Scene_Map_update.call(this);
    }
  }

})();
