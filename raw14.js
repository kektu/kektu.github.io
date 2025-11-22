(function () {
    'use strict';
    Lampa.Platform.tv(); 

    // === Tweaks & Tricks: скрытие колокольчика уведомлений через CSS ===
    function applyHideNoticeBellStyle() {
        try {
            var styleId = 'tricks-hide-notice-style';
            var needHide = Lampa.Storage.field('HideNoticeBell') == true;

            var exist = document.getElementById(styleId);

            if (needHide) {
                if (!exist) {
                    var style = document.createElement('style');
                    style.id = styleId;
                    style.textContent = '.head__action.notice--icon{display:none!important;}';
                    document.head.appendChild(style);
                }
            } else {
                if (exist) exist.remove();
            }
        } catch (e) {}
    }



    function add() {
        // === Tweaks & Tricks: инициализация значений для новых пользователей ===
        // Логика: если ни один из наших ключей ещё не записан в Lampa.Storage,
        // считаем это "первым запуском" и включаем все опции плагина.
        // Для старых пользователей, у кого хоть один ключ уже есть, ничего не меняем.
        try {
            var tt_keys = ['NoTrailerMainPage','NoTimeNoDate','YouTubeStyle','Reloadbutton','BUTTONS_fix','HideNoticeBell','HideOnline2'];
            var tt_has_any = tt_keys.some(function(k) {
                var val = Lampa.Storage.field(k);
                return typeof val !== 'undefined' && val !== null;
            });
            if (!tt_has_any) {
                tt_keys.forEach(function(k) {
                    Lampa.Storage.set(k, true);
                });
            }
        } catch (e) {}


        // === Скрытие кнопки Онлайн2 через CSS ===
        function applyHideOnline2Style() {
            try {
                var styleId = 'tricks-hide-online2-style';
                var needHide = Lampa.Storage.field('HideOnline2') == true;

                var exist = document.getElementById(styleId);

                if (needHide) {
                    if (!exist) {
                        var style = document.createElement('style');
                        style.id = styleId;
                        style.textContent = '.full-start__button.selector.button--play{display:none!important;}';
                        document.head.appendChild(style);
                    }
                } else {
                    if (exist) exist.remove();
                }
            } catch (e) {}
        }


        function updateT() {
            if(Lampa.Storage.field('BUTTONS_fix') == true) {
                $(".view--torrent", Lampa.Activity.active().activity.render()).empty().append("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#4caf50' fill-rule='evenodd' d='M23.501,44.125c11.016,0,20-8.984,20-20 c0-11.015-8.984-20-20-20c-11.016,0-20,8.985-20,20C3.501,35.141,12.485,44.125,23.501,44.125z' clip-rule='evenodd'/><path fill='#fff' fill-rule='evenodd' d='M43.252,27.114C39.718,25.992,38.055,19.625,34,11l-7,1.077 c1.615,4.905,8.781,16.872,0.728,18.853C20.825,32.722,17.573,20.519,15,14l-8,2l10.178,27.081c1.991,0.67,4.112,1.044,6.323,1.044 c0.982,0,1.941-0.094,2.885-0.232l-4.443-8.376c6.868,1.552,12.308-0.869,12.962-6.203c1.727,2.29,4.089,3.183,6.734,3.172 C42.419,30.807,42.965,29.006,43.252,27.114z' clip-rule='evenodd'/></svg><span>Торренты</span>");
				$(".view--trailer", Lampa.Activity.active().activity.render())
  .empty()
  .append(
    '<svg width="32" height="32" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M23.5 7.2c0-.8-.3-1.6-1-2.3-.8-.9-1.8-1-2.2-1.1C17.4 3.5 12 3.5 12 3.5s-5.4 0-8.3.3c-.4 0-1.5.1-2.2 1.1-.7.7-1 1.5-1 2.3C0 10.1 0 12 0 12s0 1.9.5 4.8c0 .8.3 1.6 1 2.3.8.9 1.9 1 2.3 1.1 1.7.2 8.3.3 8.3.3s5.4 0 8.3-.3c.4 0 1.5-.1 2.2-1.1.7-.7 1-1.5 1-2.3.5-2.9.5-4.8.5-4.8s0-1.9-.5-4.8z" fill="#FF0000"/>'+
      '<polygon points="10,8 16,12 10,16" fill="#FFF"/>'+
    '</svg><span style="vertical-align:middle;color:#FFF;font-size:14px;">YouTube</span>'
  );
                $(".open--menu", Lampa.Activity.active().activity.render()).empty().append("<svg viewBox='0 0 847 847' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd'><circle cx='423' cy='423' r='398' fill='#3498db' class='fill-1fc255'></circle><path d='M642 423 467 322 292 221v404l175-101z' fill='#fff7f7' stroke='#fff7f7' stroke-width='42.33' stroke-linejoin='round' class='fill-fff7f7 stroke-fff7f7'></path></svg><span>Смотреть</span>");
                $(".view--online", Lampa.Activity.active().activity.render()).empty().append("<svg viewBox='0 0 847 847' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd'><circle cx='423' cy='423' r='398' fill='#3498db' class='fill-1fc255'></circle><path d='M642 423 467 322 292 221v404l175-101z' fill='#fff7f7' stroke='#fff7f7' stroke-width='42.33' stroke-linejoin='round' class='fill-fff7f7 stroke-fff7f7'></path></svg><span>Смотреть</span>");
                $(".view--streamv1", Lampa.Activity.active().activity.render()).empty().append("<svg viewBox='0 0 847 847' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd'><circle cx='423' cy='423' r='398' fill='#3498db' class='fill-1fc255'></circle><path d='M642 423 467 322 292 221v404l175-101z' fill='#fff7f7' stroke='#fff7f7' stroke-width='42.33' stroke-linejoin='round' class='fill-fff7f7 stroke-fff7f7'></path></svg><span>Смотреть</span>");
            }
        }

        /* Скрываем ленту трейлеров на Главной */
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'NoTrailerMainPage',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Скрыть Трейлеры-новинки',
                description: 'Скрывает баннерную ленту на главной странице'
            },
            onChange: function (value) {
                var intervalID
                intervalID = setInterval(function() {
                    if (Lampa.Storage.field('NoTrailerMainPage') == true) {
                        if (Lampa.Activity.active().component == 'main' && Lampa.Activity.active().source == 'cub') {
                            $('#NoTrailerMainPage').remove();
                            var banner = 'div.activity__body > div > div > div > div > div:nth-child(1)'
                            Lampa.Template.add('NoTrailerMainPage', '<div id="NoTrailerMainPage"><style>' + banner + '{opacity: 0%!important;display: none;}</style></div>');
                            $('body').append(Lampa.Template.get('NoTrailerMainPage', {}, true));
                        } 
                        if (Lampa.Activity.active().component !== 'main') {
                            $('#NoTrailerMainPage').remove()
                        }
                        if (Lampa.Activity.active().component == 'category' && Lampa.Activity.active().url == 'movie' && Lampa.Activity.active().source == 'cub') {
                            $('#NoTrailerMainPage').remove();
                            var banner = 'div.activity__body > div > div > div > div > div:nth-child(2)'
                            Lampa.Template.add('NoTrailerMainPage', '<div id="NoTrailerMainPage"><style>' + banner + '{opacity: 0%!important;display: none;}</style></div>');
                            $('body').append(Lampa.Template.get('NoTrailerMainPage', {}, true));
                        } 
                    }
                    if (Lampa.Storage.field('NoTrailerMainPage') == false) {
                        clearInterval(intervalID)
                    }
                }, 500);
            }
        });    

        /* Скрываем часы на заставке */
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'NoTimeNoDate',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Скрыть часы на заставке CUB',
                description: 'Если переживаете за выгорание экрана OLED'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('NoTimeNoDate') == true) {
                    $('#notimedatescreen').remove();
                    Lampa.Template.add('notimedatescreen', '<div id="notimedatescreen"><style>.screensaver__datetime{opacity: 0%!important;display: none;}</style></div>');
                    $('body').append(Lampa.Template.get('notimedatescreen', {}, true));
                }                        
                if (Lampa.Storage.field('NoTimeNoDate') == false) {
                    $('#notimedatescreen').remove();
                }
            }
        });

        /* Стиль в плеере - YouTube */
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'YouTubeStyle',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Стилизация встроенного плеера',
                description: 'В стиле YouTube'
            },
            onChange: function(value) {
                if(Lampa.Storage.field('YouTubeStyle') == false) {
                    $('#YOUTUBESTYLE').remove();
                    $('#YOUTUBESTYLE-POSITION').remove();
                    $('#YOUTUBESTYLE-POSITION-focus').remove();
                }
                if(Lampa.Storage.field('YouTubeStyle') == true) {
                    $('body').append(Lampa.Template.get('YOUTUBESTYLE', {}, true));
                    $('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION', {}, true));
                    $('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION-focus', {}, true));
                }
            },
            onRender: function(item) {
                Lampa.Template.add('YOUTUBESTYLE', '<div id="YOUTUBESTYLE" class="hide"><style>div.player-panel__position{background-color: #f00!important;}</style></div>');
                Lampa.Template.add('YOUTUBESTYLE-POSITION', '<div id="YOUTUBESTYLE-POSITION" class="hide"><style>div.player-panel__position>div:after{background-color: #f00!important; box-shadow: 0 0 3px 0.2em!important;}</style></div>');
                Lampa.Template.add('YOUTUBESTYLE-POSITION-focus', '<div id="YOUTUBESTYLE-POSITION-focus" class="hide"><style>body > div.player > div.player-panel.panel--paused > div > div.player-panel__timeline.selector.focus > div.player-panel__position > div:after{box-shadow: 0 0 3px 0.2em!important;}</style></div>');
            }
        });


        /* Скрыть колокольчик уведомлений */
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'HideNoticeBell',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Скрыть колокольчик уведомлений',
                description: 'Удаляет иконку уведомлений в шапке и не даёт ей появляться снова'
            },
            onChange: function (value) {
                try {
                    applyHideNoticeBellStyle();
                } catch (e) {}
            }
        });


        /* Скрыть кнопку Онлайн2 */
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'HideOnline2',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Скрыть кнопку Онлайн2',
                description: 'Удаляет кнопку play у онлайн-видеоплеера'
            },
            onChange: function (value) {
                try {
                    applyHideOnline2Style();
                } catch (e) {}
            },
            onRender: function(item) {
                try {
                    applyHideOnline2Style();
                } catch (e) {}
            }
        });

        /* Кнопка Перезагрузки и Консоли*/
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'Reloadbutton',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Добавить кнопку перезагрузки',
                description: 'Иконка рядом с часами'
            },
            onChange: function(value) {
                if(Lampa.Storage.field('Reloadbutton') == false) {
                    $('#RELOAD').addClass('hide');
                }
                if(Lampa.Storage.field('Reloadbutton') == true) {
                    $('#RELOAD').removeClass('hide');
                }
                if(Lampa.Storage.field('Reloadbutton') == false) {
                    $('#CONSOLE').addClass('hide');
                }
                if(Lampa.Storage.field('Reloadbutton') == true) {
                    $('#CONSOLE').removeClass('hide');
                }
                if(Lampa.Storage.field('Reloadbutton') == false) {
                    $('#ExitButton').addClass('hide');
                }                
                if(Lampa.Storage.field('Reloadbutton') == true) {
                    $('#ExitButton').removeClass('hide');
                }
            }
        });

        /* СТИЛИЗАЦИЯ кнопок просмотра с учётом MODS's */
        Lampa.SettingsApi.addParam({
            component: 'Multi_Menu_Component',
            param: {
                name: 'BUTTONS_fix',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Стилизовать кнопки просмотра',
                description: 'Делает кнопки цветными'
            },
            onChange: function(value) {
                if(Lampa.Storage.field('BUTTONS_fix') == true) {
                    updateT()
                }
                Lampa.Settings.update();
            },
            onRender: function(item) {
                if(Lampa.Storage.field('BUTTONS_fix') == true) {
                    updateT()
                }
            }
        });

        /* Создаем меню */
        Lampa.SettingsApi.addComponent({
            component: 'Multi_Menu_Component',
            name: 'Tweaks & Tricks',
            icon: '<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M527.579429 186.660571a119.954286 119.954286 0 1 1-67.949715 0V47.542857a33.938286 33.938286 0 0 1 67.949715 0v139.190857z m281.380571 604.598858a119.954286 119.954286 0 1 1 67.949714 0v139.190857a33.938286 33.938286 0 1 1-67.949714 0v-139.190857z m-698.441143 0a119.954286 119.954286 0 1 1 67.949714 0v139.190857a33.938286 33.938286 0 0 1-67.949714 0v-139.190857zM144.457143 13.531429c18.797714 0 34.011429 15.213714 34.011428 33.938285v410.038857a33.938286 33.938286 0 0 1-67.949714 0V47.542857c0-18.724571 15.213714-33.938286 33.938286-33.938286z m0 722.139428a60.269714 60.269714 0 1 0 0-120.466286 60.269714 60.269714 0 0 0 0 120.466286z m698.514286-722.139428c18.724571 0 33.938286 15.213714 33.938285 33.938285v410.038857a33.938286 33.938286 0 1 1-67.949714 0V47.542857c0-18.724571 15.213714-33.938286 34.011429-33.938286z m0 722.139428a60.269714 60.269714 0 1 0 0-120.466286 60.269714 60.269714 0 0 0 0 120.466286z m-349.403429 228.717714a33.938286 33.938286 0 0 1-33.938286-33.938285V520.411429a33.938286 33.938286 0 0 1 67.949715 0v410.038857a33.938286 33.938286 0 0 1-34.011429 33.938285z m0-722.139428a60.269714 60.269714 0 1 0 0 120.539428 60.269714 60.269714 0 0 0 0-120.539428z" fill="#ffffff"/></g></svg>'
        });

        /* Кнопка Перезагрузки */
        var my_reload = '<div id="RELOAD" class="head__action selector reload-screen hide"><svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.4800000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,1,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z" fill="currentColor"></path></g></svg></div>';
        $('#app > div.head > div > div.head__actions').append(my_reload);
        
        $('#RELOAD').on('hover:enter hover:click hover:touch', function() {
            location.reload();
        });
        if(Lampa.Storage.field('Reloadbutton') == false) {
                $('#RELOAD').addClass('hide');
        }
        if(Lampa.Storage.field('Reloadbutton') == true) {
                $('#RELOAD').removeClass('hide');
        }
    
        /* Кнопка Консоли */
        var my_console = '<div id="CONSOLE" class="head__action selector console-screen hide"><svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="20.48"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" fill="currentColor"></path></g></svg></div>';
        $('#app > div.head > div > div.head__actions').append(my_console);
        
        $('#CONSOLE').on('hover:enter hover:click hover:touch', function() {
            Lampa.Controller.toggle('console');
        });
        if(Lampa.Storage.field('Reloadbutton') == false) {
                $('#CONSOLE').addClass('hide');
        }
        if(Lampa.Storage.field('Reloadbutton') == true) {
                $('#CONSOLE').removeClass('hide');
        }        

        /* Кнопка Выхода в верхнем баре */
        var my_top_exit = '<div id="my_top_exit" class="head__action selector exit-screen hide"><svg fill="#ffffff" width="256px" height="256px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3ZM8.293,14.293,10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414Z" fill="currentColor"></path></g></svg></div>';
        $('#app > div.head > div > div.head__actions').append(my_top_exit);

        $('#my_top_exit').on('hover:enter hover:click hover:touch', function() {
                Lampa.Activity.out();
                if(Lampa.Platform.is('tizen')) tizen.application.getCurrentApplication().exit();
                if(Lampa.Platform.is('webos')) window.close();
                if(Lampa.Platform.is('android')) Lampa.Android.exit();
                if(Lampa.Platform.is('orsay')) Lampa.Orsay.exit();
        });
        if(Lampa.Storage.field('Reloadbutton') == false) {
                $('#my_top_exit').addClass('hide');
        }
        if(Lampa.Storage.field('Reloadbutton') == true) {
                $('#my_top_exit').removeClass('hide');
        }

        /* Скрываем баннер Трейлеров на Главной */
        if (Lampa.Storage.field('NoTrailerMainPage') == true) {
            var intervalID
            setTimeout(function() {
                intervalID = setInterval(function() {
                    if (Lampa.Activity.active().component == 'main' && Lampa.Activity.active().source == 'cub') {
                        $('#NoTrailerMainPage').remove();
                        var banner = 'div.activity__body > div > div > div > div > div:nth-child(1)'
                        Lampa.Template.add('NoTrailerMainPage', '<div id="NoTrailerMainPage"><style>' + banner + '{opacity: 0%!important;display: none;}</style></div>');
                        $('body').append(Lampa.Template.get('NoTrailerMainPage', {}, true));
                    } 
                    if (Lampa.Activity.active().component !== 'main') {
                        $('#NoTrailerMainPage').remove()
                    }
                    if (Lampa.Activity.active().component == 'category' && Lampa.Activity.active().url == 'movie' && Lampa.Activity.active().source == 'cub') {
                        $('#NoTrailerMainPage').remove();
                        var banner = 'div.activity__body > div > div > div > div > div:nth-child(2)'
                        Lampa.Template.add('NoTrailerMainPage', '<div id="NoTrailerMainPage"><style>' + banner + '{opacity: 0%!important;display: none;}</style></div>');
                        $('body').append(Lampa.Template.get('NoTrailerMainPage', {}, true));
                    }
                    if (Lampa.Storage.field('NoTrailerMainPage') == false) {
                        clearInterval(intervalID)
                    }            
                }, 500)
            }, 1000);
        }

        /* Скрываем часы на заставке CUB и Chromecast */
        if (Lampa.Storage.field('NoTimeNoDate') == true) {
            Lampa.Template.add('notimedatescreen', '<div id="notimedatescreen"><style>.screensaver__datetime{opacity: 0%!important;display: none;}</style></div>');
            $('body').append(Lampa.Template.get('notimedatescreen', {}, true));
        }

        /* Стиль в плеере - YouTube при старте*/
        if(Lampa.Storage.field('YouTubeStyle') == true) {
            Lampa.Template.add('YOUTUBESTYLE', '<div id="YOUTUBESTYLE" class="hide"><style>div.player-panel__position{background-color: #f00!important;}</style></div>');
            Lampa.Template.add('YOUTUBESTYLE-POSITION', '<div id="YOUTUBESTYLE-POSITION" class="hide"><style>div.player-panel__position>div:after{background-color: #f00!important; box-shadow: 0 0 3px 0.2em!important;}</style></div>');
            Lampa.Template.add('YOUTUBESTYLE-POSITION-focus', '<div id="YOUTUBESTYLE-POSITION-focus" class="hide"><style>body > div.player > div.player-panel.panel--paused > div > div.player-panel__timeline.selector.focus > div.player-panel__position > div:after{box-shadow: 0 0 3px 0.2em!important;}</style></div>');
            $('body').append(Lampa.Template.get('YOUTUBESTYLE', {}, true));
            $('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION', {}, true));
            $('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION-focus', {}, true));
        }

        /* Скрытие колокольчика уведомлений при старте (если включено в настройках) */
        applyHideNoticeBellStyle();


        /* Скрытие кнопки Онлайн2 при старте (если включено в настройках) */
        applyHideOnline2Style();


        var timerId;
        timerId = setInterval(updateT, 1000);
    }

    /* Если всё готово */
    if(window.appready) add();
    else {
        Lampa.Listener.follow('app', function(e) {
            if(e.type == 'ready') {
                add();
            }
        });
    }
})();


