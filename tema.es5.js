(function () {
    var customCardPlugin = {
        init: function () {
            this.applyCustomStyles();
            this.applyQualityColors();
            this.observeDynamicContent();

            if (window.Lampa && Lampa.Listener) {
                Lampa.Listener.follow('app', function (e) {
                    if (e.type === 'ready') {
                        customCardPlugin.applyQualityColors();
                    }
                });
            }
        },

        applyCustomStyles: function () {
            var styleId = 'custom-card-plugin-styles';
            if (!document.getElementById(styleId)) {
                var style = document.createElement('style');
                style.id = styleId;
                style.textContent = `
                   /* =========== КАРТОЧКИ КОНТЕНТА =========== */
.card__quality {
    /* Метка качества (HD, 4K и т.д.) */
    position: absolute !important;
    left: -0.8em !important;
    bottom: 3em !important;
    padding: 0.4em 0.6em !important;
    font-size: 0.8em !important;
    font-weight: bold !important;
    border-radius: 0.3em !important;
    text-transform: uppercase !important;
    z-index: 3 !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
    color: white !important;
}

.card.focus, .card.hover {
    /* Анимация увеличения при фокусе */
    z-index: 2;
    transform: scale(1.1);
    outline: none;
}

.card--tv .card__type {
    /* Бейдж типа контента (ТВ) */
    position: absolute;
    background: linear-gradient(90deg, #ee7700, #006666);
    color: #fff;
    z-index: 4;
}

/* =========== ЭФФЕКТЫ ВЫДЕЛЕНИЯ =========== */
.card.focus .card__view::before,
.card.hover .card__view::before {
    /* Элемент свечения */
    content: "";
    position: absolute;
    top: -0.5em;
    left: -0.5em;
    right: -0.5em;
    bottom: -0.5em;
    border-radius: 1.4em;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    box-shadow: 0 0 0 #009999;
    animation: glow-pulse 1s 0.4s infinite ease-in-out;
}
.full-episode.focus::after,
.extensions__item.focus::after,
.explorer-card__head-img.focus::after,
.torrent-item.focus::after {
    /* Общий стиль рамки выделения */
    content: "";
    position: absolute;
    top: -0.5em;
    left: -0.5em;
    right: -0.5em;
    bottom: -0.5em;
    border: 0.3em solid #006666;
    border-radius: 1.4em;
    z-index: -1;
    pointer-events: none;
}

.card.focus .card__view::after, 
.card.hover .card__view::after {
    /* Элемент рамки */
    content: "";
    position: absolute;
    top: -0.5em;
    left: -0.5em;
    right: -0.5em;
    bottom: -0.5em;
    border: 0.3em solid transparent;
    border-radius: 1.4em;
    z-index: -1;
    pointer-events: none;
    clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
    animation: 
        border-draw 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards,
        border-glow 0.5s 0.5s ease-out forwards;
}

@keyframes border-draw {
    0% {
        border-color: transparent;
        clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
    }
    25% {
        border-top-color: #006666;
        clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0);
    }
    50% {
        border-right-color: #006666;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%);
    }
    75% {
        border-bottom-color: #006666;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    100% {
        border-color: #006666;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
}

@keyframes border-glow {
    0% {
        border-color: #009999;
    }
    100% {
        border-color: #009999;
    }
}

@keyframes glow-pulse {
    0%, 100% {
        opacity: 0.8;
        box-shadow: 0 0 16px #009999;
    }
    50% {
        opacity: 1;
        box-shadow: 0 0 16px #00ffff;
    }
}

/* Микрофон и клавиатура */
.search-source.active {
  opacity: 1;
  background-color: #ec750f;
  color: #000;
}

.simple-keyboard .hg-button[data-skbtn="{MIC}"] {
  color: #f35b06;
}

/* =========== РЕЙТИНГИ И ГОЛОСОВАНИЕ =========== */
.card__vote {
    /* Контейнер рейтинга */
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 3px 3px;
    margin: 2px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    color: #fff;
    align-items: center;
}

.card__vote::before {
    /* Иконка звезды */
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath fill='%23006666' d='M349.923-241.308 480-320.077l131.077 79.769-34.615-148.307 115.384-99.924L540.077-502 480-642.308 420.923-503l-151.769 13.461 115.384 99.693-34.615 148.538ZM283-150.076l52.615-223.539-173.923-150.847 229.231-18.846L480-754.693l90.077 211.385 228.231 18.846-173.923 150.847L677-150.076 480-268.923 283-150.076Zm197-281.616Z'/%3E%3C/svg%3E");
    width: 24px;
    height: 24px;
    margin-bottom: 1px;
    display: flex;
    justify-content: center;
}

.card__vote-count {
    /* Число рейтинга */
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
}

.explorer-card__head-rate {
    /* Рейтинг в карточке */
    color: #006666;
}

.explorer-card__head-rate > svg {
    /* Иконка звезды */
    width: 1.5em !important;
    height: 1.5em !important;
    margin-right: 0.5em;
}

.explorer-card__head-rate > span {
    /* Число рейтинга */
    font-size: 1.5em;
    font-weight: 600;
}

.full-start__rate {
    /* Облик рейтинга в описании карточки */
  background: rgb(78 185 180 / 3%);
  -webkit-border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  border-radius: 0.3em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.45em;
  margin-right: 1em;
}

/* Общие стили для всех иконок рейтингов */
.full-start__rate > div:last-child,
.full-start__rate .source--name {
  font-size: 0; /* Скрываем текст */
  color: transparent;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* TMDB из официального лого */
.rate--tmdb .source--name {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 185.04 133.4'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' y1='66.7' x2='185.04' y2='66.7' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2390cea1'/%3E%3Cstop offset='0.56' stop-color='%233cbec9'/%3E%3Cstop offset='1' stop-color='%2300b3e5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctitle%3EAsset 4%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M51.06,66.7h0A17.67,17.67,0,0,1,68.73,49h-.1A17.67,17.67,0,0,1,86.3,66.7h0A17.67,17.67,0,0,1,68.63,84.37h.1A17.67,17.67,0,0,1,51.06,66.7Zm82.67-31.33h32.9A17.67,17.67,0,0,0,184.3,17.7h0A17.67,17.67,0,0,0,166.63,0h-32.9A17.67,17.67,0,0,0,116.06,17.7h0A17.67,17.67,0,0,0,133.73,35.37Zm-113,98h63.9A17.67,17.67,0,0,0,102.3,115.7h0A17.67,17.67,0,0,0,84.63,98H20.73A17.67,17.67,0,0,0,3.06,115.7h0A17.67,17.67,0,0,0,20.73,133.37Zm83.92-49h6.25L125.5,49h-8.35l-8.9,23.2h-.1L99.4,49H90.5Zm32.45,0h7.8V49h-7.8Zm22.2,0h24.95V77.2H167.1V70h15.35V62.8H167.1V56.2h16.25V49h-24ZM10.1,35.4h7.8V6.9H28V0H0V6.9H10.1ZM39,35.4h7.8V20.1H61.9V35.4h7.8V0H61.9V13.2H46.75V0H39Zm41.25,0h25V28.2H88V21h15.35V13.8H88V7.2h16.25V0h-24Zm-79,49H9V57.25h.1l9,27.15H24l9.3-27.15h.1V84.4h7.8V49H29.45l-8.2,23.1h-.1L13,49H1.2Zm112.09,49H126a24.59,24.59,0,0,0,7.56-1.15,19.52,19.52,0,0,0,6.35-3.37,16.37,16.37,0,0,0,4.37-5.5A16.91,16.91,0,0,0,146,115.8a18.5,18.5,0,0,0-1.68-8.25,15.1,15.1,0,0,0-4.52-5.53A18.55,18.55,0,0,0,133.07,99,33.54,33.54,0,0,0,125,98H113.29Zm7.81-28.2h4.6a17.43,17.43,0,0,1,4.67.62,11.68,11.68,0,0,1,3.88,1.88,9,9,0,0,1,2.62,3.18,9.87,9.87,0,0,1,1,4.52,11.92,11.92,0,0,1-1,5.08,8.69,8.69,0,0,1-2.67,3.34,10.87,10.87,0,0,1-4,1.83,21.57,21.57,0,0,1-5,.55H121.1Zm36.14,28.2h14.5a23.11,23.11,0,0,0,4.73-.5,13.38,13.38,0,0,0,4.27-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68,9.16,9.16,0,0,0-.55-3.2,7.79,7.79,0,0,0-1.57-2.62,8.38,8.38,0,0,0-2.45-1.85,10,10,0,0,0-3.18-1v-.1a9.28,9.28,0,0,0,4.43-2.82,7.42,7.42,0,0,0,1.67-5,8.34,8.34,0,0,0-1.15-4.65,7.88,7.88,0,0,0-3-2.73,12.9,12.9,0,0,0-4.17-1.3,34.42,34.42,0,0,0-4.63-.32h-13.2Zm7.8-28.8h5.3a10.79,10.79,0,0,1,1.85.17,5.77,5.77,0,0,1,1.7.58,3.33,3.33,0,0,1,1.23,1.13,3.22,3.22,0,0,1,.47,1.82,3.63,3.63,0,0,1-.42,1.8,3.34,3.34,0,0,1-1.13,1.2,4.78,4.78,0,0,1-1.57.65,8.16,8.16,0,0,1-1.78.2H165Zm0,14.15h5.9a15.12,15.12,0,0,1,2.05.15,7.83,7.83,0,0,1,2,.55,4,4,0,0,1,1.58,1.17,3.13,3.13,0,0,1,.62,2,3.71,3.71,0,0,1-.47,1.95,4,4,0,0,1-1.23,1.3,4.78,4.78,0,0,1-1.67.7,8.91,8.91,0,0,1-1.83.2h-7Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* IMDb из официального лого */
.rate--imdb > div:last-child {
  background-image: url("data:image/svg+xml,%3Csvg fill='%23ffcc00' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M 0 7 L 0 25 L 32 25 L 32 7 Z M 2 9 L 30 9 L 30 23 L 2 23 Z M 5 11.6875 L 5 20.3125 L 7 20.3125 L 7 11.6875 Z M 8.09375 11.6875 L 8.09375 20.3125 L 10 20.3125 L 10 15.5 L 10.90625 20.3125 L 12.1875 20.3125 L 13 15.5 L 13 20.3125 L 14.8125 20.3125 L 14.8125 11.6875 L 12 11.6875 L 11.5 15.8125 L 10.8125 11.6875 Z M 15.90625 11.6875 L 15.90625 20.1875 L 18.3125 20.1875 C 19.613281 20.1875 20.101563 19.988281 20.5 19.6875 C 20.898438 19.488281 21.09375 19 21.09375 18.5 L 21.09375 13.3125 C 21.09375 12.710938 20.898438 12.199219 20.5 12 C 20 11.800781 19.8125 11.6875 18.3125 11.6875 Z M 22.09375 11.8125 L 22.09375 20.3125 L 23.90625 20.3125 C 23.90625 20.3125 23.992188 19.710938 24.09375 19.8125 C 24.292969 19.8125 25.101563 20.1875 25.5 20.1875 C 26 20.1875 26.199219 20.195313 26.5 20.09375 C 26.898438 19.894531 27 19.613281 27 19.3125 L 27 14.3125 C 27 13.613281 26.289063 13.09375 25.6875 13.09375 C 25.085938 13.09375 24.511719 13.488281 24.3125 13.6875 L 24.3125 11.8125 Z M 18 13 C 18.398438 13 18.8125 13.007813 18.8125 13.40625 L 18.8125 18.40625 C 18.8125 18.804688 18.300781 18.8125 18 18.8125 Z M 24.59375 14 C 24.695313 14 24.8125 14.105469 24.8125 14.40625 L 24.8125 18.6875 C 24.8125 18.886719 24.792969 19.09375 24.59375 19.09375 C 24.492188 19.09375 24.40625 18.988281 24.40625 18.6875 L 24.40625 14.40625 C 24.40625 14.207031 24.394531 14 24.59375 14 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}

/* Кинопоиск из официального лого */
.rate--kp > div:last-child {
  background-image: url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_1_69' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='300' height='300'%3E%3Ccircle cx='150' cy='150' r='150' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1_69)'%3E%3Ccircle cx='150' cy='150' r='150' fill='black'/%3E%3Cpath d='M300 45L145.26 127.827L225.9 45H181.2L126.3 121.203V45H89.9999V255H126.3V178.92L181.2 255H225.9L147.354 174.777L300 255V216L160.776 160.146L300 169.5V130.5L161.658 139.494L300 84V45Z' fill='url(%23paint0_radial_1_69)'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_1_69' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(89.9999 45) rotate(45) scale(296.985)'%3E%3Cstop offset='0.5' stop-color='%23FF5500'/%3E%3Cstop offset='1' stop-color='%23BBFF00'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E");
}

/* =========== КНОПКИ И ФОКУС =========== */
.full-start__button {
  margin-right: 0.75em;
  font-size: 1.3em;
  background-color: rgb(78 185 180 / 24%);
  padding: 0.3em 1em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  border-radius: 1em;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 2.8em;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

/* Стиль для состояния кнопок при наведении focus */
.full-start__button.focus {
  background: linear-gradient(90deg, #ee7700, #006666);
  color: #fff;
}

/* =========== НАВИГАЦИЯ И МЕНЮ =========== */
.menu__item.focus, 
.menu__item.traverse, 
.menu__item.hover,
.menuitem.focus.red,
.menuitem.traverse.red,
.menu__item.hover.red,
.broadcast__scan > div,
.broadcast__device.focus,
.head__action.focus, 
.head__action.hover,
.settings-param.focus,
.simple-button.focus,
.selectbox-item.focus,
.full-person.focus {
    /* Общие стили для активных элементов */
    background: linear-gradient(90deg, #ee7700, #006666);
    color: #fff;
    border-radius: 1em;
}

.tag-count.focus {
    /* Особый стиль для тегов */
    background: linear-gradient(90deg, #ee7700, #006666);
    color: #000;
}

.settings-folder.focus {
    /* Папка в настройках */
    background: linear-gradient(90deg, #ee7700, #006666);
    border-radius: 1em;
}

.head__action {
    /* Радиус фокуса */
    border-radius: 20%;
}

/* =========== ИНДИКАТОРЫ И БЕЙДЖИ =========== */
.extensions__cub {
    /* Бейдж расширений */
    position: absolute;
    top: 1em;
    right: 1em;
    background-color: rgba(34, 229, 10, 0.32);
    border-radius: 0.3em;
    padding: 0.3em 0.4em;
    font-size: 0.78em;
}

.head__action.active::after {
    /* Индикатор активности */
    content: "";
    display: block;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, #ee7700, #006666);
    border: 0.1em solid #fff;
    border-radius: 100%;
}

.explorer-card__head-age {
    /* Бейдж возраста */
    border: 1px solid #ffff77;
    border-radius: 0.2em;
    padding: 0.2em 0.3em;
    margin-top: 1.4em;
    font-size: 0.9em;
}

/* =========== ЛОАДЕРЫ =========== */
.activity__loader {
    /* Полноэкранный лоадер */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' style='display: block; margin: auto;'%3E%3Cpath fill='%23006666' d='M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/path%3E%3C/svg%3E") no-repeat 50% 50%;
}

.modal-loading {
    /* Лоадер в модальном окне */
    height: 6em;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' style='display: block; margin: auto;'%3E%3Cpath fill='%23006666' d='M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z'%3E%3CanimateTransform attributeName='transform' dur='1s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/path%3E%3C/svg%3E") no-repeat 50% 50%;
    background-size: contain;
}

/* =========== ПАНЕЛЬ НАСТРОЕК =========== */
.settings__content {
  position: fixed;
  top: 35;
  left: 100%;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  -o-transition: -o-transform 0.2s;
  -moz-transition: transform 0.2s, -moz-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s, -moz-transform 0.2s, -o-transform 0.2s;
  background: #262829;
  width: 35%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-border-top-left-radius: 2em;
  -webkit-border-top-right-radius: 2em;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  will-change: transform;
  /* Единственное добавление */
  max-height: 95vh;
  overflow-y: auto;
}

@media screen and (max-width: 767px) {
  .settings__content {
    width: 50%;
  }
}
@media screen and (max-width: 580px) {
  .settings__content {
    width: 70%;
  }
}
@media screen and (max-width: 480px) {
  .settings__content {
    width: 100%;
    left: 0;
    top: unset;
    bottom: 0;
    height: auto !important;
    -webkit-transition: none;
    -o-transition: none;
    -moz-transition: none;
    transition: none;
    -webkit-transform: translate3d(0, 100%, 0);
       -moz-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
    -webkit-border-top-left-radius: 2em;
       -moz-border-radius-topleft: 2em;
            border-top-left-radius: 2em;
    -webkit-border-top-right-radius: 2em;
       -moz-border-radius-topright: 2em;
            border-top-right-radius: 2em;
    /* Единственное добавление для мобилок */
    max-height: 85vh;
  }
}

.head__action.open-settings {
  position: relative;
  display: inline-block;
}

.head__action.open-settings::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 40%, white 50%, transparent 60%);
  background-size: 400% 400%;
  animation: blink-effect 1s ease;
  pointer-events: none;
}

/* =========== ТОП-5 КАРТОЧКИ =========== */
.items-line--type-top .items-cards .card:nth-child(1)::before {
    /* Стиль для 1-го места */
    content: "1";
    position: absolute;
    top: 0.1em;
    right: 88%;
    font-size: 18em;
    color: #000000;
    font-weight: 900;
    -webkit-text-stroke: 0.01em #006666;
    font-family: "Comic Sans MS", "Luckiest Guy", cursive;
    transform: rotate(-15deg);
    z-index: -1;
}

.items-line--type-top .items-cards .card:nth-child(2)::before {
    /* Стиль для 2-го места */
    position: absolute;
    top: 0.1em;
    right: 88%;
    font-size: 18em;
    color: #000000;
    font-weight: 900;
    -webkit-text-stroke: 0.01em #006666;
    font-family: "Comic Sans MS", "Luckiest Guy", cursive;
    transform: rotate(-15deg);
    z-index: -1;
}

.items-line--type-top .items-cards .card:nth-child(3)::before {
    /* Стиль для 3-го места */
    content: "3";
    position: absolute;
    top: 0.1em;
    right: 88%;
    font-size: 18em;
    color: #000000;
    font-weight: 900;
    -webkit-text-stroke: 0.01em #006666;
    font-family: "Comic Sans MS", "Luckiest Guy", cursive;
    transform: rotate(-15deg);
    z-index: -1;
}

.items-line--type-top .items-cards .card:nth-child(4)::before {
    /* Стиль для 4-го места */
    content: "4";
    position: absolute;
    top: 0.1em;
    right: 88%;
    font-size: 18em;
    color: #000000;
    font-weight: 900;
    -webkit-text-stroke: 0.01em #006666;
    font-family: "Comic Sans MS", "Luckiest Guy", cursive;
    transform: rotate(-15deg);
    z-index: -1;
}

.items-line--type-top .items-cards .card:nth-child(5)::before {
    /* Стиль для 5-го места */
    content: "5";
    position: absolute;
    top: 0.1em;
    right: 88%;
    font-size: 18em;
    color: #000000;
    font-weight: 900;
    -webkit-text-stroke: 0.01em #006666;
    font-family: "Comic Sans MS", "Luckiest Guy", cursive;
    transform: rotate(-15deg);
    z-index: -1;
}
    /*Изменение расстояния 4 и 5 карточки */
.items-line--type-top .items-cards .card:nth-child(5) {
  margin-left: 3.7em;
}
.items-line--type-top .items-cards .card:nth-child(4) {
  margin-left: 3.7em;
}

.items-line__more.focus {
  background-color: #006666;
  color: #000;
}

/* =========== ПЕРСОНЫ =========== */
.full-person__photo {
    /* Аватар персоны */
    width: 7em;
    height: 7em;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 1em;
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    align-items: center;
}

.full-start__pg, .full-start__status {
    /* Статус просмотра */
    font-size: 1.2em;
    border: 1px solid #ffeb3b;
    border-radius: 0.2em;
    padding: 0.3em;
}

/* =========== ВЫБОР ЭЛЕМЕНТОВ =========== */
.selectbox-item.selected:not(.nomark)::after, 
.selectbox-item.picked::after {
    /* Индикатор выбора */
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    border: 0.15em solid #ccc;
    border-radius: 50%;
    position: absolute;
    top: 70%;
    right: 2.0em;
    transform: translateY(-50%);
}

.selectbox-item.selected:not(.nomark)::after, 
.selectbox-item.picked::after {
    /* Анимация заполнения круга */
    border-color: #fff;
    border-top-color: transparent; /* Начинаем с прозрачной верхней границы */
    animation: circle-fill 3s ease-in-out forwards; /* Плавная анимация с фиксацией конечного состояния */
}

@keyframes circle-fill {
    /* 
     * Анимация имитирует "заполнение" круга по часовой стрелке 
     * с одновременным изменением цвета границ
     */
    0% {
        transform: translateY(-50%) rotate(0deg);
        border-color: #ccc; /* Начальный цвет - серый */
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    25% {
        border-right-color: #fff; /* Появление правой границы */
    }
    50% {
        border-bottom-color: #fff; /* Появление нижней границы */
    }
    75% {
        border-left-color: #fff; /* Появление левой границы */
    }
    100% {
        transform: translateY(-50%) rotate(360deg); /* Полный оборот */
        border-color: #fff; /* Все границы белые */
        border-top-color: #fff; /* Верхняя граница становится видимой в конце */
        box-shadow: 0 0 0 3px rgba(78, 185, 180, 0.3); /* Дополнительный эффект свечения */
    }
}

/* Дополнительные состояния для лучшей визуализации */
.selectbox-item {
    position: relative;
    transition: all 0.3s ease;
}

.selectbox-item:hover {
    background-color: rgba(78, 185, 180, 0.1); /* Подсветка при наведении */
}
                `;
                document.head.appendChild(style);
            }
        },

        applyQualityColors: function () {
            var elements = document.querySelectorAll('.card__quality, .card-v2 .card__quality');
            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                var quality = el.textContent.trim().toUpperCase();
                var bgColor, textColor = 'white';
                
                switch(quality) {
                    case '4K':
                        bgColor = 'linear-gradient(135deg, #8a2be2, #6a5acd)';
                        break;
                    case 'WEB-DL':
                        bgColor = 'linear-gradient(135deg, #1e90ff, #4169e1)';
                        break;
                    case 'BD':
                    case 'BDRIP':
                        bgColor = 'linear-gradient(135deg, #ffd700, #daa520)';
                        textColor = 'black';
                        break;
                    case 'HDTV':
                        bgColor = 'linear-gradient(135deg, #2ecc71, #27ae60)';
                        break;
                    case 'TC':
                    case 'TS':
                    case 'TELECINE':
                        bgColor = 'linear-gradient(135deg, #ff6b6b, #e74c3c)';
                        break;
                    default:
                        bgColor = '#fff816';
                        textColor = 'black';
                        break;
                    case 'VHS':
                        bgColor = 'linear-gradient(135deg, #00cccc, #009999)';
                        break;
                    case 'DVDRIP':
                        bgColor = 'linear-gradient(135deg, #88ff88, #aaffaa)';
                        textColor = 'black';
                        break;
                    case 'DVB':
                        bgColor = 'linear-gradient(135deg, #ffddbb, #ff99cc)';
                        textColor = 'black';
                }
                
                el.style.setProperty('background', bgColor, 'important');
                el.style.setProperty('color', textColor, 'important');
            }
        },

        observeDynamicContent: function() {
            var self = this;
            new MutationObserver(function() {
                self.applyQualityColors();
            }).observe(document.body, {childList: true, subtree: true});
        }
    };

    // Запуск с проверкой
    if (document.readyState === 'complete') {
        setTimeout(function() {
            customCardPlugin.init();
        }, 500);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                customCardPlugin.init();
            }, 500);
        });
    }
})();