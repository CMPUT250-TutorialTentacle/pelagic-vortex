// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"ShakeScreen","status":true,"description":"Simply shakes the screen","parameters":{}},
{"name":"GALV_MessageSoundEffects","status":true,"description":"Play sound effects when during Show Text event commands.","parameters":{"Delay Time":"5","Default Talk SE":"snd_talk,80,100","Default Confirm SE":"Cursor2,0,100","-----------":"","Quick SE 1":"snd_talk,80,60","Quick SE 2":"snd_tentacletalk,80,100","Quick SE 3":"snd_narrator,80,100","Quick SE 4":""}},
{"name":"DMY_SkipVideo","status":true,"description":"Skip video on key press","parameters":{"Disabler switch":"0"}},
{"name":"-ShoraLighting-","status":true,"description":"[v1.8.3] Provide dynamic lighting to RPG Maker MV/MZ engine, intended to be easiest to start and most flexible when advanced!","parameters":{"sep":"","Game":"{\"regionStart\":\"1\",\"regionEnd\":\"10\",\"topRegionId\":\"50\",\"ignoreShadowsId\":\"51\"}","sep0":"","Map":"{\"ambient\":\"#525252\",\"shadowAmbient\":\"#333333\",\"topBlockAmbient\":\"#333333\"}","sep1":"","default":"{\"name\":\"default\",\"filename\":\"lights\",\"status\":\"true\",\"radius\":\"100\",\"angle\":\"0\",\"direction\":\"false\",\"sep0\":\"\",\"tint\":\"#ffffff\",\"colorfilter\":\"{\\\"hue\\\":\\\"0\\\",\\\"colortone\\\":\\\"rgba(0,0,0,0)\\\",\\\"blendcolor\\\":\\\"rgba(0,0,0,0)\\\",\\\"brightness\\\":\\\"255\\\"}\",\"sep1\":\"\",\"offset\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\"}\",\"animation\":\"{\\\".Static\\\":\\\"=====================\\\",\\\"flicker\\\":\\\"{\\\\\\\"status\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"flickintensity\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"flickspeed\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\".Dynamic\\\":\\\"=====================\\\",\\\"pulse\\\":\\\"{\\\\\\\"status\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"pulsefactor\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"pulsespeed\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"rotation\\\":\\\"{\\\\\\\"rotatespeed\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"}\",\"sep4\":\"\",\"shadow\":\"true\",\"bwall\":\"false\",\"shadowambient\":\"\",\"shadowoffsetx\":\"0\",\"shadowoffsety\":\"0\"}","LightList":"[\"{\\\"name\\\":\\\"glow\\\",\\\"filename\\\":\\\"fireglow\\\",\\\"status\\\":\\\"true\\\",\\\"radius\\\":\\\"100\\\",\\\"angle\\\":\\\"0\\\",\\\"direction\\\":\\\"false\\\",\\\"sep0\\\":\\\"\\\",\\\"tint\\\":\\\"#ffffff\\\",\\\"colorfilter\\\":\\\"{\\\\\\\"hue\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"colortone\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"blendcolor\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"brightness\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"sep1\\\":\\\"\\\",\\\"offset\\\":\\\"{\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"animation\\\":\\\"{\\\\\\\".Static\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"flicker\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickintensity\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickspeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\".Dynamic\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"pulse\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsefactor\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"rotation\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"rotatespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\"}\\\",\\\"sep4\\\":\\\"\\\",\\\"shadow\\\":\\\"true\\\",\\\"bwall\\\":\\\"false\\\",\\\"shadowambient\\\":\\\"\\\",\\\"shadowoffsetx\\\":\\\"0\\\",\\\"shadowoffsety\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"redlight\\\",\\\"filename\\\":\\\"redlights\\\",\\\"status\\\":\\\"true\\\",\\\"radius\\\":\\\"150\\\",\\\"angle\\\":\\\"0\\\",\\\"direction\\\":\\\"false\\\",\\\"sep0\\\":\\\"\\\",\\\"tint\\\":\\\"#ffffff\\\",\\\"colorfilter\\\":\\\"{\\\\\\\"hue\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"colortone\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"blendcolor\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"brightness\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"sep1\\\":\\\"\\\",\\\"offset\\\":\\\"{\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"animation\\\":\\\"{\\\\\\\".Static\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"flicker\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickintensity\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickspeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\".Dynamic\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"pulse\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsefactor\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"rotation\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"rotatespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\"}\\\",\\\"sep4\\\":\\\"\\\",\\\"shadow\\\":\\\"true\\\",\\\"bwall\\\":\\\"false\\\",\\\"shadowambient\\\":\\\"\\\",\\\"shadowoffsetx\\\":\\\"0\\\",\\\"shadowoffsety\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"alarm\\\",\\\"filename\\\":\\\"alarm\\\",\\\"status\\\":\\\"true\\\",\\\"radius\\\":\\\"150\\\",\\\"angle\\\":\\\"0\\\",\\\"direction\\\":\\\"false\\\",\\\"sep0\\\":\\\"\\\",\\\"tint\\\":\\\"#ffffff\\\",\\\"colorfilter\\\":\\\"{\\\\\\\"hue\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"colortone\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"blendcolor\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"brightness\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"sep1\\\":\\\"\\\",\\\"offset\\\":\\\"{\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"20\\\\\\\"}\\\",\\\"animation\\\":\\\"{\\\\\\\".Static\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"flicker\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickintensity\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"10\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickspeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\".Dynamic\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"pulse\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsefactor\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"20\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"20\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"rotation\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"rotatespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"}\\\\\\\"}\\\",\\\"sep4\\\":\\\"\\\",\\\"shadow\\\":\\\"true\\\",\\\"bwall\\\":\\\"false\\\",\\\"shadowambient\\\":\\\"\\\",\\\"shadowoffsetx\\\":\\\"0\\\",\\\"shadowoffsety\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"beam\\\",\\\"filename\\\":\\\"beam\\\",\\\"status\\\":\\\"true\\\",\\\"radius\\\":\\\"50\\\",\\\"angle\\\":\\\"0\\\",\\\"direction\\\":\\\"false\\\",\\\"sep0\\\":\\\"\\\",\\\"tint\\\":\\\"#ffffff\\\",\\\"colorfilter\\\":\\\"{\\\\\\\"hue\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"colortone\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"blendcolor\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"brightness\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"sep1\\\":\\\"\\\",\\\"offset\\\":\\\"{\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"animation\\\":\\\"{\\\\\\\".Static\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"flicker\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickintensity\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickspeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\".Dynamic\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"pulse\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsefactor\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"rotation\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"rotatespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\"}\\\",\\\"sep4\\\":\\\"\\\",\\\"shadow\\\":\\\"true\\\",\\\"bwall\\\":\\\"false\\\",\\\"shadowambient\\\":\\\"\\\",\\\"shadowoffsetx\\\":\\\"0\\\",\\\"shadowoffsety\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"bottombeam\\\",\\\"filename\\\":\\\"bottombeam\\\",\\\"status\\\":\\\"true\\\",\\\"radius\\\":\\\"50\\\",\\\"angle\\\":\\\"0\\\",\\\"direction\\\":\\\"false\\\",\\\"sep0\\\":\\\"\\\",\\\"tint\\\":\\\"#ffffff\\\",\\\"colorfilter\\\":\\\"{\\\\\\\"hue\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"colortone\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"blendcolor\\\\\\\":\\\\\\\"rgba(0,0,0,0)\\\\\\\",\\\\\\\"brightness\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"sep1\\\":\\\"\\\",\\\"offset\\\":\\\"{\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"animation\\\":\\\"{\\\\\\\".Static\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"flicker\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickintensity\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"flickspeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\".Dynamic\\\\\\\":\\\\\\\"=====================\\\\\\\",\\\\\\\"pulse\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"status\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsefactor\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"pulsespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"rotation\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"rotatespeed\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\"}\\\",\\\"sep4\\\":\\\"\\\",\\\"shadow\\\":\\\"true\\\",\\\"bwall\\\":\\\"false\\\",\\\"shadowambient\\\":\\\"\\\",\\\"shadowoffsetx\\\":\\\"0\\\",\\\"shadowoffsety\\\":\\\"0\\\"}\"]","sep2":"","helper":"{\"colors\":\"[\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"white\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#ffffff\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"black\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#000000\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"red\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#ff000000\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"green\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#00ff00\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"blue\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#0000ff\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"orange\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#ffa500\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"cyan\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#00ffff\\\\\\\"}\\\",\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"pink\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#ffc0cb\\\\\\\"}\\\"]\",\"disableEngineShadow\":\"true\"}","sep3":"","filter":"{\"il\":\"\",\"status\":\"false\",\"brightness\":\"1.3\",\"sep\":\"\",\"ss\":\"\",\"softShadow\":\"true\",\"softShadowStr\":\"1\",\"softShadowQlt\":\"2\"}"}},
{"name":"HIME_CommonEventButtons","status":true,"description":"v1.1 - Allows you to execute common events with the press of a \r\nbutton on the map.","parameters":{}},
{"name":"GALV_MessageStyles","status":false,"description":"(v.2.8) Settings to change how your \"Show Text\" messages look as well as code to make them floating.","parameters":{"Input Indicator":"2,0,-12","Indicator Zoom":"100","Message Padding":"0,0,0,0","Message Windowskin":"Window","Other Windowskins":"","Arrow Graphic":"TutorialTentacleIcon","Other Arrow Graphics":"","Windowskin Back Opacity":"192","Y Offset":"60","Font":"","Font Filename":"","Font Outline":"true","Font Size":"28"}},
{"name":"GALV_MoveRouteExtras","status":true,"description":"Additional SCRIPT commands to use within MOVE ROUTES\r\nView the plugin \"Help\" to view available commands.","parameters":{}},
{"name":"Keep Moving (Event) (MV)","status":true,"description":"Allows an event to continue moving while you interact with it","parameters":{}}
];