/* ==== SHIO/Lampa YouTube icon fix v3 — MutationObserver ====
   Appended: 2025-10-30T20:52:12.387154Z
   Tracks DOM mutations and reapplies the YouTube icon when .view--trailer is added/updated.
*/
(function() {
  const svg = `
    <svg width="32" height="32" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5 7.2c0-.8-.3-1.6-1-2.3-.8-.9-1.8-1-2.2-1.1C17.4 3.5 12 3.5 12 3.5s-5.4 0-8.3.3c-.4 0-1.5.1-2.2 1.1-.7.7-1 1.5-1 2.3C0 10.1 0 12 0 12s0 1.9.5 4.8c0 .8.3 1.6 1 2.3.8.9 1.9 1 2.3 1.1 1.7.2 8.3.3 8.3.3s5.4 0 8.3-.3c.4 0 1.5-.1 2.2-1.1.7-.7 1-1.5 1-2.3.5-2.9.5-4.8.5-4.8s0-1.9-.5-4.8z" fill="#FF0000"/>
      <polygon points="10,8 16,12 10,16" fill="#FFF"/>
    </svg>
    <span style="vertical-align:middle;color:#FFF;font-size:14px;">YouTube</span>
  `;

  function patchYouTubeButton(root) {
    try {
      const $btn = $(".view--trailer", root);
      if (!$btn.length) return;
      const ok = $btn.find("svg").length > 0 && String($btn.text()||'').toLowerCase().includes("youtube");
      if (!ok) {
        $btn.empty().append(svg);
        // console.log("[YT Fix v3] Icon reapplied");
      }
    } catch (e) {}
  }

  function observeLampa() {
    const target = document.body;
    if (!target) return;

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (!m.addedNodes || !m.addedNodes.length) continue;
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList?.contains("view--trailer") || node.querySelector?.(".view--trailer")) {
            patchYouTubeButton(document);
          }
        });
      }
    });

    observer.observe(target, { childList: true, subtree: true });

    // First try + periodic light check as a fallback (covers edge cases without mutations)
    const tick = setInterval(() => {
      try {
        const act = Lampa?.Activity?.active?.();
        const root = act?.activity?.render ? act.activity.render() : null;
        if (root) patchYouTubeButton(root);
      } catch (e) {}
    }, 2000);
  }

  if (document.readyState === "complete") observeLampa();
  else window.addEventListener("load", observeLampa);
})();
/* ==== end of fix v3 ==== */

