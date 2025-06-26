(function() {
  'use strict';
  
  var uid = Lampa.Storage.get('client_uid', '');
  
  Lampa.Storage.set('jackett_url', '{jachost}');       // локальный ip:9118 / jacred.xyz
  Lampa.Storage.set('jackett_key', '1');               // ключ доступа
  Lampa.Storage.set('parser_torrent_type', 'jackett');

  Lampa.Storage.set('torrserver_auth', 'true');          // ts включен
  Lampa.Storage.set('torrserver_login', 'xuy'); // логин для доступа к ts 
  Lampa.Storage.set('torrserver_password', 'Xuy');
  Lampa.Storage.set('torrserver_url', 'https://ts.xuy.com');  // URL TorrServer

  // мои настройки
  Lampa.Storage.set('parse_in_search', 'true');
  Lampa.Storage.set('torrserver', 'true');
  Lampa.Storage.set('mask', 'false');
  Lampa.Storage.set('helper', 'false');
  Lampa.Storage.set('background_type', 'poster');
  Lampa.Storage.set('player_hls_method', 'hlsjs');
  Lampa.Storage.set('advanced_animation', 'true');
  Lampa.Storage.set('proxy_tmdb','true');
  Lampa.Storage.set('proxy_tmdb_auto','true');
  Lampa.Storage.set('jackett_interview','all');
  Lampa.Storage.set('parse_lang','lg_df');
  Lampa.Storage.set('torrserver_preload','false');
  Lampa.Storage.set('torrserver_savedb','false');
  Lampa.Storage.set('torrents_sort','PublisTime');
  Lampa.Storage.set('menu_hide','["Позже","Нравится"]');

  Lampa.Utils.putScriptAsync([
    "{localhost}/plugins/stream.js",
    "{localhost}/plugins/kp_trailers.js", 
    "{localhost}/plugins/kp_source.js", 
    "{localhost}/plugins/interface.js", 
    "{localhost}/plugins/src-filter.js", 
    "{localhost}/plugins/ru-en.js", 
    "{localhost}/plugins/themes-alex4.js",
//    "{localhost}/plugins/rutube6.js", 
    "{localhost}/plugins/serial.js", 
    "{localhost}/plugins/actors.js", 
    "{localhost}/plugins/tricks.js", 
    "{localhost}/plugins/surs10.js", 
    "{localhost}/plugins/lnum2.js",
    "{localhost}/plugins/head_filter.js", 
    "{localhost}/plugins/want.js", 
    "{localhost}/plugins/rating4.js", 
    "{localhost}/plugins/podborki.js",
    "{localhost}/plugins/color_raiting.js",
    "{localhost}/plugins/numparser4.js", 
    "{localhost}/plugins/123.js"
  ]);
})();