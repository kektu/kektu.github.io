(function() {

'use strict';

Lampa.Lang.add({
  drxaos_themes: { ru: 'DRXAOS Темы', en: 'DRXAOS Themes', uk: 'DRXAOS Теми' },
  drxaos_theme: { ru: 'Цветовая схема', en: 'Color Scheme', uk: 'Кольорова схема' },
  drxaos_animations: { ru: 'Анимации', en: 'Animations', uk: 'Анімації' },
  drxaos_glow: { ru: 'Свечение', en: 'Glow', uk: 'Світіння' },
  drxaos_fullbuttons: { ru: 'Полные названия кнопок', en: 'Full Button Labels', uk: 'Повні назви кнопок' },
  drxaos_transparency: { ru: 'Прозрачность', en: 'Transparency', uk: 'Прозорість' },
  drxaos_theme_desc: { ru: 'Выберите цветовую схему интерфейса', en: 'Choose interface color scheme', uk: 'Виберіть кольорову схему інтерфейсу' },
  drxaos_glow_desc: { ru: 'Интенсивность свечения карточек и кнопок при наведении', en: 'Intensity of cards and buttons glow on hover', uk: 'Інтенсивність світіння карток і кнопок при наведенні' },
  drxaos_transparency_desc: { ru: 'Уровень прозрачности панелей навигации и настроек', en: 'Transparency level of navigation and settings panels', uk: 'Рівень прозорості панелей навігації та налаштувань' },
  drxaos_fullbuttons_desc: { ru: 'Показывать текст кнопок в карточках фильмов (Онлайн/Торренты/Избранное)', en: 'Show button text in movie cards', uk: 'Показувати текст кнопок в картках фільмів' },
  drxaos_animations_desc: { ru: 'Плавные анимации при наведении (отключите на слабых устройствах)', en: 'Smooth animations on hover (disable on weak devices)', uk: 'Плавні анімації при наведенні (вимкніть на слабких пристроях)' }
});

var prevtheme = '';

function applyTheme(theme) {
  $('#drxaos_theme_style').remove();

  if (prevtheme !== '' && ((prevtheme === 'default' && theme !== 'default') || 
     (prevtheme !== 'default' && theme === 'default'))) {
    window.location.reload();
  }

  prevtheme = theme;
  if (theme === 'default') return;

  var glow = Lampa.Storage.get('drxaos_glow', 'medium');
  var transparency = Lampa.Storage.get('drxaos_transparency', 85);
  var glowValues = { 'off': '0', 'low': '0.15em', 'medium': '0.3em', 'high': '0.5em' };
  var glowSize = glowValues[glow] || '0.3em';
  var alpha = transparency / 100;

  var commonStyles = `
    /* ============================================ */
    /* GPU ACCELERATION ДЛЯ ANDROID TV */
    /* ============================================ */
    .card, .menu__item, .button, .settings-param, .files__item, .torrent-item, 
    .filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line, 
    .online-prestige__item, .online-prestige__line, .online__tabs-item,
    .full-start__button, .head__action, .bottom-bar__item, .bottom-bar__btn {
      will-change: transform, opacity;
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    }

    /* ============================================ */
    /* НИЖНЯЯ НАВИГАЦИЯ (МОБИЛЬНЫЕ/IOS/ANDROID) */
    /* ============================================ */
    body .bottom-bar, .bottom-bar,
    body .bottom-bar__body, .bottom-bar__body {
      background: rgba(var(--bg-rgb), ${alpha}) !important;
      backdrop-filter: blur(30px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
      border-top: 2px solid var(--theme-accent) !important;
      box-shadow: 0 -4px 20px rgba(var(--primary-rgb), 0.2) !important;
    }

    body .bottom-bar__item, .bottom-bar__item,
    body .bottom-bar__btn, .bottom-bar__btn {
      background: transparent !important;
      border: none !important;
      color: var(--text-main) !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
    }

    body .bottom-bar__item svg, .bottom-bar__item svg,
    body .bottom-bar__btn svg, .bottom-bar__btn svg {
      fill: var(--text-main) !important;
      color: var(--text-main) !important;
      filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));
    }

    body .bottom-bar__item.active, body .bottom-bar__item:hover, body .bottom-bar__item.focus,
    body .bottom-bar__btn.active, body .bottom-bar__btn:hover, body .bottom-bar__btn.focus {
      background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;
      border-radius: 1em !important;
      transform: scale(1.1) translateZ(0) !important;
      box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.6) !important;
    }

    body .bottom-bar__item.active svg, body .bottom-bar__item:hover svg, body .bottom-bar__item.focus svg,
    body .bottom-bar__btn.active svg, body .bottom-bar__btn:hover svg, body .bottom-bar__btn.focus svg {
      fill: var(--text-contrast) !important;
      color: var(--text-contrast) !important;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
    }

    body .bottom-bar__item-text, .bottom-bar__item-text,
    body .bottom-bar__btn-text, .bottom-bar__btn-text {
      color: var(--text-main) !important;
      text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
    }

    body .bottom-bar__item.active .bottom-bar__item-text, 
    body .bottom-bar__item:hover .bottom-bar__item-text,
    body .bottom-bar__btn.active .bottom-bar__btn-text,
    body .bottom-bar__btn:hover .bottom-bar__btn-text {
      color: var(--text-contrast) !important;
      text-shadow: 0 1px 3px rgba(0,0,0,0.6) !important;
      font-weight: 600 !important;
    }

    /* КОНТЕЙНЕРЫ ПРОЗРАЧНЫЕ */
    body .card, .card, body .rows, .rows, body .line, .line {
      border: none !important;
      box-shadow: none !important;
      outline: none !important;
      background: transparent !important;
    }

    /* ВСТРОЕННАЯ ОБВОДКА КАРТОЧЕК */
    .card.focus .card__view::after,
    .card:hover .card__view::after {
      border-color: var(--theme-accent) !important;
      box-shadow: 0 0 ${glowSize} var(--theme-accent) !important;
    }

    /* КАПСУЛЬНЫЕ КНОПКИ МЕНЮ */
    body .menu__item, .menu__item {
      border-radius: 2em !important;
      overflow: visible !important;
    }

    /* ============================================ */
    /* ПЛЕЕР - ПОЛНАЯ СТИЛИЗАЦИЯ */
    /* ============================================ */
    body .player, .player,
    body .player__panel, .player__panel,
    body .player-panel, .player-panel,
    body .player-info, .player-info,
    body .player-controls, .player-controls,
    body .player-time, .player-time,
    body .player-timeline, .player-timeline {
      background: rgba(var(--bg-rgb), ${alpha}) !important;
      backdrop-filter: blur(30px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
      border-top: 2px solid var(--theme-accent) !important;
      color: var(--text-main) !important;
    }

    body .player__play, .player__play,
    body .player-button, .player-button {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 50% !important;
      transition: all 0.2s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    }

    body .player__play.focus, body .player__play:hover,
    body .player-button.focus, body .player-button:hover {
      background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.6) !important;
      transform: scale(1.1) translateZ(0) !important;
    }

    body .player-timeline__bar, .player-timeline__bar {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.6) !important;
    }

    body .player__info, .player__info,
    body .player-title, .player-title {
      color: var(--theme-accent) !important;
      text-shadow: 0 0 10px var(--theme-accent), 0 1px 3px rgba(0,0,0,0.5) !important;
      font-weight: 600 !important;
    }

    /* ============================================ */
    /* ОНЛАЙН ПРОСМОТР */
    /* ============================================ */
    body .online, .online,
    body .online__body, .online__body,
    body .online-view, .online-view {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 1em !important;
      backdrop-filter: blur(30px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
    }

    body .online__item, .online__item,
    body .online__item-line, .online__item-line,
    body .online-prestige__item, .online-prestige__item,
    body .online-prestige__line, .online-prestige__line {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 0.8em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
      color: var(--text-main) !important;
      margin-bottom: 0.3em !important;
    }

    body .online__item *, .online__item,
    body .online__item-line *, .online__item-line,
    body .online-prestige__item *, .online-prestige__item,
    body .online-prestige__line *, .online-prestige__line {
      color: var(--text-main) !important;
      text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
    }

    body .online__item.focus, body .online__item:hover, body .online__item.active,
    body .online__item-line.focus, body .online__item-line:hover, body .online__item-line.active,
    body .online-prestige__item.focus, body .online-prestige__item:hover, body .online-prestige__item.active,
    body .online-prestige__line.focus, body .online-prestige__line:hover, body .online-prestige__line.active {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.6) !important;
      transform: translateX(5px) scale(1.02) translateZ(0) !important;
      color: var(--text-contrast) !important;
      backdrop-filter: blur(30px) saturate(200%) !important;
      -webkit-backdrop-filter: blur(30px) saturate(200%) !important;
    }

    body .online__item.focus *, body .online__item:hover *, body .online__item.active *,
    body .online__item-line.focus *, body .online__item-line:hover *, body .online__item-line.active *,
    body .online-prestige__item.focus *, body .online-prestige__item:hover *, body .online-prestige__item.active *,
    body .online-prestige__line.focus *, body .online-prestige__line:hover *, body .online-prestige__line.active * {
      color: var(--text-contrast) !important;
      text-shadow: 0 1px 3px rgba(0,0,0,0.6) !important;
    }

    body .online__quality, .online__quality,
    body .online__size, .online__size {
      background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;
      font-weight: 700 !important;
      color: var(--text-contrast) !important;
      padding: 0.2em 0.5em !important;
      border-radius: 0.3em !important;
      text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
    }

    body .online__title, .online__title,
    body .online__name, .online__name {
      color: var(--theme-accent) !important;
      text-shadow: 0 0 10px var(--theme-accent), 0 1px 3px rgba(0,0,0,0.5) !important;
      font-weight: 600 !important;
    }

    body .online__tabs, .online__tabs,
    body .online__tabs-item, .online__tabs-item {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 1.5em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
      color: var(--text-main) !important;
    }

    body .online__tabs-item.focus, body .online__tabs-item:hover, body .online__tabs-item.active {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.5) !important;
      color: var(--text-contrast) !important;
    }

    /* ФАЙЛЫ И ТОРРЕНТЫ */
    body .files, .files,
    body .files__item, .files__item,
    body .torrent-item, .torrent-item {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 0.5em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
      color: var(--text-main) !important;
    }

    body .files__item.focus, body .files__item:hover,
    body .torrent-item.focus, body .torrent-item:hover {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.6) !important;
      transform: translateX(5px) translateZ(0) !important;
      color: var(--text-contrast) !important;
      backdrop-filter: blur(30px) saturate(200%) !important;
      -webkit-backdrop-filter: blur(30px) saturate(200%) !important;
    }

    body .files__item *, .files__item,
    body .torrent-item *, .torrent-item {
      color: var(--text-main) !important;
      text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
    }

    body .files__item.focus *, body .files__item.focus,
    body .files__item:hover *, body .files__item:hover,
    body .torrent-item.focus *, body .torrent-item.focus,
    body .torrent-item:hover *, body .torrent-item:hover {
      color: var(--text-contrast) !important;
      text-shadow: 0 1px 3px rgba(0,0,0,0.6) !important;
    }

    body .files__item-quality, .files__item-quality,
    body .files__item-size, .files__item-size {
      background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;
      font-weight: 700;
      color: var(--text-contrast) !important;
      padding: 0.2em 0.5em;
      border-radius: 0.3em;
      text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
    }

    /* ФИЛЬТРЫ, СОРТИРОВКА */
    body .filter, .filter,
    body .filter__item, .filter__item,
    body .sort, .sort,
    body .sort__item, .sort__item,
    body .search, .search,
    body .search__item, .search__item {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 1.5em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
      color: var(--text-main) !important;
    }

    body .filter__item.focus, body .filter__item:hover, body .filter__item.active,
    body .sort__item.focus, body .sort__item:hover, body .sort__item.active,
    body .search__item.focus, body .search__item:hover, body .search__item.active {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.5) !important;
      color: var(--text-contrast) !important;
    }

    body .filter__title, .filter__title,
    body .sort__title, .sort__title {
      color: var(--theme-accent) !important;
      text-shadow: 0 0 10px var(--theme-accent), 0 1px 3px rgba(0,0,0,0.5) !important;
      font-weight: 600 !important;
    }

    /* НАСТРОЙКИ */
    body .settings-param__name, .settings-param__name,
    body .settings-param__descr, .settings-param__descr,
    body .settings-param__value, .settings-param__value {
      background: transparent !important;
      border: none !important;
      color: var(--text-main) !important;
    }

    body .settings-param, .settings-param,
    body .settings-folder, .settings-folder {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 2em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
      color: var(--text-main) !important;
    }

    body .settings-param.focus, body .settings-param:hover,
    body .settings-folder.focus, body .settings-folder:hover {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.5) !important;
      transform: translateX(5px) translateZ(0) !important;
      color: var(--text-contrast) !important;
    }

    body .settings-param.focus *, body .settings-param:hover *,
    body .settings-folder.focus *, body .settings-folder:hover * {
      color: var(--text-contrast) !important;
    }

    /* КНОПКИ В КАРТОЧКЕ ФИЛЬМА */
    body .full-start__button, .full-start__button {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      color: var(--text-contrast) !important;
      border-radius: 2em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    }

    body .full-start__button.focus, body .full-start__button:hover {
      background: linear-gradient(90deg, var(--theme-secondary), var(--theme-primary)) !important;
      box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.7) !important;
      transform: scale(1.05) translateZ(0) !important;
    }

    body .full-start__button svg,
    .full-start__button svg {
      fill: var(--text-contrast) !important;
      color: var(--text-contrast) !important;
    }

    /* СЕЛЕКТБОКС */
    body .selectbox-item, .selectbox-item {
      background: rgba(var(--glass-bg), 0.45) !important;
      border: 1.5px solid rgba(var(--glass-border), 0.4) !important;
      border-radius: 1.5em !important;
      transition: transform 0.15s ease, opacity 0.15s ease !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
      color: var(--text-main) !important;
    }

    body .selectbox-item.focus, body .selectbox-item:hover, body .selectbox-item.active {
      background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;
      border: 2px solid var(--theme-accent) !important;
      box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.5) !important;
      color: var(--text-contrast) !important;
    }
  `;

  var style = $('<style id="drxaos_theme_style"></style>');

  var themes = {
    cyberpunk: `
      @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #8a2be2;
        --theme-secondary: #00bfff;
        --theme-accent: #00e5ff;
        --text-contrast: #ffffff;
        --text-main: #e8f4f8;
        --primary-rgb: 0, 229, 255;
        --bg-rgb: 20, 15, 35;
        --glass-bg: 30, 25, 50;
        --glass-border: 138, 43, 226;
      }

      *, body { 
        font-family: 'Exo 2', sans-serif !important; 
        letter-spacing: 0.02em; 
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #00E5FF !important; text-shadow: 0 0 10px rgba(0,229,255,0.8), 0 1px 3px rgba(0,0,0,0.6) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #B3E5FC !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #E1F5FE !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }

      html, body, .extensions {
        background: linear-gradient(135deg, #0a0a1e 0%, #1a0a2e 25%, #2d0944 50%, #1a0a2e 75%, #0a0a1e 100%) !important;
        background-size: 400% 400% !important;
        animation: gradientShift 20s ease infinite !important;
      }

      @keyframes gradientShift { 
        0%, 100% { background-position: 0% 50%; } 
        50% { background-position: 100% 50%; } 
      }

      body .head__action, .head__action { 
        background: rgba(138,43,226,0.4) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(138,43,226,0.6) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #8a2be2, #00bfff) !important; 
        box-shadow: 0 0 15px rgba(0,191,255,0.7) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(20,15,35,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #00bfff !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(15,10,25,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid rgba(138,43,226,0.6) !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #8a2be2, #00bfff) !important;
        color: #FFFFFF !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(0,191,255,0.6) !important;
        border: 2px solid #00e5ff !important;
        transform: translateX(5px) translateZ(0) !important;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #8a2be2, #00bfff) !important; 
        font-weight: 700; 
        color: #FFFFFF !important; 
        text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
      }

      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: rgba(138,43,226,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #8a2be2, #00bfff) !important; border-radius: 4px; }

      ${commonStyles}
    `,

    matrix: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #00ff41;
        --theme-secondary: #00c832;
        --theme-accent: #39ff14;
        --text-contrast: #000000;
        --text-main: #00ff41;
        --primary-rgb: 0, 255, 65;
        --bg-rgb: 0, 20, 0;
        --glass-bg: 0, 30, 0;
        --glass-border: 0, 255, 65;
      }

      *, body { 
        font-family: 'Roboto Mono', monospace !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #00FF41 !important; text-shadow: 0 0 12px rgba(0,255,65,0.9), 0 1px 3px rgba(0,0,0,0.8) !important; font-weight: 700; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #00FF41 !important; text-shadow: 0 1px 2px rgba(0,0,0,0.7) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #CCFF90 !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #000 0%, #001a00 25%, #003300 50%, #001a00 75%, #000 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 15s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(0,255,65,0.25) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(0,255,65,0.5) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #00ff41, #39ff14) !important; 
        box-shadow: 0 0 15px rgba(0,255,65,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(0,20,0,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #00ff41 !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(0,10,0,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid #00ff41 !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #00ff41, #00c832) !important;
        color: #000 !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(0,255,65,0.7) !important;
        border: 2px solid #39ff14 !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 700;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #00ff41, #00c832) !important; 
        color: #000 !important; 
        font-weight: 700; 
      }

      ::-webkit-scrollbar-track { background: rgba(0,255,65,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00ff41, #00c832) !important; }

      ${commonStyles}
    `,

    retrowave: `
      @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&subset=latin,latin-ext&display=swap');
      :root {
        --theme-primary: #f72585;
        --theme-secondary: #b300ff;
        --theme-accent: #00ffff;
        --text-contrast: #ffffff;
        --text-main: #f0f0f0;
        --primary-rgb: 247, 37, 133;
        --bg-rgb: 34, 1, 53;
        --glass-bg: 45, 5, 70;
        --glass-border: 247, 37, 133;
      }

      *, body { 
        font-family: 'Rajdhani', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #00FFFF !important; text-shadow: 0 0 15px rgba(0,255,255,1), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 700; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #E0FFFF !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #F5E6FF !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #0d0221 0%, #220135 20%, #2d0944 40%, #4a0e4e 60%, #2d0944 80%, #0d0221 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 25s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(179,0,255,0.35) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(247,37,133,0.6) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #f72585, #b300ff, #00ffff) !important; 
        box-shadow: 0 0 15px rgba(247,37,133,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(34,1,53,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 3px solid transparent !important; 
        border-image: linear-gradient(90deg, #f72585, #b300ff, #00ffff) 1 !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(13,2,33,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 3px solid transparent !important; 
        border-image: linear-gradient(135deg, #f72585, #b300ff, #00ffff) 1 !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #f72585, #b300ff, #00ffff) !important;
        color: #FFF !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(247,37,133,0.7) !important;
        border: 2px solid #f72585 !important;
        transform: scale(1.04) translateZ(0) !important;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #f72585, #b300ff, #00ffff) !important; 
        font-weight: 800; 
        color: #FFF !important; 
        text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important;
      }

      ::-webkit-scrollbar-track { background: rgba(179,0,255,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #f72585, #b300ff, #00ffff) !important; }

      ${commonStyles}
    `,

    iceblue: `
      @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #00d4ff;
        --theme-secondary: #00ffff;
        --theme-accent: #4dd0e1;
        --text-contrast: #000000;
        --text-main: #00d4ff;
        --primary-rgb: 0, 212, 255;
        --bg-rgb: 0, 28, 40;
        --glass-bg: 0, 40, 55;
        --glass-border: 0, 212, 255;
      }

      *, body { 
        font-family: 'Exo 2', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #00FFFF !important; text-shadow: 0 0 12px rgba(0,255,255,0.9), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #00D4FF !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #B3E5FC !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #001220 0%, #002840 30%, #004060 50%, #002840 70%, #001220 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 18s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(0,212,255,0.35) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(0,212,255,0.6) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #00d4ff, #00ffff) !important; 
        box-shadow: 0 0 15px rgba(0,255,255,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(0,28,40,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #00d4ff !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(0,18,32,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid #00d4ff !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #00d4ff, #00ffff) !important;
        color: #000 !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(0,255,255,0.7) !important;
        border: 2px solid #4dd0e1 !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 600;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #00d4ff, #00ffff) !important; 
        font-weight: 700; 
        color: #000 !important; 
      }

      ::-webkit-scrollbar-track { background: rgba(0,212,255,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00d4ff, #00ffff) !important; }

      ${commonStyles}
    `,

    monochrome: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #ffffff;
        --theme-secondary: #e0e0e0;
        --theme-accent: #ffffff;
        --text-contrast: #000000;
        --text-main: #f5f5f5;
        --primary-rgb: 255, 255, 255;
        --bg-rgb: 10, 10, 10;
        --glass-bg: 30, 30, 30;
        --glass-border: 255, 255, 255;
      }

      *, body { 
        font-family: 'Roboto', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #FFFFFF !important; text-shadow: 0 0 10px rgba(255,255,255,0.7), 0 1px 3px rgba(0,0,0,0.8) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #F5F5F5 !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #E0E0E0 !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2a2a2a 50%, #1a1a1a 70%, #0a0a0a 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 20s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(255,255,255,0.2) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(255,255,255,0.4) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #fff, #e0e0e0) !important; 
        box-shadow: 0 0 15px rgba(255,255,255,0.7) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(10,10,10,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #fff !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(10,10,10,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid rgba(255,255,255,0.4) !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #fff, #e0e0e0) !important;
        color: #000 !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(255,255,255,0.6) !important;
        border: 2px solid #fff !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 600;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #fff, #e0e0e0) !important; 
        font-weight: 700; 
        color: #000 !important; 
      }

      ::-webkit-scrollbar-track { background: rgba(255,255,255,0.1) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #fff, #e0e0e0) !important; }

      ${commonStyles}
    `,

    yinyang: `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #000000;
        --theme-secondary: #ffffff;
        --theme-accent: #808080;
        --text-contrast: #ffffff;
        --text-main: #f0f0f0;
        --primary-rgb: 128, 128, 128;
        --bg-rgb: 15, 15, 15;
        --glass-bg: 35, 35, 35;
        --glass-border: 128, 128, 128;
      }

      *, body { 
        font-family: 'Noto Sans', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #FFFFFF !important; text-shadow: 0 2px 6px rgba(0,0,0,1) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #F0F0F0 !important; text-shadow: 0 1px 3px rgba(0,0,0,0.7) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #D0D0D0 !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }

      html, body, .extensions { 
        background: radial-gradient(circle at 30% 50%, #000 0%, #1a1a1a 30%, #fff 31%, #fff 32%, #1a1a1a 33%, #000 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 30s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(128,128,128,0.35) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(255,255,255,0.4) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #000, #fff, #000) !important; 
        box-shadow: 0 0 15px rgba(128,128,128,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(15,15,15,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #808080 !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(15,15,15,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid rgba(128,128,128,0.6) !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #000, #fff, #000) !important;
        color: #FFF !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(128,128,128,0.7) !important;
        border: 2px solid #808080 !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 600;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #000, #fff) !important; 
        font-weight: 700; 
        color: #000 !important; 
      }

      ::-webkit-scrollbar-track { background: rgba(128,128,128,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #000, #808080, #fff) !important; }

      ${commonStyles}
    `,

    sunset: `
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #ff6b35;
        --theme-secondary: #f7931e;
        --theme-accent: #fdc830;
        --text-contrast: #ffffff;
        --text-main: #ffe0b2;
        --primary-rgb: 255, 107, 53;
        --bg-rgb: 25, 10, 5;
        --glass-bg: 40, 20, 10;
        --glass-border: 255, 107, 53;
      }

      *, body { 
        font-family: 'Nunito', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #FFD700 !important; text-shadow: 0 0 12px rgba(255,215,0,0.9), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #FFEB3B !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #FFE0B2 !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #190a05 0%, #3d1a10 25%, #ff6b35 50%, #3d1a10 75%, #190a05 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 22s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(255,107,53,0.35) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(255,107,53,0.6) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #ff6b35, #f7931e) !important; 
        box-shadow: 0 0 15px rgba(255,107,53,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(25,10,5,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #ff6b35 !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(25,10,5,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid rgba(255,107,53,0.6) !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #ff6b35, #f7931e) !important;
        color: #FFF !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(255,107,53,0.7) !important;
        border: 2px solid #fdc830 !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 600;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #ff6b35, #f7931e) !important; 
        font-weight: 700; 
        color: #FFF !important; 
        text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
      }

      ::-webkit-scrollbar-track { background: rgba(255,107,53,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ff6b35, #f7931e, #fdc830) !important; }

      ${commonStyles}
    `,

    ocean: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #006994;
        --theme-secondary: #0891b2;
        --theme-accent: #22d3ee;
        --text-contrast: #ffffff;
        --text-main: #cffafe;
        --primary-rgb: 8, 145, 178;
        --bg-rgb: 5, 20, 30;
        --glass-bg: 10, 35, 50;
        --glass-border: 8, 145, 178;
      }

      *, body { 
        font-family: 'Roboto', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #67E8F9 !important; text-shadow: 0 0 12px rgba(103,232,249,0.8), 0 1px 3px rgba(0,0,0,0.6) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #A5F3FC !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #CFFAFE !important; text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #05141e 0%, #0a2e4a 25%, #006994 50%, #0a2e4a 75%, #05141e 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 20s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(8,145,178,0.35) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(8,145,178,0.6) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #006994, #0891b2) !important; 
        box-shadow: 0 0 15px rgba(8,145,178,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(5,20,30,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #0891b2 !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(5,20,30,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid rgba(8,145,178,0.6) !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #006994, #0891b2) !important;
        color: #FFF !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(8,145,178,0.7) !important;
        border: 2px solid #22d3ee !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 600;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #006994, #0891b2) !important; 
        font-weight: 700; 
        color: #FFF !important; 
        text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
      }

      ::-webkit-scrollbar-track { background: rgba(8,145,178,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #006994, #0891b2, #22d3ee) !important; }

      ${commonStyles}
    `,

    forest: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap');
      :root {
        --theme-primary: #2d5016;
        --theme-secondary: #4d7c0f;
        --theme-accent: #84cc16;
        --text-contrast: #ffffff;
        --text-main: #ecfccb;
        --primary-rgb: 77, 124, 15;
        --bg-rgb: 10, 20, 5;
        --glass-bg: 20, 35, 10;
        --glass-border: 77, 124, 15;
      }

      *, body { 
        font-family: 'Roboto', sans-serif !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .card__title, .card__title * { color: #BEF264 !important; text-shadow: 0 0 12px rgba(190,242,100,0.8), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 600; }
      .full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #D9F99D !important; text-shadow: 0 1px 2px rgba(0,0,0,0.6) !important; }
      .card__description, .card__description *, .info__line, .info__line * { color: #ECFCCB !important; text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important; }

      html, body, .extensions { 
        background: linear-gradient(135deg, #0a1405 0%, #1a2910 25%, #2d5016 50%, #1a2910 75%, #0a1405 100%) !important; 
        background-size: 400% 400% !important; 
        animation: gradientShift 25s ease infinite !important; 
      }

      body .head__action, .head__action { 
        background: rgba(77,124,15,0.35) !important; 
        backdrop-filter: blur(20px) saturate(180%) !important; 
        border: 1.5px solid rgba(77,124,15,0.6) !important; 
        border-radius: 2em !important; 
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }

      body .head__action.focus, body .head__action:hover { 
        background: linear-gradient(45deg, #2d5016, #4d7c0f) !important; 
        box-shadow: 0 0 15px rgba(77,124,15,0.8) !important; 
        transform: scale(1.08) translateZ(0) !important;
      }

      body .navigation-bar__body, .navigation-bar__body { 
        background: rgba(10,20,5,${alpha}) !important; 
        backdrop-filter: blur(30px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(30px) saturate(180%) !important; 
        border-bottom: 2px solid #4d7c0f !important; 
      }

      body .modal__content, .modal__content, body .settings__content, .settings__content { 
        background: rgba(10,20,5,${alpha}) !important; 
        backdrop-filter: blur(40px) saturate(180%) !important; 
        -webkit-backdrop-filter: blur(40px) saturate(180%) !important; 
        border: 2px solid rgba(77,124,15,0.6) !important; 
        border-radius: 1em !important; 
      }

      body .menu__item.focus, body .menu__item:hover, body .button.focus, body .button:hover {
        background: linear-gradient(90deg, #2d5016, #4d7c0f) !important;
        color: #FFF !important;
        border-radius: 2em !important;
        box-shadow: 0 4px 20px rgba(77,124,15,0.7) !important;
        border: 2px solid #84cc16 !important;
        transform: translateX(5px) translateZ(0) !important;
        font-weight: 600;
      }

      .card__quality, .card__type::after { 
        background: linear-gradient(135deg, #2d5016, #4d7c0f) !important; 
        font-weight: 700; 
        color: #FFF !important; 
        text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
      }

      ::-webkit-scrollbar-track { background: rgba(77,124,15,0.15) !important; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #2d5016, #4d7c0f, #84cc16) !important; }

      ${commonStyles}
    `
  };

  style.html(themes[theme] || '');
  $('head').append(style);
  applyAnimations();
  applyFullButtons();
}

function applyAnimations() {
  var animations = Lampa.Storage.get('drxaos_animations', true);
  $('#drxaos_animations_style').remove();
  if (animations) {
    $('head').append(`<style id="drxaos_animations_style">
      .card, .menu__item, .button, .settings-param, .files__item, .torrent-item, 
      .filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line, 
      .online-prestige__item, .online-prestige__line, .online__tabs-item {
        transition: transform 0.15s ease, opacity 0.15s ease !important;
      }
    </style>`);
  }
}

function applyFullButtons() {
  var fullbuttons = Lampa.Storage.get('drxaos_fullbuttons', false);
  $('#drxaos_fullbuttons_style').remove();
  if (fullbuttons) {
    $('head').append(`<style id="drxaos_fullbuttons_style">
      .full-start__button span { display: inline !important; }
    </style>`);
  } else {
    $('head').append(`<style id="drxaos_fullbuttons_style">
      .full-start__button span { display: none !important; }
    </style>`);
  }
}

function addSettings() {
  // ДОБАВЛЯЕМ КОМПОНЕНТ С ПРИОРИТЕТОМ (first position)
  Lampa.SettingsApi.addComponent({
    component: 'drxaos_themes',
    name: Lampa.Lang.translate('drxaos_themes'),
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a5 5 0 0110 0h-10z"/></svg>',
    order: 0
  });

  Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
      name: 'drxaos_theme',
      type: 'select',
      values: {
        'default': 'Стандартная',
        'cyberpunk': '🔮 Киберпанк',
        'matrix': '💚 Матрица',
        'retrowave': '🌈 Ретроволна',
        'iceblue': '❄️ Ледяная',
        'monochrome': '⚪ Монохром',
        'yinyang': '☯️ Инь-Янь',
        'sunset': '🌅 Закат',
        'ocean': '🌊 Океан',
        'forest': '🌲 Лес'
      },
      default: 'cyberpunk'
    },
    field: {
      name: Lampa.Lang.translate('drxaos_theme'),
      description: Lampa.Lang.translate('drxaos_theme_desc')
    },
    onChange: applyTheme
  });

  Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
      name: 'drxaos_glow',
      type: 'select',
      values: {
        'off': 'Выключено',
        'low': 'Слабое',
        'medium': 'Среднее',
        'high': 'Сильное'
      },
      default: 'medium'
    },
    field: {
      name: Lampa.Lang.translate('drxaos_glow'),
      description: Lampa.Lang.translate('drxaos_glow_desc')
    },
    onChange: function() {
      var theme = Lampa.Storage.get('drxaos_theme', 'cyberpunk');
      applyTheme(theme);
    }
  });

  Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
      name: 'drxaos_transparency',
      type: 'select',
      values: {
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%'
      },
      default: '85'
    },
    field: {
      name: Lampa.Lang.translate('drxaos_transparency'),
      description: Lampa.Lang.translate('drxaos_transparency_desc')
    },
    onChange: function() {
      var theme = Lampa.Storage.get('drxaos_theme', 'cyberpunk');
      applyTheme(theme);
    }
  });

  Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
      name: 'drxaos_fullbuttons',
      type: 'trigger',
      default: false
    },
    field: {
      name: Lampa.Lang.translate('drxaos_fullbuttons'),
      description: Lampa.Lang.translate('drxaos_fullbuttons_desc')
    },
    onChange: applyFullButtons
  });

  Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
      name: 'drxaos_animations',
      type: 'trigger',
      default: true
    },
    field: {
      name: Lampa.Lang.translate('drxaos_animations'),
      description: Lampa.Lang.translate('drxaos_animations_desc')
    },
    onChange: applyAnimations
  });
}

function reorderButtons() {
  var buttonInterval = setInterval(function() {
    var $buttonsContainer = $('.full-start__buttons');
    if ($buttonsContainer.length > 0) {
      var buttons = [];
      var $onlineBtn = null;
      var $torrentsBtn = null;
      var $watchBtn = null;
      var $favoriteBtn = null;

      $buttonsContainer.find('.full-start__button').each(function() {
        var $btn = $(this);
        var text = $btn.find('span').text().trim();
        if (text === 'Онлайн' || text === 'Online') {
          $onlineBtn = $btn.clone();
          $onlineBtn.find('svg').html('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>').attr('viewBox', '0 0 24 24');
        } else if (text === 'Торренты' || text === 'Torrents') {
          $torrentsBtn = $btn.clone();
          $torrentsBtn.find('svg').html('<text x="12" y="18" text-anchor="middle" font-size="18" font-weight="bold">μ</text>').attr('viewBox', '0 0 24 24');
        } else if (text === 'Смотреть' || text === 'Watch' || text === 'Дивитися') {
          $watchBtn = $btn.clone();
        } else if (text === 'Избранное' || text === 'Favorite' || text === 'Обране') {
          $favoriteBtn = $btn.clone();
        }
      });

      if ($onlineBtn && $torrentsBtn && $watchBtn) {
        $buttonsContainer.empty();
        $buttonsContainer.append($onlineBtn);
        $buttonsContainer.append($torrentsBtn);
        $buttonsContainer.append($watchBtn);
        if ($favoriteBtn) {
          $buttonsContainer.append($favoriteBtn);
        }
        clearInterval(buttonInterval);
      }
    }
  }, 100);
  setTimeout(function() {
    clearInterval(buttonInterval);
  }, 5000);
}

function startPlugin() {
  addSettings();
  var theme = Lampa.Storage.get('drxaos_theme', 'cyberpunk');
  applyTheme(theme);
  reorderButtons();
  Lampa.Listener.follow('full', function(e) {
    if (e.type === 'complite') {
      setTimeout(reorderButtons, 300);
    }
  });
}

if (window.appready) startPlugin();
else {
  Lampa.Listener.follow('app', function(e) {
    if (e.type == 'ready') startPlugin();
  });
}

})();