/* ==== Head filter functionality merged in ====
   Source: head_filter.js
*/

(function() {
	'use strict';

  // Adding multi-language support
	Lampa.Lang.add({
		search: {
			ru: 'Поиск',
			en: 'Search',
			uk: 'Пошук',
			zh: '搜索'
		},
		settings: {
			ru: 'Настройки',
			en: 'Settings',
			uk: 'Налаштування',
			zh: '设置'
		},
		premium: {
			ru: 'Премиум',
			en: 'Premium',
			uk: 'Преміум',
			zh: '高级'
		},
		profile: {
			ru: 'Профиль',
			en: 'Profile',
			uk: 'Профіль',
			zh: '个人资料'
		},
		feed: {
			ru: 'Новости',
			en: 'Feed',
			uk: 'Новини',
			zh: '饲料'
		},
		notice: {
			ru: 'Уведомления',
			en: 'Notifications',
			uk: 'Сповіщення',
			zh: '通知'
		},
		broadcast: {
			ru: 'Вещание', 
			en: 'Broadcast',
			uk: 'Мовлення',
			zh: '广播'
		},
		fullscreen: {
			ru: 'Полноэкранный режим',
			en: 'Fullscreen mode',
			uk: 'Повноекранний режим',
			zh: '全屏模式'
		},
		reload: {
			ru: 'Обновление страницы',
			en: 'Page reload',
			uk: 'Оновлення сторінки',
			zh: '页面重新加载'
		},
		blackfriday: {
			ru: 'Черная пятница',
			en: 'Black Friday',
			uk: 'Чорна п’ятниця',
			zh: '黑色星期五'
		},
		split: {
			ru: 'Разделитель',
			en: 'Divider',
			uk: 'Розділювач',
			zh: '分隔符'
		},
		time: {
			ru: 'Время',
			en: 'Time',
			uk: 'Годинник',
			zh: '时间'
		},
		name_menu: {
			ru: 'Отображать в шапке',
			en: 'Display in header',
			uk: 'Відображати у шапці',
			zh: '在标题中显示'
		},
		name_plugin: {
			ru: 'Настройка шапки',
			en: 'Display in header',
			uk: 'Налаштування шапки',
			zh: '帽子设置'
		},
		plugin_description: {
			ru: 'Плагин для настройки шапки',
			en: 'Plugin for customizing the header',
			uk: 'Плагін для налаштування шапки',
			zh: '用于配置上限的插件'
		}
	});

	function startPlugin() {
		var manifest = {
			type: 'other',
			version: '0.2.0',
			name: Lampa.Lang.translate('name_plugin'),
			description: Lampa.Lang.translate('plugin_description'),
			component: 'head_filter',
		};
		Lampa.Manifest.plugins = manifest;

		var head = {
			'head_filter_show_search': {name:Lampa.Lang.translate('search'), element: '.open--search'},
			'head_filter_show_settings': {name:Lampa.Lang.translate('settings'), element: '.open--settings'}, 
			'head_filter_show_premium': {name:Lampa.Lang.translate('premium'), element: '.open--premium'}, 
			'head_filter_show_profile': {name: Lampa.Lang.translate('profile'), element: '.open--profile'}, 
			'head_filter_show_feed': {name: Lampa.Lang.translate('feed'), element: '.open--feed'}, 
			'head_filter_show_notice': {name: Lampa.Lang.translate('notice'), element: '.open--notice'},
			'head_filter_show_broadcast': {name: Lampa.Lang.translate('broadcast'), element: '.open--broadcast'},
			'head_filter_show_fullscreen': {name: Lampa.Lang.translate('fullscreen'), element: '.full-screen'}, 
			'head_filter_show_reload': {name: Lampa.Lang.translate('reload'), element: '.m-reload-screen'},
			'head_filter_show_blackfriday': {name: Lampa.Lang.translate('blackfriday'), element: '.black-friday__button'}, 
			'head_filter_show_split': {name: Lampa.Lang.translate('split'), element: '.head__split'}, 
			'head_filter_show_time': {name: Lampa.Lang.translate('time'), element: '.head__time'}, 
		};

		function showHideElement(element, show) {
			if (show == true) {
				$(element).show();
			} else {
				$(element).hide();
			}
		}

		Lampa.Storage.listener.follow('change', function(event) {
			if (event.name == 'activity') {
				setTimeout(function() {
					Object.keys(head).forEach(function(key) {
						var show_element = Lampa.Storage.get(key, true); 
						showHideElement(head[key].element, show_element);     
					});          
				}, 1000);
			} else if (event.name in head) {
				var show_element = Lampa.Storage.get(event.name, true); 
				showHideElement(head[event.name].element, show_element);     
			}
		});

    // https://github.com/yumata/lampa-source/blob/main/src/interaction/template.js
		Lampa.Template.add('settings_head_filter',`<div></div>`);

		Lampa.SettingsApi.addParam({
			component: 'interface',
			param: {
				type: 'button'
			},
			field: {
				name: Lampa.Lang.translate('name_plugin'),
				description: Lampa.Lang.translate('plugin_description')
			},
			onChange: ()=>{
				Lampa.Settings.create('head_filter',{
					onBack: ()=>{
						Lampa.Settings.create('interface')
					}
				})
			}
		})   

		Lampa.SettingsApi.addParam({
			component: 'head_filter',
			param: {
				type: 'title'
			},
			field: {
				name:Lampa.Lang.translate('name_menu'),
			}
		});   

		Object.keys(head).forEach(function(key) {
			Lampa.SettingsApi.addParam({
				component: 'head_filter',
				param: {
					name: key,
					type: 'trigger',
				default: true
				},
				field: {
					name: head[key].name,
				}        
			});
		});
		
	}

	if (window.appready) {
		startPlugin();
	} else {
		Lampa.Listener.follow('app', function(e) {
			if (e.type == 'ready') {
				startPlugin();
			}
		});
	}
})();
