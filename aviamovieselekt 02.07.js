(function() {
    'use strict';
    
    Lampa.Lang.add({
        maxsm_themes: {
            ru: "Темы",
            en: "Themes",
            uk: "Теми",
            be: "Тэмы",
            zh: "主题",
            pt: "Temas",
            bg: "Теми",
            he: "ערכות נושא",
            cs: "Témata"
        },
        maxsm_themes_theme: {
            ru: "Тема оформления",
            en: "Interface theme",
            uk: "Тема оформлення",
            be: "Тэма афармлення",
            zh: "界面主题",
            pt: "Tema de interface",
            bg: "Тема на интерфейса",
            he: "ערכת נושא לממשק",
            cs: "Téma rozhraní"
        },
        maxsm_themes_animations: {
            ru: "Анимации",
            en: "Animations",
            uk: "Анімації",
            be: "Анімацыі",
            zh: "动画",
            pt: "Animações",
            bg: "Анимации",
            he: "אנימציות",
            cs: "Animace"
        },
        maxsm_themes_translate_tv: {
            ru: "Переводить TV",
            en: "Translate TV",
            uk: "Перекладати TV",
            be: "Перакладаць TV",
            zh: "翻译 TV",
            pt: "Traduzir TV",
            bg: "Превеждане на TV",
            he: "לתרגם TV",
            cs: "Přeložit TV"
        },
        maxsm_themes_tvcaption: {
            ru: "СЕРИАЛ",       
            en: "SERIES",   
            uk: "СЕРІАЛ",    
            be: "СЕРЫЯЛ",     
            zh: "剧集",       
            pt: "SÉRIE",     
            bg: "СЕРИАЛ",      
            he: "סִדְרָה",  
            cs: "SERIÁL" 
        },
        maxsm_themes_incardtemplate: {
            ru: "Макет содержимого карточки",
            en: "Card content layout",
            uk: "Макет вмісту картки",
            be: "Макет змесціва карткі",
            zh: "卡片内容布局",
            pt: "Layout do conteúdo do cartão",
            bg: "Оформление на съдържанието в картата",
            he: "פריסת תוכן בכרטיס",
            cs: "Rozvržení obsahu karty"
        },
        maxsm_themes_bigbuttons: {
            ru: "Большие кнопки в карточке",
            en: "Large buttons in card",
            uk: "Великі кнопки в картці",
            be: "Вялікія кнопкі ў картцы",
            zh: "卡片中的大按钮",
            pt: "Botões grandes no cartão",
            bg: "Големи бутони в картата",
            he: "כפתורים גדולים בכרטיס",
            cs: "Velká tlačítka v kartě"
        }
    });
    
    var themes_svg = '<!-- icon666.com - MILLIONS OF FREE VECTOR ICONS --><svg viewBox="0 0 512.00026 512" xmlns="http://www.w3.org/2000/svg"><path d="m491.238281 20.761719c-14.375-14.375-34.265625-21.890625-54.550781-20.625-20.289062 1.269531-39.078125 11.207031-51.550781 27.261719l-98.660157 127.007812-41.109374-41.109375c-12.015626-12.019531-27.996094-18.636719-44.988282-18.636719-16.996094 0-32.972656 6.617188-44.992187 18.636719l-142.363281 142.363281c-17.363282 17.363282-17.363282 45.617188 0 62.980469l180.335937 180.335937c8.679687 8.683594 20.085937 13.023438 31.488281 13.023438 11.40625 0 22.808594-4.339844 31.492188-13.023438l142.363281-142.363281c12.019531-12.019531 18.636719-27.996093 18.636719-44.992187 0-16.992188-6.617188-32.972656-18.636719-44.988282l-41.109375-41.109374 127.007812-98.660157c16.054688-12.472656 25.992188-31.261719 27.261719-51.550781 1.269531-20.292969-6.25-40.175781-20.625-54.550781zm-276.386719 456.722656-15.898437-15.898437 22.957031-22.957032c5.933594-5.9375 5.933594-15.558594 0-21.496094-5.933594-5.933593-15.558594-5.933593-21.492187 0l-22.957031 22.957032-10.152344-10.148438 44.210937-44.210937c5.9375-5.933594 5.9375-15.558594 0-21.492188-5.933593-5.9375-15.558593-5.9375-21.492187 0l-44.210938 44.210938-42.265625-42.265625 22.957031-22.957032c5.9375-5.9375 5.9375-15.558593 0-21.496093-5.933593-5.933594-15.558593-5.933594-21.492187 0l-22.957031 22.957031-10.152344-10.148438 44.210938-44.210937c5.9375-5.933594 5.9375-15.558594 0-21.492187-5.933594-5.9375-15.558594-5.9375-21.492188 0l-44.210938 44.210937-15.898437-15.898437c-5.511719-5.511719-5.511719-14.484376 0-19.996094l77.199219-77.195313 200.328125 200.328125-77.199219 77.199219c-5.511719 5.511719-14.480469 5.511719-19.992188 0zm118.6875-98.695313-200.328124-200.328124 18.175781-18.175782 200.328125 200.328125zm53.40625-67.167968c0 8.875-3.457031 17.222656-9.734374 23.496094l-4 4.003906-191.484376-191.480469-8.847656-8.847656 4.003906-4.003907c6.273438-6.277343 14.621094-9.730468 23.496094-9.730468s17.21875 3.453125 23.492188 9.730468l153.339844 153.335938c6.277343 6.277344 9.734374 14.621094 9.734374 23.496094zm94.578126-238.210938c-.726563 11.589844-6.398438 22.324219-15.570313 29.449219l-130.019531 101-27.796875-27.792969 101.003906-130.019531c7.125-9.171875 17.855469-14.847656 29.449219-15.570313 11.578125-.71875 22.945312 3.566407 31.15625 11.777344 8.210937 8.210938 12.503906 19.570313 11.777344 31.15625zm0 0" fill="#000000" style="fill: rgb(255, 255, 255);"></path><path d="m439.84375 56.953125c-7.949219 0-15.566406 6.992187-15.195312 15.199219.367187 8.234375 6.675781 15.199218 15.195312 15.199218 7.953125 0 15.566406-6.988281 15.199219-15.199218-.367188-8.234375-6.675781-15.199219-15.199219-15.199219zm0 0" fill="#000000" style="fill: rgb(255, 255, 255);"></path></svg>';

    // Основной объект плагина
    var maxsm_themes = {
        // Название плагина
        name: 'maxsm_themes',
        // Версия плагина
        version: '2.6.1',
        // Настройки по умолчанию
        settings: {
            theme: 'mint_dark'
        }
    };

    // Была ли предыдущая тема стоковая
    var prevtheme = '';
    // Запускаем только один раз
    var onetime = false;

    // Цвета loader'а для каждой темы
    var loaderColors = {
        "default": '#fff',
        violet_blue: '#6a11cb',
        mint_dark: '#3da18d',
        deep_aurora: '#7e7ed9',
        crystal_cyan: '#7ed0f9',
        amber_noir: '#f4a261',
        velvet_sakura: '#f6a5b0'
    };

    // Функция для применения тем
    function applyTheme(theme) {
        // Удаляем предыдущие стили темы
        $('#maxsm_themes_theme').remove();

        if (
            prevtheme !== '' &&
            (
                (prevtheme === 'default' && theme !== 'default') ||
                (prevtheme !== 'default' && theme === 'default')
            )
        ) {
            window.location.reload();
        }

        prevtheme = theme;

        // Если выбрано "Нет", просто удаляем стили
        if (theme === 'default') {
            removeAdditionalSettings();
            return;
        }

        var color = loaderColors[theme] || loaderColors["default"];

        var svgCode = encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"135\" height=\"140\" fill=\"".concat(color, "\"><rect width=\"10\" height=\"40\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"0s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"0s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect><rect width=\"10\" height=\"40\" x=\"20\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"0.2s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"0.2s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect><rect width=\"10\" height=\"40\" x=\"40\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"0.4s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"0.4s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect><rect width=\"10\" height=\"40\" x=\"60\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"0.6s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"0.6s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect><rect width=\"10\" height=\"40\" x=\"80\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"0.8s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"0.8s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect><rect width=\"10\" height=\"40\" x=\"100\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"1s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"1s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect><rect width=\"10\" height=\"40\" x=\"120\" y=\"100\" rx=\"6\"><animate attributeName=\"height\" begin=\"1.2s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"40;100;40\" keyTimes=\"0;0.5;1\"/><animate attributeName=\"y\" begin=\"1.2s\" calcMode=\"linear\" dur=\"1s\" repeatCount=\"indefinite\" values=\"100;40;100\" keyTimes=\"0;0.5;1\"/></rect></svg>"));


        // Создаем новый стиль
        var style = $('<style id="maxsm_themes_theme"></style>');

        // Определяем стили для разных тем
        var themes = {
            mint_dark: "\n.navigation-bar__body\n{background: rgba(18, 32, 36, 0.96);\n}\n.card__quality,\n .card__type::after  {\nbackground: linear-gradient(to right, #1e6262dd, #3da18ddd);\n}\n.screensaver__preload {\nbackground:url(\"data:image/svg+xml,".concat(svgCode, "\") no-repeat 50% 50%\n}\n.activity__loader {\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\ndisplay:none;\nbackground:url(\"data:image/svg+xml,").concat(svgCode, "\") no-repeat 50% 50%\n \n}\nhtml, body, .extensions\n {\nbackground: linear-gradient(135deg, #0a1b2a, #1a4036);\ncolor: #ffffff;\n}\n.company-start.icon--broken .company-start__icon,\n.explorer-card__head-img > img,\n.bookmarks-folder__layer,\n.card-more__box,\n.card__img\n,.extensions__block-add\n,.extensions__item\n {\nbackground-color: #1e2c2f;\n}\n.search-source.focus,\n.simple-button.focus,\n.menu__item.focus,\n.menu__item.traverse,\n.menu__item.hover,\n.full-start__button.focus,\n.full-descr__tag.focus,\n.player-panel .button.focus,\n.full-person.selector.focus,\n.tag-count.selector.focus,\n.full-review.focus {\nbackground: linear-gradient(to right, #1e6262, #3da18d);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(61, 161, 141, 0.0);\n}\n.selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\nbackground: linear-gradient(to right, #1e6262, #3da18d);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(61, 161, 141, 0.0);\nborder-radius: 0.5em 0 0 0.5em;\n}\n.full-episode.focus::after,\n.card-episode.focus .full-episode::after,\n.items-cards .selector.focus::after,  \n.card-more.focus .card-more__box::after,\n.card-episode.focus .full-episode::after,\n.card-episode.hover .full-episode::after,\n.card.focus .card__view::after,\n.card.hover .card__view::after,\n.torrent-item.focus::after,\n.online-prestige.selector.focus::after,\n.online-prestige--full.selector.focus::after,\n.explorer-card__head-img.selector.focus::after,\n.extensions__item.focus::after,\n.extensions__block-add.focus::after,\n.full-review-add.focus::after {\nborder: 0.2em solid #3da18d;\nbox-shadow: 0 0 0.8em rgba(61, 161, 141, 0.0);\n}\n.head__action.focus,\n.head__action.hover {\nbackground: linear-gradient(45deg, #3da18d, #1e6262);\n}\n.modal__content {\nbackground: rgba(18, 32, 36, 0.96);\nborder: 0em solid rgba(18, 32, 36, 0.96);\n}\n.settings__content,\n.settings-input__content,\n.selectbox__content,\n.settings-input {\nbackground: rgba(18, 32, 36, 0.96);\n}\n.torrent-serial {\nbackground: rgba(0, 0, 0, 0.22);\nborder: 0.2em solid rgba(0, 0, 0, 0.22);\n}\n.torrent-serial.focus {\nbackground-color: #1a3b36cc;\nborder: 0.2em solid #3da18d;\n}\n"),
            crystal_cyan: "\n.navigation-bar__body\n{background: rgba(10, 25, 40, 0.96);\n}\n.card__quality,\n .card__type::after  {\nbackground: linear-gradient(to right, #00d2ffdd, #3a8ee6dd);\n}\n.screensaver__preload {\nbackground:url(\"data:image/svg+xml,".concat(svgCode, "\") no-repeat 50% 50%\n}\n.activity__loader {\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\ndisplay:none;\nbackground:url(\"data:image/svg+xml,").concat(svgCode, "\") no-repeat 50% 50%\n \n}\nhtml, body, .extensions\n {\nbackground: linear-gradient(135deg, #081822, #104059);\ncolor: #ffffff;\n}\n.company-start.icon--broken .company-start__icon,\n.explorer-card__head-img > img,\n.bookmarks-folder__layer,\n.card-more__box,\n.card__img\n,.extensions__block-add\n,.extensions__item\n {\nbackground-color: #112b3a;\n}\n.search-source.focus,\n.simple-button.focus,\n.menu__item.focus,\n.menu__item.traverse,\n.menu__item.hover,\n.full-start__button.focus,\n.full-descr__tag.focus,\n.player-panel .button.focus,\n.full-person.selector.focus,\n.tag-count.selector.focus,\n.full-review.focus {\nbackground: linear-gradient(to right, #00d2ff, #3a8ee6);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(72, 216, 255, 0.0);\n}\n.selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\nbackground: linear-gradient(to right, #00d2ff, #3a8ee6);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(72, 216, 255, 0.0);\nborder-radius: 0.5em 0 0 0.5em;\n}\n.full-episode.focus::after,\n.card-episode.focus .full-episode::after,\n.items-cards .selector.focus::after,  \n.card-more.focus .card-more__box::after,\n.card-episode.focus .full-episode::after,\n.card-episode.hover .full-episode::after,\n.card.focus .card__view::after,\n.card.hover .card__view::after,\n.torrent-item.focus::after,\n.online-prestige.selector.focus::after,\n.online-prestige--full.selector.focus::after,\n.explorer-card__head-img.selector.focus::after,\n.extensions__item.focus::after,\n.extensions__block-add.focus::after,\n.full-review-add.focus::after {\nborder: 0.2em solid #00d2ff;\nbox-shadow: 0 0 0.8em rgba(72, 216, 255, 0.0);\n}\n.head__action.focus,\n.head__action.hover {\nbackground: linear-gradient(45deg, #00d2ff, #3a8ee6);\n}\n.modal__content {\nbackground: rgba(10, 25, 40, 0.96);\nborder: 0em solid rgba(10, 25, 40, 0.96);\n}\n.settings__content,\n.settings-input__content,\n.selectbox__content,\n.settings-input {\nbackground: rgba(10, 25, 40, 0.96);\n}\n.torrent-serial {\nbackground: rgba(0, 0, 0, 0.22);\nborder: 0.2em solid rgba(0, 0, 0, 0.22);\n}\n.torrent-serial.focus {\nbackground-color: #0c2e45cc;\nborder: 0.2em solid #00d2ff;\n}\n"),
            deep_aurora: "\n.navigation-bar__body\n{background: rgba(18, 34, 59, 0.96);\n}\n.card__quality,\n .card__type::after  {\nbackground: linear-gradient(to right, #2c6fc1dd, #7e7ed9dd);\n}\n.screensaver__preload {\nbackground:url(\"data:image/svg+xml,".concat(svgCode, "\") no-repeat 50% 50%\n}\n.activity__loader {\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\ndisplay:none;\nbackground:url(\"data:image/svg+xml,").concat(svgCode, "\") no-repeat 50% 50%\n \n}\nhtml, body, .extensions\n {\nbackground: linear-gradient(135deg, #1a102b, #0a1c3f);\ncolor: #ffffff;\n}\n.company-start.icon--broken .company-start__icon,\n.explorer-card__head-img > img,\n.bookmarks-folder__layer,\n.card-more__box,\n.card__img\n,.extensions__block-add\n,.extensions__item\n {\nbackground-color: #171f3a;\n}\n.search-source.focus,\n.simple-button.focus,\n.menu__item.focus,\n.menu__item.traverse,\n.menu__item.hover,\n.full-start__button.focus,\n.full-descr__tag.focus,\n.player-panel .button.focus,\n.full-person.selector.focus,\n.tag-count.selector.focus,\n.full-review.focus {\nbackground: linear-gradient(to right, #2c6fc1, #7e7ed9);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(124, 194, 255, 0.0);\n}\n.selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\nbackground: linear-gradient(to right, #2c6fc1, #7e7ed9);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(124, 194, 255, 0.0);\nborder-radius: 0.5em 0 0 0.5em;\n}\n.full-episode.focus::after,\n.card-episode.focus .full-episode::after,\n.items-cards .selector.focus::after,  \n.card-more.focus .card-more__box::after,\n.card-episode.focus .full-episode::after,\n.card-episode.hover .full-episode::after,\n.card.focus .card__view::after,\n.card.hover .card__view::after,\n.torrent-item.focus::after,\n.online-prestige.selector.focus::after,\n.online-prestige--full.selector.focus::after,\n.explorer-card__head-img.selector.focus::after,\n.extensions__item.focus::after,\n.extensions__block-add.focus::after,\n.full-review-add.focus::after {\nborder: 0.2em solid #7e7ed9;\nbox-shadow: 0 0 0.8em rgba(124, 194, 255, 0.0);\n}\n.head__action.focus,\n.head__action.hover {\nbackground: linear-gradient(45deg, #7e7ed9, #2c6fc1);\n}\n.modal__content {\nbackground: rgba(18, 34, 59, 0.96);\nborder: 0em solid rgba(18, 34, 59, 0.96);\n}\n.settings__content,\n.settings-input__content,\n.selectbox__content,\n.settings-input {\nbackground: rgba(18, 34, 59, 0.96);\n}\n.torrent-serial {\nbackground: rgba(0, 0, 0, 0.22);\nborder: 0.2em solid rgba(0, 0, 0, 0.22);\n}\n.torrent-serial.focus {\nbackground-color: #1a102bcc;\nborder: 0.2em solid #7e7ed9;\n}\n"),
            amber_noir: "\n.navigation-bar__body\n{background: rgba(28, 18, 10, 0.96);\n}\n.card__quality,\n .card__type::after {\nbackground: linear-gradient(to right, #f4a261dd, #e76f51dd);\n}\n.screensaver__preload {\nbackground:url(\"data:image/svg+xml,".concat(svgCode, "\") no-repeat 50% 50%\n}\n.activity__loader {\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\ndisplay:none;\nbackground:url(\"data:image/svg+xml,").concat(svgCode, "\") no-repeat 50% 50%\n \n}\nhtml, body, .extensions\n {\nbackground: linear-gradient(135deg, #1f0e04, #3b2a1e);\ncolor: #ffffff;\n}\n.company-start.icon--broken .company-start__icon,\n.explorer-card__head-img > img,\n.bookmarks-folder__layer,\n.card-more__box,\n.card__img\n,.extensions__block-add\n,.extensions__item\n {\nbackground-color: #2a1c11;\n}\n.search-source.focus,\n.simple-button.focus,\n.menu__item.focus,\n.menu__item.traverse,\n.menu__item.hover,\n.full-start__button.focus,\n.full-descr__tag.focus,\n.player-panel .button.focus,\n.full-person.selector.focus,\n.tag-count.selector.focus,\n.full-review.focus {\nbackground: linear-gradient(to right, #f4a261, #e76f51);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(255, 160, 90, 0.0);\n}\n.selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\nbackground: linear-gradient(to right, #f4a261, #e76f51);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(255, 160, 90, 0.0);\nborder-radius: 0.5em 0 0 0.5em;\n}\n.full-episode.focus::after,\n.card-episode.focus .full-episode::after,\n.items-cards .selector.focus::after,  \n.card-more.focus .card-more__box::after,\n.card-episode.focus .full-episode::after,\n.card-episode.hover .full-episode::after,\n.card.focus .card__view::after,\n.card.hover .card__view::after,\n.torrent-item.focus::after,\n.online-prestige.selector.focus::after,\n.online-prestige--full.selector.focus::after,\n.explorer-card__head-img.selector.focus::after,\n.extensions__item.focus::after,\n.extensions__block-add.focus::after,\n.full-review-add.focus::after {\nborder: 0.2em solid #f4a261;\nbox-shadow: 0 0 0.8em rgba(255, 160, 90, 0.0);\n}\n.head__action.focus,\n.head__action.hover {\nbackground: linear-gradient(45deg, #f4a261, #e76f51);\n}\n.modal__content {\nbackground: rgba(28, 18, 10, 0.96);\nborder: 0em solid rgba(28, 18, 10, 0.96);\n}\n.settings__content,\n.settings-input__content,\n.selectbox__content,\n.settings-input {\nbackground: rgba(28, 18, 10, 0.96);\n}\n.torrent-serial {\nbackground: rgba(0, 0, 0, 0.22);\nborder: 0.2em solid rgba(0, 0, 0, 0.22);\n}\n.torrent-serial.focus {\nbackground-color: #3b2412cc;\nborder: 0.2em solid #f4a261;\n}\n"),
            velvet_sakura: "\n.navigation-bar__body\n{background: rgba(56, 32, 45, 0.96);\n}\n.card__quality,\n .card__type::after  {\nbackground: linear-gradient(to right, #f6a5b0dd, #f9b8d3dd);\n}\n.screensaver__preload {\nbackground:url(\"data:image/svg+xml,".concat(svgCode, "\") no-repeat 50% 50%\n}\n.activity__loader {\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\ndisplay:none;\nbackground:url(\"data:image/svg+xml,").concat(svgCode, "\") no-repeat 50% 50%\n \n}\nhtml, body, .extensions\n {\nbackground: linear-gradient(135deg, #4b0e2b, #7c2a57);\ncolor: #ffffff;\n}\n.company-start.icon--broken .company-start__icon,\n.explorer-card__head-img > img,\n.bookmarks-folder__layer,\n.card-more__box,\n.card__img\n,.extensions__block-add\n,.extensions__item\n {\nbackground-color: #5c0f3f;\n}\n.search-source.focus,\n.simple-button.focus,\n.menu__item.focus,\n.menu__item.traverse,\n.menu__item.hover,\n.full-start__button.focus,\n.full-descr__tag.focus,\n.player-panel .button.focus,\n.full-person.selector.focus,\n.tag-count.selector.focus,\n.full-review.focus {\nbackground: linear-gradient(to right, #f6a5b0, #f9b8d3);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(246, 165, 176, 0.0);\n}\n.selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\nbackground: linear-gradient(to right, #f6a5b0, #f9b8d3);\ncolor: #fff;\nbox-shadow: 0 0.0em 0.4em rgba(246, 165, 176, 0.0);\nborder-radius: 0.5em 0 0 0.5em;\n}\n.full-episode.focus::after,\n.card-episode.focus .full-episode::after,\n.items-cards .selector.focus::after,  \n.card-more.focus .card-more__box::after,\n.card-episode.focus .full-episode::after,\n.card-episode.hover .full-episode::after,\n.card.focus .card__view::after,\n.card.hover .card__view::after,\n.torrent-item.focus::after,\n.online-prestige.selector.focus::after,\n.online-prestige--full.selector.focus::after,\n.explorer-card__head-img.selector.focus::after,\n.extensions__item.focus::after,\n.extensions__block-add.focus::after,\n.full-review-add.focus::after {\nborder: 0.2em solid #f6a5b0;\nbox-shadow: 0 0 0.8em rgba(246, 165, 176, 0.0);\n}\n.head__action.focus,\n.head__action.hover {\nbackground: linear-gradient(45deg, #f9b8d3, #f6a5b0);\n}\n.modal__content {\nbackground: rgba(56, 32, 45, 0.96);\nborder: 0em solid rgba(56, 32, 45, 0.96);\n}\n.settings__content,\n.settings-input__content,\n.selectbox__content,\n.settings-input {\nbackground: rgba(56, 32, 45, 0.96);\n}\n.torrent-serial {\nbackground: rgba(0, 0, 0, 0.22);\nborder: 0.2em solid rgba(0, 0, 0, 0.22);\n}\n.torrent-serial.focus {\nbackground-color: #7c2a57cc;\nborder: 0.2em solid #f6a5b0;\n}\n")
        };

        // Устанавливаем стили для выбранной темы
        style.html(themes[theme] || '');

        // Добавляем стиль в head
        $('head').append(style);
        
        animations();
        translate_tv();
        bigbuttons();

        if (onetime === false) {
            onetime = true;
            forall();
            removeFromSettingsMenu();
            fix_lang();
            incardtemplate();
        }
    }
    
    function fix_lang() {
       Lampa.Lang.add({
        tv_status_returning_series: {
          ru: "Идет"
        },
        tv_status_planned: {
          ru: "Запланирован"
        },
        tv_status_in_production: {
          ru: "В производстве"
        },
        tv_status_ended: {
          ru: "Завершен"
        },
        tv_status_canceled: {
          ru: "Отменен"
        },
        tv_status_pilot: {
          ru: "Пилот"
        },
        tv_status_released: {
          ru: "Вышел"
        },
        tv_status_rumored: {
          ru: "По слухам"
        },
        tv_status_post_production: {
          ru: "Скоро"
        }
      });
    }
    
    function removeAdditionalSettings() {
        Lampa.Settings.listener.follow('open', function(e) {
            if (e.name == 'maxsm_themes') {
                e.body.find('[data-name="maxsm_themes_animations"]').remove();
                e.body.find('[data-name="maxsm_themes_translate_tv"]').remove();
                e.body.find('[data-name="maxsm_themes_incardtemplate"]').remove();
                e.body.find('[data-name="maxsm_themes_bigbuttons"]').remove();
            }
        });        
    }
    
    function removeFromSettingsMenu() {
        // Скрываем всё, что плохо сочетается с плагином тем
        Lampa.Settings.listener.follow('open', function(e) {
            if (e.name == 'interface') {
                e.body.find('[data-name="light_version"]').remove();
                e.body.find('[data-name="background"]').remove();
                e.body.find('[data-name="background_type"]').remove();
                e.body.find('[data-name="card_interfice_type"]').remove();
                e.body.find('[data-name="glass_style"]').prev('.settings-param-title').remove();
                e.body.find('[data-name="glass_style"]').remove();
                e.body.find('[data-name="glass_opacity"]').remove();
                e.body.find('[data-name="card_interfice_poster"]').prev('.settings-param-title').remove();
                e.body.find('[data-name="card_interfice_poster"]').remove();
                e.body.find('[data-name="card_interfice_cover"]').remove();
                e.body.find('[data-name="advanced_animation"]').remove();
            }
        });
        // Настройки интерфейса под темы
        Lampa.Storage.set('light_version', 'false');
        Lampa.Storage.set('background', 'false');
        Lampa.Storage.set('card_interfice_type', 'new');
        Lampa.Storage.set('glass_style', 'false');
        Lampa.Storage.set('card_interfice_poster', 'false');
        Lampa.Storage.set('card_interfice_cover', 'true');
        Lampa.Storage.set('advanced_animation', 'false');

    }

    // Дополнительные Шаблоны, не меняющиеся от цветовых стилей    
    function forall() {
        // Шаблон карточки, где год перенесен выше названия
        Lampa.Template.add('card', "<div class=\"card selector layer--visible layer--render\">\n    <div class=\"card__view\">\n        <img src=\"./img/img_load.svg\" class=\"card__img\" />\n\n        <div class=\"card__icons\">\n            <div class=\"card__icons-inner\">\n                \n            </div>\n        </div>\n    <div class=\"card__age\">{release_year}</div>\n    </div>\n\n    <div class=\"card__title\">{title}</div>\n    </div>");
        // Шаблон карточки выхода эпизода, выкинем футер из card_episode, год и название на карточку
        Lampa.Template.add('card_episode', "<div class=\"card-episode selector layer--visible layer--render\">\n    <div class=\"card-episode__body\">\n        <div class=\"full-episode\">\n            <div class=\"full-episode__img\">\n                <img />\n            </div>\n\n            <div class=\"full-episode__body\">\n     <div class=\"card__title\">{title}</div>\n            <div class=\"card__age\">{release_year}</div>\n            <div class=\"full-episode__num hide\">{num}</div>\n                <div class=\"full-episode__name\">{name}</div>\n                <div class=\"full-episode__date\">{date}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-episode__footer hide\">\n        <div class=\"card__imgbox\">\n            <div class=\"card__view\">\n                <img class=\"card__img\" />\n            </div>\n        </div>\n\n        <div class=\"card__left\">\n            <div class=\"card__title\">{title}</div>\n            <div class=\"card__age\">{release_year}</div>\n        </div>\n    </div>\n</div>");
        // Стили 
        var forall_style = "\n<style id=\"maxsm_themes_forall\">\n " +
            // По центру в мобилке
            "@media screen and (max-width: 480px) { .full-start-new__head, .full-start-new__title, .full-start__title-original, .full-start__rate, .full-start-new__reactions, .full-start-new__rate-line, .full-start-new__buttons, .full-start-new__details, .full-start-new__tagline { -webkit-justify-content: center; justify-content: center; text-align: center; }\n" +
            ".full-start__title-original {\n   max-width: 100%;\n}\n}" +
            "@media screen and (max-width: 480px) { .full-start-new__right { background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0))); background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%); background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);}}" +
            // Круглые чек-боксы
            ".selectbox-item__checkbox\n {\nborder-radius: 100%\n}\n" +
            ".selectbox-item--checked .selectbox-item__checkbox\n {\nbackground: #ccc;\n}\n" +
            //  Рейтинги внутри карточки
            ".full-start-new__rate-line .full-start__pg {\n    font-size: 1em;\nbackground: #fff;\n    color: #000;\n}\n." +
            ".full-start__rate \n{\n     border-radius: 0.25em;\n padding: 0.3em;\n background-color: rgba(0, 0, 0, 0.3);\n}\n" +
            ".full-start__pg, .full-start__status\n {\nfont-size: 1em;\nbackground: #fff;\n    color: #000;\n}\n" +
            // Докручиваем плашки на карточках стилями 
              // Заголовок
            ".card__title {\n                    height: 3.6em;\n                    text-overflow: ellipsis;\n                     -o-text-overflow: ellipsis;\n                    text-overflow: ellipsis;\n                    -webkit-line-clamp: 3;\n                    line-clamp: 3;\n                }\n " +
              // Год
            ".card__age {\n  position: absolute;\n  right: 0em;\n  bottom: 0em;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.6);\n  color: #ffffff;\n  font-weight: 700;\n  padding: 0.4em 0.6em;\n    -webkit-border-radius: 0.48em 0 0.48em 0;\n     -moz-border-radius: 0.48em 0 0.48em 0;\n          border-radius: 0.48em 0 0.48em 0;\nline-height: 1.0;\nfont-size: 1.0em;\n}\n " +
              // Рейтинг
            ".card__vote {\n  position: absolute;\n  bottom: auto; \n right: 0em;\n  top: 0em;\n  background: rgba(0, 0, 0, 0.6);\n    font-weight: 700;\n  color: #fff;\n -webkit-border-radius: 0 0.34em 0 0.34em;\n     -moz-border-radius: 0 0.34em 0 0.34em;\n          border-radius: 0 0.34em 0 0.34em;\nline-height: 1.0;\nfont-size: 1.4em;\n}\n  " +
              // Иконки закладок и т.д.
            ".card__icons {\n  position: absolute;\n  top: 2em;\n  left: 0;\n  right: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n    -webkit-border-radius: 0 0.5em 0.5em 0;\n     -moz-border-radius: 0 0.5em 0.5em 0;\n          border-radius: 0 0.5em 0.5em 0;\n}\n" +
            ".card__icons-inner {\n  background: rgba(0, 0, 0, 0); \n}\n" +
              // Статус расширенных закладок
            ".card__marker {\n position: absolute;\n  left: 0em;\n  top: 4em;\n  bottom: auto; \n  background: rgba(0, 0, 0, 0.6);\n  -webkit-border-radius: 0 0.5em 0.5em 0;\n     -moz-border-radius: 0 0.5em 0.5em 0;\n          border-radius: 0 0.5em 0.5em 0;\n  font-weight: 700;\n font-size: 1.0em;\n   padding: 0.4em 0.6em;\n    display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.2;\nmax-width: min(12em, 95%);\nbox-sizing: border-box;\n}\n" +
              // На маленьких экранах обрезаем, на больших полностью
            ".card__marker > span {\n max-width: min(12em, 95%);\n}\n" +
              // отметка качества background: rgba(0, 0, 0, 0.6);\n  
            ".card__quality {\n  position: absolute;\n  left: auto;\n right: 0em;\n  bottom: 2.4em;\n  padding: 0.4em 0.6em;\n  color: #fff;\n font-weight: 700;\n  font-size: 1.0em;\n  -webkit-border-radius: 0.5em 0 0 0.5em;\n  -moz-border-radius: 0.5em 0 0 0.5em;\n  border-radius: 0.5em 0 0 0.5em;\n  text-transform: uppercase;\n}\n" +
            // Уменьшаем расстояние между рядами только для карточках в списках
            ".items-line.items-line--type-cards + .items-line.items-line--type-cards  {\nmargin-top: 1em;\n}\n" +
            // Так же широкие карты фиксим, чтобы не было отскока нижнего ряда, делаем отступ снизу
            ".card--small .card__view {\nmargin-bottom: 2em;\n}\n" +
            // Уменьшаем высоту после удаления футера, нужно для card_episode
            ".items-line--type-cards {\n min-height: 18em;\n}\n" +
            // Внутри карточки информация стремится к нижней границе экрана
            "@media screen and (min-width: 580px) {\n.full-start-new {\nmin-height: 80vh;\ndisplay: flex\n}\n}\n" +
            // Постер в карточке, менее затемнен чем в стоке
            ".full-start__background.loaded {\nopacity: 0.8;\n}\n.full-start__background.dim {\nopacity: 0.2;\n}\n" +
            // Скругления у большого числа элементов
            ".explorer__files .torrent-filter .simple-button {\nfont-size: 1.2em;\n-webkit-border-radius: 0.5em;\n-moz-border-radius: 0.5em;\nborder-radius: 0.5em;\n}\n" +
            ".full-review-add,\n.full-review,\n.extensions__item,\n.extensions__block-add,\n.search-source,\n.bookmarks-folder__layer,\n.bookmarks-folder__body,\n.card__img,\n.card__promo,\n.full-episode--next .full-episode__img:after,\n.full-episode__img img,\n.full-episode__body,\n.full-person__photo,\n.card-more__box,\n.full-start__button,\n.simple-button,\n.register {\nborder-radius: 0.5em;\n}\n" +
            ".extensions__item.focus::after,\n.extensions__block-add.focus::after,\n.full-episode.focus::after,\n.full-review-add.focus::after,\n.card-parser.focus::after,\n.card-episode.focus .full-episode::after,\n.card-episode.hover .full-episode::after,\n.card.focus .card__view::after,\n.card.hover .card__view::after,\n.card-more.focus .card-more__box::after,\n.register.focus::after {\nborder-radius: 1em;\n}\n" +
            ".search-source.focus,\n.simple-button.focus,\n.menu__item.focus,\n.menu__item.traverse,\n.menu__item.hover,\n.full-start__button.focus,\n.full-descr__tag.focus,\n.player-panel .button.focus,\n.full-person.selector.focus,\n.tag-count.selector.focus {\nborder-radius: 0.5em;\n}\n" +
            // Меню слева
            ".menu__item.focus {border-radius: 0 0.5em 0.5em 0;\n}\n" +
            ".menu__list {\npadding-left: 0em;\n}\n" +
            // Оставим иконки белыми в левом Меню
            ".menu__item.focus .menu__ico {\n   -webkit-filter: invert(1);\n    filter: invert(1);\n }\n " +
            // Белые иконки в бошке
            // ".head__action.focus, .head__action.hover {\ncolor: fff;\n}\n" +
            "</style>\n";
        Lampa.Template.add('forall_style_css', forall_style);
        $('body').append(Lampa.Template.get('forall_style_css', {}, true));
    }
    
    function incardtemplate() {
        var incardtemplate = localStorage.getItem('maxsm_themes_incardtemplate')  === 'true';
        if (incardtemplate) {
            // Шаблон карточки Фильма\Сериала, переносим кнопки из кнопки "Смотреть" на верхний уровень etc.
            Lampa.Template.add('full_start_new', "<div class=\"full-start-new\">\n\n<div class=\"full-start-new__body\">\n<div class=\"full-start-new__left\">\n<div class=\"full-start-new__poster\">\n<img class=\"full-start-new__img full--poster\" />\n</div>\n</div>\n\n<div class=\"full-start-new__right\">\n<div class=\"full-start-new__head\"></div>\n<div class=\"full-start-new__title\">{title}</div>\n<div class=\"full-start__title-original\">{original_title}</div>\n<div class=\"full-start-new__tagline full--tagline\">{tagline}</div>\n<div class=\"full-start-new__rate-line\">\n<div class=\"full-start__rate rate--tmdb\"><div>{rating}</div><div class=\"source--name\">TMDB</div></div>\n<div class=\"full-start__rate rate--imdb hide\"><div></div><div class=\"source--name\">IMDb</div></div>\n<div class=\"full-start__rate rate--kp hide\"><div></div><div class=\"source--name\">Кинопоиск</div></div>\n\n<div class=\"full-start__pg hide\"></div>\n<div class=\"full-start__status hide\"></div>\n</div>\n<div class=\"full-start-new__details\"></div>\n<div class=\"full-start-new__reactions\">\n<div>#{reactions_none}</div>\n</div>\n\n<div class=\"full-start-new__buttons\">\n<div class=\"full-start__button selector button--play\">\n<svg width=\"28\" height=\"29\" viewBox=\"0 0 28 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"14\" cy=\"14.5\" r=\"13\" stroke=\"currentColor\" stroke-width=\"2.7\"/>\n<path d=\"M18.0739 13.634C18.7406 14.0189 18.7406 14.9811 18.0739 15.366L11.751 19.0166C11.0843 19.4015 10.251 18.9204 10.251 18.1506L10.251 10.8494C10.251 10.0796 11.0843 9.5985 11.751 9.9834L18.0739 13.634Z\" fill=\"currentColor\"/>\n</svg>\n\n<span>#{title_watch}</span>\n</div>\n\n<div class=\"full-start__button view--torrent\">\n<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 50 50\" width=\"50px\" height=\"50px\">\n<path d=\"M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M40.5,30.963c-3.1,0-4.9-2.4-4.9-2.4 S34.1,35,27,35c-1.4,0-3.6-0.837-3.6-0.837l4.17,9.643C26.727,43.92,25.874,44,25,44c-2.157,0-4.222-0.377-6.155-1.039L9.237,16.851 c0,0-0.7-1.2,0.4-1.5c1.1-0.3,5.4-1.2,5.4-1.2s1.475-0.494,1.8,0.5c0.5,1.3,4.063,11.112,4.063,11.112S22.6,29,27.4,29 c4.7,0,5.9-3.437,5.7-3.937c-1.2-3-4.993-11.862-4.993-11.862s-0.6-1.1,0.8-1.4c1.4-0.3,3.8-0.7,3.8-0.7s1.105-0.163,1.6,0.8 c0.738,1.437,5.193,11.262,5.193,11.262s1.1,2.9,3.3,2.9c0.464,0,0.834-0.046,1.152-0.104c-0.082,1.635-0.348,3.221-0.817,4.722 C42.541,30.867,41.756,30.963,40.5,30.963z\" fill=\"currentColor\"/>\n</svg>\n\n<span>#{full_torrents}</span>\n</div>\n\n<div class=\"full-start__button selector view--trailer\">\n<svg height=\"70\" viewBox=\"0 0 80 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M71.2555 2.08955C74.6975 3.2397 77.4083 6.62804 78.3283 10.9306C80 18.7291 80 35 80 35C80 35 80 51.2709 78.3283 59.0694C77.4083 63.372 74.6975 66.7603 71.2555 67.9104C65.0167 70 40 70 40 70C40 70 14.9833 70 8.74453 67.9104C5.3025 66.7603 2.59172 63.372 1.67172 59.0694C0 51.2709 0 35 0 35C0 35 0 18.7291 1.67172 10.9306C2.59172 6.62804 5.3025 3.2395 8.74453 2.08955C14.9833 0 40 0 40 0C40 0 65.0167 0 71.2555 2.08955ZM55.5909 35.0004L29.9773 49.5714V20.4286L55.5909 35.0004Z\" fill=\"currentColor\"></path>\n</svg>\n\n<span>#{full_trailers}</span>\n</div>\n<div class=\"full-start__button selector button--book\">\n<svg width=\"21\" height=\"32\" viewBox=\"0 0 21 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2 1.5H19C19.2761 1.5 19.5 1.72386 19.5 2V27.9618C19.5 28.3756 19.0261 28.6103 18.697 28.3595L12.6212 23.7303C11.3682 22.7757 9.63183 22.7757 8.37885 23.7303L2.30302 28.3595C1.9739 28.6103 1.5 28.3756 1.5 27.9618V2C1.5 1.72386 1.72386 1.5 2 1.5Z\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n</svg>\n\n<span>#{settings_input_links}</span>\n</div>\n\n<div class=\"full-start__button selector button--reaction\">\n<svg width=\"38\" height=\"34\" viewBox=\"0 0 38 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M37.208 10.9742C37.1364 10.8013 37.0314 10.6441 36.899 10.5117C36.7666 10.3794 36.6095 10.2744 36.4365 10.2028L12.0658 0.108375C11.7166 -0.0361828 11.3242 -0.0361227 10.9749 0.108542C10.6257 0.253206 10.3482 0.530634 10.2034 0.879836L0.108666 25.2507C0.0369593 25.4236 3.37953e-05 25.609 2.3187e-08 25.7962C-3.37489e-05 25.9834 0.0368249 26.1688 0.108469 26.3418C0.180114 26.5147 0.28514 26.6719 0.417545 26.8042C0.54995 26.9366 0.707139 27.0416 0.880127 27.1131L17.2452 33.8917C17.5945 34.0361 17.9869 34.0361 18.3362 33.8917L29.6574 29.2017C29.8304 29.1301 29.9875 29.0251 30.1199 28.8928C30.2523 28.7604 30.3573 28.6032 30.4289 28.4303L37.2078 12.065C37.2795 11.8921 37.3164 11.7068 37.3164 11.5196C37.3165 11.3325 37.2796 11.1471 37.208 10.9742ZM20.425 29.9407L21.8784 26.4316L25.3873 27.885L20.425 29.9407ZM28.3407 26.0222L21.6524 23.252C21.3031 23.1075 20.9107 23.1076 20.5615 23.2523C20.2123 23.3969 19.9348 23.6743 19.79 24.0235L17.0194 30.7123L3.28783 25.0247L12.2918 3.28773L34.0286 12.2912L28.3407 26.0222Z\" fill=\"currentColor\"/>\n<path d=\"M25.3493 16.976L24.258 14.3423L16.959 17.3666L15.7196 14.375L13.0859 15.4659L15.4161 21.0916L25.3493 16.976Z\" fill=\"currentColor\"/>\n</svg>                \n\n<span>#{title_reactions}</span>\n</div>\n\n<div class=\"full-start__button selector button--subscribe hide\">\n<svg width=\"25\" height=\"30\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\" fill=\"currentColor\"/>\n<path d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n</svg>\n\n<span>#{title_subscribe}</span>\n</div>\n\n<div class=\"full-start__button selector button--options\">\n<svg width=\"38\" height=\"10\" viewBox=\"0 0 38 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"4.88968\" cy=\"4.98563\" r=\"4.75394\" fill=\"currentColor\"/>\n<circle cx=\"18.9746\" cy=\"4.98563\" r=\"4.75394\" fill=\"currentColor\"/>\n<circle cx=\"33.0596\" cy=\"4.98563\" r=\"4.75394\" fill=\"currentColor\"/>\n</svg>\n</div>\n\n</div>\n</div>\n</div>\n</div>");
        }
    }
    
    function translate_tv() {
        var tv_caption = Lampa.Lang.translate('maxsm_themes_tvcaption');
        var translate_tv = localStorage.getItem('maxsm_themes_translate_tv')  === 'true';
        var translate_tv_style;
        $('#maxsm_themes_translate_tv').remove(); 
        if (!translate_tv) {
            translate_tv_style = "\n<style id=\"maxsm_themes_translate_tv\">\n " +
                ".card__type  {\n  position: absolute;\n  bottom: auto; \n left: 0em; \nright: auto;\n  top: 0em;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-weight: 700;\n  padding: 0.4em 0.6em;\n  -webkit-border-radius: 0.4em 0 0.4em 0;\n     -moz-border-radius: 0.4em 0 0.4em 0;\n          border-radius: 0.4em 0 0.4em 0;\nline-height: 1.0;\nfont-size: 1.0em;\n}\n " +
                ".card--tv .card__type {\n  color: #fff;\n}\n" +
            "</style>\n";
            $('body').append(translate_tv_style);
        } else {
            translate_tv_style = "\n<style id=\"maxsm_themes_translate_tv\">\n " +
                ".card--tv .card__type,\n.card__type {\n  font-size: 1em;\n  background: transparent;\n color: transparent;\n left: 0;\n  top: 0;\n}\n" + 
                ".card__type::after {\n  content: '" + tv_caption + "';\n  color: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n padding: 0.4em 0.6em;\n  border-radius: 0.4em 0 0.4em 0;\n  font-weight: 700;\n}" +
            "</style>\n";
            $('body').append(translate_tv_style);
        }
    }
    
    function animations() {
        var animations = localStorage.getItem('maxsm_themes_animations') === 'true';
        $('#maxsm_themes_animations').remove();
        if (animations) {
            var animations_style = "\n<style id=\"maxsm_themes_animations\">\n " +
                // Пробуем немного анимацмм
                ".card\n{transform: scale(1);\ntransition: transform 0.3s ease;\n}\n" +
                ".card.focus\n{transform: scale(1.03);\n}\n" +
                ".torrent-item,\n.online-prestige\n{transform: scale(1);\ntransition: transform 0.3s ease;\n}\n" +
                ".torrent-item.focus,\n.online-prestige.focus\n{transform: scale(1.01);\n}\n" +
                ".extensions__item,\n.extensions__block-add,\n.full-review-add,\n.full-review,\n.tag-count,\n.full-person,\n.full-episode,\n.simple-button,\n.full-start__button,\n.items-cards .selector,\n.card-more,\n.explorer-card__head-img.selector,\n.card-episode\n{transform: scale(1);\ntransition: transform 0.3s ease;\n}\n" +
                ".extensions__item.focus,\n.extensions__block-add.focus,\n.full-review-add.focus,\n.full-review.focus,\n.tag-count.focus,\n.full-person.focus,\n.full-episode.focus,\n.simple-button.focus,\n.full-start__button.focus,\n.items-cards .selector.focus,\n.card-more.focus,\n.explorer-card__head-img.selector.focus,\n.card-episode.focus\n{transform: scale(1.03);\n}\n" +
                ".menu__item {\n  transition: transform 0.3s ease;\n}\n" +
                ".menu__item.focus {\n transform: translateX(-0.2em);\n}\n" +
                ".selectbox-item,\n.settings-folder,\n.settings-param {\n transition: transform 0.3s ease;\n}\n" +
                ".selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\n transform: translateX(0.2em);\n}\n" +
            "</style>\n";
            $('body').append(animations_style);
        }
    }
    
    function bigbuttons() {
        var bigbuttons = localStorage.getItem('maxsm_themes_bigbuttons')  === 'true';
        $('#maxsm_themes_bigbuttons').remove();
        if (bigbuttons) {
            var bigbuttons_style = "\n<style id=\"maxsm_themes_bigbuttons\">\n " +
                ".full-start-new__buttons .full-start__button:not(.focus) span {\ndisplay: inline ;\n}\n@media screen and (max-width: 580px) {\n.full-start-new__buttons {\noverflow: auto;\n}\n.full-start-new__buttons .full-start__button:not(.focus) span {\ndisplay: none;\n}\n}\n" +
            "</style>\n";
            $('body').append(bigbuttons_style);
        }
    }    

    // Функция инициализации плагина
    function startPlugin() {
        // Список доступных тем
        var availableThemes = ['mint_dark', 'deep_aurora', 'crystal_cyan', 'amber_noir', 'velvet_sakura', 'default'];
        
        // Значения по умолчанию
        if (!localStorage.getItem('maxsm_themes_animations')) {
            localStorage.setItem('maxsm_themes_animations', 'true');
        }
        if (!localStorage.getItem('maxsm_themes_translate_tv')) {
            localStorage.setItem('maxsm_themes_translate_tv', 'true');
        }
        if (!localStorage.getItem('maxsm_themes_incardtemplate')) {
            localStorage.setItem('maxsm_themes_incardtemplate', 'true');
        }   
        if (!localStorage.getItem('maxsm_themes_bigbuttons')) {
            localStorage.setItem('maxsm_themes_bigbuttons', 'false');
        }
        // Меню        
        Lampa.SettingsApi.addComponent({
            component: "maxsm_themes",
            name: Lampa.Lang.translate('maxsm_themes'),
            icon: themes_svg
        });
        
        Lampa.SettingsApi.addParam({
            component: 'maxsm_themes',
            param: {
                name: 'maxsm_themes_selected',
                type: 'select',
                values: {
                    mint_dark: 'Mint Dark',
                    deep_aurora: 'Deep Aurora',
                    crystal_cyan: 'Crystal Cyan',
                    amber_noir: 'Amber Noir',
                    velvet_sakura: 'Velvet Sakura',
                    default: 'LAMPA'
                },
                "default": 'Mint Dark'
            },
            field: {
                name: Lampa.Lang.translate('maxsm_themes_theme'),
                description: ''
            },
            onChange: function onChange(value) {
                maxsm_themes.settings.theme = value;
                Lampa.Settings.update();
                applyTheme(value);
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: 'maxsm_themes',
            param: {
                name: 'maxsm_themes_animations',
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate('maxsm_themes_animations'),
                description: ''
            },
            onChange: function(value) {
                animations();
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: 'maxsm_themes',
            param: {
                name: 'maxsm_themes_translate_tv',
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate('maxsm_themes_translate_tv'),
                description: ''
            },
            onChange: function(value) {
                translate_tv();
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: 'maxsm_themes',
            param: {
                name: 'maxsm_themes_incardtemplate',
                type: "trigger",
                default: true
            },
(function() {
    'use strict';

    if (window.SursSelect && window.SursSelect.__initialized) return;

    window.SursSelect = window.SursSelect || {};
    window.SursSelect.__initialized = true;

    // Локализация
    Lampa.Lang.add({
        sursSelect_vote_count_desc: { ru: "Много голосов", en: "Most Votes", uk: "Багато голосів" },
        sursSelect_vote_average_desc: { ru: "Высокий рейтинг", en: "High Rating", uk: "Високий рейтинг" },
        sursSelect_first_air_date_desc: { ru: "Новинки", en: "New Releases", uk: "Новинки" },
        sursSelect_popularity_desc: { ru: "Популярные", en: "Popular", uk: "Популярні" },
        sursSelect_revenue_desc: { ru: "Кассовые сборы", en: "Box Office", uk: "Касові збори" },
        sursSelect_menu_title: { ru: "Разделы", en: "Sections", uk: "Розділи" },
        sursSelect_movies: { ru: "Фильмы", en: "Movies", uk: "Фільми" },
        sursSelect_tvshows: { ru: "Сериалы", en: "TV Shows", uk: "Серіали" },
        sursSelect_dorama_tvshows: { ru: "Корейские дорамы", en: "Korean dramas", uk: "Корейські драми" },  
        sursSelect_turkish_tvshows: { ru: "Турецкие сериалы", en: "Turkish series", uk: "Турецькі серіали" },
        sursSelect_streaming: { ru: "Стриминги", en: "Streaming", uk: "Стрімінг" },
        sursSelect_kids: { ru: "Для детей", en: "For Kids", uk: "Для дітей" },
        sursSelect_all_movies: { ru: "Все фильмы", en: "All Movies", uk: "Усі фільми" },
        sursSelect_russian_movies: { ru: "Российские фильмы", en: "Russian Movies", uk: "Російські фільми" },
        sursSelect_animated_movies: { ru: "Мультфильмы", en: "Animated Movies", uk: "Мультфільми" },
        sursSelect_all_tvshows: { ru: "Все сериалы", en: "All TV Shows", uk: "Усі серіали" },
        sursSelect_russian_tvshows: { ru: "Российские сериалы", en: "Russian TV Shows", uk: "Російські серіали" },
        sursSelect_animated_tvshows: { ru: "Мультсериалы", en: "Animated TV Shows", uk: "Мультсеріали" },
        sursSelect_kids_movies: { ru: "Мультфильмы", en: "Cartoons", uk: "Мультфільми" },
        sursSelect_kids_tvshows: { ru: "Мультсериалы", en: "Cartoon Series", uk: "Мультсеріали" },
        sursSelect_kids_family: { ru: "Семейные", en: "Family", uk: "Сімейні" },
        sursSelect_global_streaming: { ru: "Глобальные стриминги", en: "Global Streaming", uk: "Глобальний стрімінг" },
        sursSelect_russian_streaming: { ru: "Российские стриминги", en: "Russian Streaming", uk: "Російський стрімінг" },
        sursSelect_service_selection: { ru: "Выбор сервиса", en: "Service Selection", uk: "Вибір сервісу" },
        sursSelect_sorting: { ru: "Сортировка", en: "Sorting", uk: "Сортування" },
        sursSelect_menu_item: { ru: "Подборки", en: "Collections", uk: "Колекції" },
        sursSelect_lnum_collections: { en: 'LNUM - Collections', ru: 'LNUM - Коллекции', uk: 'LNUM - Колекції' },
        surs_select_plugins_section_title: { en: 'Third-party plugins', ru: 'Сторонние плагины', uk: 'Сторонні плагіни' }
    });

    // Сервисы стриминга
    var allStreamingServices = [
        { id: 2552, title: 'Apple TV+' }, { id: 1024, title: 'Amazon Prime' }, { id: 49, title: 'HBO' },
        { id: 77, title: 'SyFy' }, { id: 453, title: 'Hulu' }, { id: 213, title: 'Netflix' },
        { id: 3186, title: 'HBO Max' }, { id: 2076, title: 'Paramount network' }, { id: 4330, title: 'Paramount+' },
        { id: 3353, title: 'Peacock' }, { id: 2739, title: 'Disney+' }, { id: 2, title: 'ABC' },
        { id: 6, title: 'NBC' }, { id: 16, title: 'CBS' }, { id: 318, title: 'Starz' },
        { id: 174, title: 'AMC' }, { id: 19, title: 'FOX' }, { id: 64, title: 'Discovery' },
        { id: 493, title: 'BBC America' }, { id: 88, title: 'FX' }, { id: 67, title: 'Showtime' }
    ];

    var allStreamingServicesRUS = [
        { id: 2493, title: 'Start' }, { id: 2859, title: 'Premier' }, { id: 4085, title: 'KION' },
        { id: 3871, title: 'Okko' }, { id: 3827, title: 'Кинопоиск' }, { id: 5806, title: 'Wink' },
        { id: 3923, title: 'ИВИ' }, { id: 806, title: 'СТС' }, { id: 1191, title: 'ТНТ' },
        { id: 3031, title: 'Пятница' }, { id: 3882, title: 'More.TV' }, { id: 412, title: 'Россия 1' },
        { id: 558, title: 'Первый канал' }
    ];

    // Варианты сортировки
    var sortOptionsTV = [
        { id: 'first_air_date.desc', title: 'sursSelect_first_air_date_desc', extraParams: '' },
        { id: 'vote_average.desc', title: 'sursSelect_vote_average_desc', extraParams: '' },
        { id: 'popularity.desc', title: 'sursSelect_popularity_desc', extraParams: '' },
        { id: 'vote_count.desc', title: 'sursSelect_vote_count_desc', extraParams: '' }
    ];

    var sortOptionsMovie = [
        { id: 'release_date.desc', title: 'sursSelect_first_air_date_desc', extraParams: '' },
        { id: 'vote_average.desc', title: 'sursSelect_vote_average_desc', extraParams: '' },
        { id: 'popularity.desc', title: 'sursSelect_popularity_desc', extraParams: '' },
        { id: 'revenue.desc', title: 'sursSelect_revenue_desc', extraParams: '' }
    ];

    var baseExcludedKeywords = ['346488', '158718', '41278', '196034', '272265', '13141', '345822', '315535', '290667', '323477', '290609'];

    // Применение параметров сортировки с индивидуальными настройками
    function applySortParams(sort, options) {
        var params = '';
        var now = new Date();
        var isNewRelease = sort.id === 'first_air_date.desc' || sort.id === 'release_date.desc';
        var isHighRating = sort.id === 'vote_average.desc';
        var isVoteCount = sort.id === 'vote_count.desc';

        // Базовые параметры для дат выпуска
        if (sort.id === 'first_air_date.desc') {
            var end = new Date(now);
            end.setDate(now.getDate() - 10);
            var start = new Date(now);
            start.setFullYear(start.getFullYear() - 3);
            params += '&first_air_date.gte=' + start.toISOString().split('T')[0];
            params += '&first_air_date.lte=' + end.toISOString().split('T')[0];
        }

        if (sort.id === 'release_date.desc') {
            var end = new Date(now);
            end.setDate(now.getDate() - 40);
            var start = new Date(now);
            start.setFullYear(start.getFullYear() - 3);
            params += '&release_date.gte=' + start.toISOString().split('T')[0];
            params += '&release_date.lte=' + end.toISOString().split('T')[0];
        }

        // Индивидуальные настройки для каждого типа контента
        if (options.isKids) {
            // Детский контент
            if (options.isMovie) {
                // Детские фильмы (мультфильмы)
                if (isHighRating) params += '&vote_count.gte=40';
                else if (isNewRelease) params += '&vote_count.gte=2';
                else params += '&vote_count.gte=2';
            } else {
                // Детские сериалы (мультсериалы)
                if (isHighRating) params += '&vote_count.gte=40';
                else if (isNewRelease) params += '&vote_count.gte=2';
                else params += '&vote_count.gte=2';
            }
        } 
        else if (options.isRussian) {
            // Российский контент
            if (options.isMovie) {
                // Российские фильмы
                if (isHighRating) params += '&vote_count.gte=40';
                else if (isNewRelease) params += '&vote_count.gte=5';
                else params += '&vote_count.gte=10';
            } else {
                // Российские сериалы
                if (isHighRating) params += '&vote_count.gte=10';
                else if (isNewRelease) params += '&vote_count.gte=';
                else params += '&vote_count.gte=10';
            }
        }
        else if (options.isStreaming) {
            // Стриминговые сервисы
            if (options.isGlobalStreaming) {
                // Глобальные стриминги (Netflix, HBO и т.д.)
                if (isHighRating) params += '&vote_count.gte=100';
                else if (isNewRelease) params += '&vote_count.gte=20';
                else params += '&vote_count.gte=10';
            } else {
                // Российские стриминги
                if (isHighRating) params += '&vote_count.gte=10';
                else if (isNewRelease) params += '&vote_count.gte=';
                else params += '&vote_count.gte=5';
            }
        } 
        else if (options.isDorama) {
            // Корейские дорамы
            if (isHighRating) params += '&vote_count.gte=100';
            else if (isNewRelease) params += '&vote_count.gte=15';
            else params += '&vote_count.gte=10';
        } 
        else if (options.isTurkish) {
            // Турецкие сериалы
            if (isHighRating) params += '&vote_count.gte=60';
            else if (isNewRelease) params += '&vote_count.gte=10';
            else params += '&vote_count.gte=10';
        } 
        else {
            // Общие категории
            if (options.isMovie) {
                // Все фильмы
                if (isHighRating) params += '&vote_count.gte=700';
                else if (isNewRelease) params += '&vote_count.gte=20';
                else params += '&vote_count.gte=20';
            } else {
                // Все сериалы
                if (isHighRating) params += '&vote_count.gte=150';
                else if (isNewRelease) params += '&vote_count.gte=25';
                else params += '&vote_count.gte=25';
            }
        }

        // Дополнительные параметры для сортировки по количеству голосов
        if (isVoteCount) {
            params += '&vote_average.gte=5';
        }

        // Исключение нежелательного контента
        params += '&without_keywords=' + encodeURIComponent(baseExcludedKeywords.join(','));

        sort.extraParams = params;
        return sort;
    }

    // Работа с логотипами
    function getLogoUrl(networkId, name, callback) {
        var apiUrl = Lampa.TMDB.api('network/' + networkId + '?api_key=' + Lampa.TMDB.key());
        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function (data) {
                var imgUrl = data && data.logo_path 
                    ? Lampa.TMDB.image('t/p/w154' + data.logo_path) 
                    : '';
                callback(imgUrl);
            },
            error: function () {
                callback('');
            }
        });
    }

    function createLogoHtml(networkId, name) {
        return '<div style="display: flex; align-items: center; padding: 0.5em 0">' +
            '<div style="width: 2.75em; height: 1em; margin-right: 1em;">' +
            (networkId ? '<img src="" style="width: 100%; height: 100%; object-fit: contain; filter: grayscale(100%);" class="logo-' + networkId + '">' : '') +
            '</div>' +
            '<div style="font-size: 1.3em; display: flex; align-items: center;">' + name + '</div>' +
            '</div>';
    }

    function updateLogo(networkId, name) {
        if (networkId) {
            getLogoUrl(networkId, name, function (url) {
                if (url) {
                    $('.logo-' + networkId).attr('src', url);
                }
            });
        }
    }

    // Основное меню
    function showSursSelectMenu() {
        var items = [
            { title: Lampa.Lang.translate('sursSelect_movies'), action: 'movies' },
            { title: Lampa.Lang.translate('sursSelect_tvshows'), action: 'tvshows' },
            { title: Lampa.Lang.translate('sursSelect_streaming'), action: 'streaming' },
            { title: Lampa.Lang.translate('sursSelect_kids'), action: 'kids' }
        ];

        if (window.lnum_plugin === true) {
            items.push({ title: Lampa.Lang.translate('surs_select_plugins_section_title'), separator: true });
            items.push({ title: Lampa.Lang.translate('sursSelect_lnum_collections'), action: 'lnum_collections' });
        }

        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_menu_title'),
            items: items,
            onSelect: function (item) {
                if (item.action === 'movies') showMovieMenu();
                else if (item.action === 'tvshows') showTVMenu();
                else if (item.action === 'streaming') showStreamingTypeMenu();
                else if (item.action === 'kids') showKidsMenu();
                else if (item.action === 'lnum_collections') {
                    Lampa.Activity.push({
                        url: '',
                        title: Lampa.Lang.translate('sursSelect_lnum_collections'),
                        component: 'category',
                        source: 'LNUM'
                    });
                }
            },
            onBack: function () {
                Lampa.Controller.toggle('content');
            }
        });
    }

    // Меню фильмов
    function showMovieMenu() {
        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_movies'),
            items: [
                { 
                    title: Lampa.Lang.translate('sursSelect_all_movies'), 
                    url: 'discover/movie?',
                    isMovie: true 
                },
                { 
                    title: Lampa.Lang.translate('sursSelect_russian_movies'), 
                    url: 'discover/movie?&with_origin_country=RU',
                    isRussian: true,
                    isMovie: true 
                }
            ],
            onSelect: showSortList,
            onBack: showSursSelectMenu
        });
    }

    // Меню сериалов
    function showTVMenu() {
        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_tvshows'),
            items: [
                { 
                    title: Lampa.Lang.translate('sursSelect_all_tvshows'), 
                    url: 'discover/tv?&without_genres=16',
                    isMovie: false 
                },
                { 
                    title: Lampa.Lang.translate('sursSelect_russian_tvshows'), 
                    url: 'discover/tv?&with_origin_country=RU',
                    isRussian: true,
                    isMovie: false 
                },
                // Для дорам
                { 
                    title: Lampa.Lang.translate('sursSelect_dorama_tvshows'), 
                    url: 'discover/tv?&without_genres=16&with_origin_country=KR',
                    isDorama: true,
                    isMovie: false 
                },
                // Для турецких сериалов
                { 
                    title: Lampa.Lang.translate('sursSelect_turkish_tvshows'), 
                    url: 'discover/tv?&without_genres=16&with_origin_country=TR',
                    isTurkish: true,
                    isMovie: false 
                }
            ],
            onSelect: showSortList,
            onBack: showSursSelectMenu
        });
    }

    // Меню для детей
    function showKidsMenu() {
        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_kids'),
            items: [
                { 
                    title: Lampa.Lang.translate('sursSelect_kids_movies'), 
                    url: 'discover/movie?&with_genres=16&certification_country=RU&certification=6%2B',
                    isKids: true,
                    isMovie: true 
                },
                { 
                    title: Lampa.Lang.translate('sursSelect_kids_tvshows'), 
                    url: 'discover/tv?&with_genres=16&certification_country=RU&certification=6%2B',
                    isKids: true,
                    isMovie: false 
                },
                { 
                    title: Lampa.Lang.translate('sursSelect_kids_family'), 
                    url: 'discover/movie?&certification_country=RU&certification=6%2B',
                    isKids: true,
                    isMovie: true 
                }
            ],
            onSelect: function(item) {
                showSortList({
                    url: item.url,
                    title: item.title,
                    isKids: item.isKids,
                    isMovie: item.isMovie
                });
            },
            onBack: showSursSelectMenu
        });
    }

    // Меню стримингов
    function showStreamingTypeMenu() {
        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_streaming'),
            items: [
                { 
                    title: Lampa.Lang.translate('sursSelect_global_streaming'), 
                    list: allStreamingServices,
                    isGlobalStreaming: true 
                },
                { 
                    title: Lampa.Lang.translate('sursSelect_russian_streaming'), 
                    list: allStreamingServicesRUS,
                    isGlobalStreaming: false 
                }
            ],
            onSelect: function (item) {
                showServiceList(item.list, item.isGlobalStreaming);
            },
            onBack: showSursSelectMenu
        });
    }

    // Выбор сервиса
    function showServiceList(serviceList, isGlobalStreaming) {
        var items = [];
        for (var i = 0; i < serviceList.length; i++) {
            items.push({
                title: '<div class="settings-folder" style="padding:0!important">' + createLogoHtml(serviceList[i].id, serviceList[i].title) + '</div>',
                service: serviceList[i],
                isGlobalStreaming: isGlobalStreaming
            });
            updateLogo(serviceList[i].id, serviceList[i].title);
        }

        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_service_selection'),
            items: items,
            onSelect: function (item) {
                showSortList({ 
                    url: 'discover/tv?with_networks=' + item.service.id, 
                    title: item.service.title,
                    isStreaming: true,
                    isGlobalStreaming: item.isGlobalStreaming,
                    isMovie: false
                });
            },
            onBack: showStreamingTypeMenu
        });
    }

    // Выбор сортировки
    function showSortList(service) {
        var isMovie = service.isMovie !== undefined ? service.isMovie : service.url.startsWith('discover/movie');
        var currentSortOptions = isMovie ? sortOptionsMovie : sortOptionsTV;
        var sortItems = [];

        for (var i = 0; i < currentSortOptions.length; i++) {
            sortItems.push({
                title: Lampa.Lang.translate(currentSortOptions[i].title),
                sort: applySortParams(currentSortOptions[i], {
                    isRussian: service.isRussian || service.url.includes('with_original_language=ru'),
                    isStreaming: service.isStreaming || service.url.includes('with_networks='),
                    isGlobalStreaming: service.isGlobalStreaming,
                    isKids: service.isKids || false,
                    isDorama: service.isDorama || false,
                    isTurkish: service.isTurkish || false,
                    isMovie: isMovie
                })
            });
        }

        Lampa.Select.show({
            title: Lampa.Lang.translate('sursSelect_sorting'),
            items: sortItems,
            onSelect: function (sortItem) {
                var sort = sortItem.sort;
                Lampa.Activity.push({
                    url: service.url + sort.extraParams,
                    title: service.title + ' - ' + Lampa.Lang.translate(sortItem.title),
                    component: 'category_full',
                    card_type: 'true',
                    sort_by: sort.id,
                    page: 1,
                });
            },
            onBack: function () {
                if (service.isStreaming) {
                    showStreamingTypeMenu();
                } else if (service.isKids) {
                    showKidsMenu();
                } else {
                    isMovie ? showMovieMenu() : showTVMenu();
                }
            }
        });
    }

    // Инициализация плагина
    function initPlugin() {
        // Иконка для основного меню
        var collectionsIcon = '<svg fill="currentColor" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
            '<path d="M26,16H6c-1.7,0-3-1.3-3-3s1.3-3,3-3h20c1.7,0,3,1.3,3,3S27.7,16,26,16z"/>' +
            '<path d="M26.7,14.3C26.6,14.1,26.3,14,26,14H6c-0.3,0-0.6,0.1-0.7,0.3C5.1,14.6,5,14.8,5,15.1l2,16C7.1,31.6,7.5,32,8,32h5c-0.5,0-1-0.4-1-0.9l-1-14c0-0.6,0.4-1,0.9-1.1c0.6,0,1,0.4,1.1,0.9l1,14c0,0.6-0.4,1-0.9,1.1c0,0,0,0-0.1,0h6c0,0,0,0-0.1,0c-0.6,0-1-0.5-0.9-1.1l1-14c0-0.6,0.5-1,1.1-0.9c0.6,0,1,0.5,0.9,1.1l-1,14c0,0.5-0.5,0.9-1,0.9h5c0.5,0,0.9-0.4,1-0.9l2-16C27,14.8,26.9,14.6,26.7,14.3z"/>' +
            '<path d="M25.8,12L6.2,12c-0.4,0-0.8-0.3-0.9-0.7C5.1,10.9,5,10.5,5,10c0-1.5,0.8-2.8,2-3.5C7,6.4,7,6.2,7,6c0-2.2,1.8-4,4-4c0.5,0,1,0.1,1.4,0.3C13.1,0.9,14.4,0,16,0s2.9,0.9,3.6,2.3C20,2.1,20.5,2,21,2c2.2,0,4,1.8,4,4c0,0.2,0,0.4,0,0.5c1.2,0.7,2,2,2,3.5c0,0.5-0.1,0.9-0.2,1.3C26.6,11.7,26.3,12,25.8,12z M7,10l18,0c0,0,0,0,0,0c0-0.9-0.6-1.7-1.5-1.9C23.2,8,23,7.8,22.9,7.6c-0.1-0.3-0.1-0.6,0-0.8C23,6.5,23,6.2,23,6c0-1.1-0.9-2-2-2c-0.5,0-1,0.2-1.3,0.5c-0.3,0.3-0.7,0.3-1,0.2C18.3,4.6,18,4.2,18,3.9C17.9,2.8,17,2,16,2s-1.9,0.8-2,1.9c0,0.4-0.3,0.7-0.6,0.9c-0.4,0.1-0.8,0.1-1-0.2C12,4.2,11.5,4,11,4C9.9,4,9,4.9,9,6c0,0.2,0,0.5,0.1,0.7c0.1,0.3,0.1,0.6,0,0.8C9,7.8,8.8,8,8.5,8.1C7.6,8.3,7,9.1,7,10L7,10z"/>' +
            '</svg>';

        // Иконка для детского раздела
        var kidsIcon = '<svg viewBox="0 0 514 514" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="m400 2c-79 6-142 75-142 156v14h-99l-98 1-5 2c-38 17-23 63 21 65h15l-3 6c-10 20-10 24-11 76v45l-5-8c-7-12-13-26-18-39-5-15-6-17-11-21-13-12-35-7-41 10-6 16 17 70 46 105 116 145 347 127 439-34 31-54 31-87-1-87-15 0-21 5-28 27-6 18-28 58-31 58-1 0-1-22-1-49v-50l-11-55c-12-60-12-58-6-63 8-7 15-3 24 11 14 24 29 30 47 21 20-9 21-17 10-71-10-52-10-53 2-53s21-14 20-28c-1-6-2-7-10-13-30-20-65-29-103-26m43 74c-10 3-14 17-6 25 13 13 32-4 23-19-3-5-11-8-17-6m-289 114v27l1 26 2 3 3 3h46 46l3-3 2-3v-27-27h-51c-36 0-51 0-52 1m78 116c-54 9-96 54-102 109l-1 6 10 6c70 45 158 47 230 4 9-5 8-4 7-15-7-71-73-122-144-110" fill="currentColor" fill-rule="evenodd"/>' +
            '</svg>';

        // Кнопка "Подборки" в меню
        var menuItem = $('<li class="menu__item selector" data-action="streaming">' +
            '<div class="menu__ico">' + collectionsIcon + '</div>' +
            '<div class="menu__text">' + Lampa.Lang.translate('sursSelect_menu_item') + '</div>' +
            '</li>');

        menuItem.on('hover:enter', showSursSelectMenu);
        $('.menu .menu__list').eq(0).append(menuItem);

        // Кнопка "Для детей" в меню
        var kidsMenuItem = $('<li class="menu__item selector" data-action="kids">' +
            '<div class="menu__ico">' + kidsIcon + '</div>' +
            '<div class="menu__text">' + Lampa.Lang.translate('sursSelect_kids') + '</div>' +
            '</li>');

        kidsMenuItem.on('hover:enter', showKidsMenu);
        $('.menu .menu__list').eq(0).append(kidsMenuItem);
    }

    // Запуск плагина
    if (window.appready) {
        initPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') initPlugin();
        });
    }

    window.SursSelect.showSursSelectMenu = showSursSelectMenu;
})();
    // Экспортируем объект плагина для внешнего доступа
    window.maxsm_themes = maxsm_themes;
})();
