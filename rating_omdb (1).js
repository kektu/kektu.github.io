(function() {
    'use strict';
    
    // Проверка окружения
    var isTVApp = typeof window.NVJS !== 'undefined' || /Android TV/.test(navigator.userAgent);

    // Увеличиваем таймауты для TV
    var REQUEST_TIMEOUT = isTVApp ? 10000 : 5000;
    
    Lampa.Lang.add({
        ratimg_omdb_avg: {
            ru: 'ИТОГ',
            en: 'TOTAL',
            uk: 'ПІДСУМОК',
            be: 'ВЫНІК',
            pt: 'TOTAL',
            zh: '总评',
            he: 'סה"כ',
            cs: 'VÝSLEDEK',
            bg: 'РЕЗУЛТАТ'
        }
    });
    
    // Добавляем переводы для анимации загрузки (если нужно)
    Lampa.Lang.add({
        loading_dots: {
            ru: 'Загрузка рейтингов',
            en: 'Loading ratings',
            uk: 'Завантаження рейтингів',
            be: 'Загрузка рэйтынгаў',
            pt: 'Carregando classificações',
            zh: '加载评分',
            he: 'טוען דירוגים',
            cs: 'Načítání hodnocení',
            bg: 'Зареждане на рейтинги'
        }
    });
    
    // Стили
    var style = "<style id=\"maxsm_omdb_rating\">" +
        ".full-start-new__rate-line {" +
        "visibility: hidden;" +
        "flex-wrap: wrap;" +
        " gap: 0.4em 0;" +
        "}" +
        ".full-start-new__rate-line > * {" +
        "    margin-left: 0 !important;" +
        "    margin-right: 0.6em !important;" +
        "}" +
        ".rate--avg.rating--green  { color: #4caf50; }" +
        ".rate--avg.rating--lime   { color: #cddc39; }" +
        ".rate--avg.rating--orange { color: #ff9800; }" +
        ".rate--avg.rating--red    { color: #f44336; }" +
        "</style>";
    
    Lampa.Template.add('card_css', style);
    $('body').append(Lampa.Template.get('card_css', {}, true));
    
    // Обновленные стили с гарантированной видимостью
    var loadingStyles = "<style id=\"maxsm_loading_animation\">" +
        ".loading-dots-container {" +
        "    position: absolute;" +
        "    top: 50%;" +
        "    left: 0;" +
        "    right: 0;" +
        "    text-align: left;" +
        "    transform: translateY(-50%);" +
        "    z-index: 10;" +
        "}" +
        ".full-start-new__rate-line {" +
        "    position: relative;" +
        "}" +
        ".loading-dots {" +
        "    display: inline-flex;" +
        "    align-items: center;" +
        "    gap: 0.4em;" +
        "    color: #ffffff;" +
        "    font-size: 1em;" +
        "    background: rgba(0, 0, 0, 0.3);" +
        "    padding: 0.6em 1em;" +
        "    border-radius: 0.5em;" +
        "}" +
        ".loading-dots__text {" +
        "    margin-right: 1em;" +
        "}" +
        ".loading-dots__dot {" +
        "    width: 0.5em;" +
        "    height: 0.5em;" +
        "    border-radius: 50%;" +
        "    background-color: currentColor;" +
        "    animation: loading-dots-bounce 1.4s infinite ease-in-out both;" +
        "}" +
        ".loading-dots__dot:nth-child(1) {" +
        "    animation-delay: -0.32s;" +
        "}" +
        ".loading-dots__dot:nth-child(2) {" +
        "    animation-delay: -0.16s;" +
        "}" +
        "@keyframes loading-dots-bounce {" +
        "    0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }" +
        "    40% { transform: translateY(-0.5em); opacity: 1; }" +
        "}" +
        "</style>";

    Lampa.Template.add('loading_animation_css', loadingStyles);
    $('body').append(Lampa.Template.get('loading_animation_css', {}, true));
    
    // Конфигурация
    var CACHE_TIME = 3 * 24 * 60 * 60 * 1000; // 3 дня
    var OMDB_CACHE = 'maxsm_rating_omdb';
    var KP_CACHE = 'maxsm_rating_kp';
    var ID_MAPPING_CACHE = 'maxsm_rating_id_mapping';
    var OMDB_API_KEY = '<ТУТ НУЖЕН ТОКЕН>';
    var KP_API_KEY = '2a4a0808-81a3-40ae-b0d3-e11335ede616';
    
    // Словарь возрастных рейтингов
    var AGE_RATINGS = {
        'G': '3+',
        'PG': '6+',
        'PG-13': '13+',
        'R': '17+',
        'NC-17': '18+',
        'TV-Y': '0+',
        'TV-Y7': '7+',
        'TV-G': '3+',
        'TV-PG': '6+',
        'TV-14': '14+',
        'TV-MA': '17+'
    };
    
    // Весовые коэффициенты
    var WEIGHTS = {
        imdb: 0.35,
        tmdb: 0.15,
        kp: 0.20,
        mc: 0.15,
        rt: 0.15
    };
    
    function addLoadingAnimation() {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;

        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length || $('.loading-dots-container', rateLine).length) return;

        // Добавляем контейнер для анимации
        rateLine.append(
            '<div class="loading-dots-container">' +
                '<div class="loading-dots">' +
                    '<span class="loading-dots__text">' + Lampa.Lang.translate("loading_dots") + '</span>' +
                    '<span class="loading-dots__dot"></span>' +
                    '<span class="loading-dots__dot"></span>' +
                    '<span class="loading-dots__dot"></span>' +
                '</div>' +
            '</div>'
        );

        // Гарантируем видимость
        $('.loading-dots-container', rateLine).css({
            'opacity': '1',
            'visibility': 'visible'
        });
    }

    function removeLoadingAnimation() {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;

        $('.loading-dots-container', render).remove();
    }
    
    
    // Вспомогательные функции
    function getCardImdbId(card) {
        return card.imdb_id || card.imdb || null;
    }
    
    function getCardType(card) {
        var type = card.media_type || card.type;
        if (type === 'movie' || type === 'tv') return type;
        return card.name || card.original_name ? 'tv' : 'movie';
    }
    
    function getCardTitle(card) {
        return card.title || card.name || '';
    }
    
    function getRatingClass(rating) {
        if (rating >= 8.5) return 'rating--green';
        if (rating >= 7.0) return 'rating--lime';
        if (rating >= 5.0) return 'rating--orange';
        return 'rating--red';
    }
    
    // Основная функция
    function fetchAdditionalRatings(card) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var normalizedCard = {
            id: card.id,
            imdb_id: getCardImdbId(card),
            type: getCardType(card),
            title: getCardTitle(card),
            original_title: card.original_title || card.original_name || '',
            release_date: card.release_date || card.first_air_date || '',
            kp_id: card.kp_id || null
        };
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (rateLine.length) {
            rateLine.css('visibility', 'hidden');
            addLoadingAnimation();
        }
        
        fetchKpImdbRatings(normalizedCard, function(kpImdbData) {
            var cacheKey = normalizedCard.type + '_' + (normalizedCard.imdb_id || normalizedCard.id);
            var cachedData = getOmdbCache(cacheKey);
            
            if (cachedData) {
                insertRatings(cachedData.rt, cachedData.mc);
                updateHiddenElements(cachedData);
                calculateAverageRating();
                return;
            }

            if (!normalizedCard.imdb_id) {
                getImdbIdFromTmdb(normalizedCard.id, normalizedCard.type, function(newImdbId) {
                    if (newImdbId) {
                        normalizedCard.imdb_id = newImdbId;
                        fetchOmdbRatings(normalizedCard, cacheKey);
                    } else {
                        calculateAverageRating();
                    }
                });
                return;
            }

            fetchOmdbRatings(normalizedCard, cacheKey);
        });
    }
    
    // Функции работы с кешем
    function getOmdbCache(key) {
        var cache = Lampa.Storage.get(OMDB_CACHE) || {};
        var item = cache[key];
        return item && (Date.now() - item.timestamp < CACHE_TIME) ? item : null;
    }

    function saveOmdbCache(key, data) {
        if (!data.rt && !data.mc && !data.imdb) return;
        var cache = Lampa.Storage.get(OMDB_CACHE) || {};
        cache[key] = { 
            rt: data.rt,
            mc: data.mc,
            imdb: data.imdb,
            ageRating: data.ageRating,
            timestamp: Date.now() 
        };
        Lampa.Storage.set(OMDB_CACHE, cache);
    }

    function getKpCache(key) {
        var cache = Lampa.Storage.get(KP_CACHE) || {};
        var item = cache[key];
        return item && (Date.now() - item.timestamp < CACHE_TIME) ? item : null;
    }

    function setKpCache(key, data) {
        if (!data.kp && !data.imdb) return data;
        var cache = Lampa.Storage.get(KP_CACHE) || {};
        cache[key] = { 
            kp: data.kp,
            imdb: data.imdb,
            timestamp: Date.now() 
        };
        Lampa.Storage.set(KP_CACHE, cache);
        return data;
    }
    
    /* Получение IMDB ID из TMDB
    function getImdbIdFromTmdb(tmdbId, type, callback) {
        if (!tmdbId) return callback(null);
        
        var cleanType = type === 'movie' ? 'movie' : 'tv';
        var cacheKey = cleanType + '_' + tmdbId;
        var cache = Lampa.Storage.get(ID_MAPPING_CACHE) || {};
        
        if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < CACHE_TIME)) {
            return callback(cache[cacheKey].imdb_id);
        }

        var endpoint = cleanType;
        var url = 'https://api.themoviedb.org/3/' + endpoint + '/' + tmdbId + '/external_ids?api_key=' + Lampa.TMDB.key();

        new Lampa.Reguest().silent(url, function(data) {
            if (data && data.imdb_id) {
                cache[cacheKey] = {
                    imdb_id: data.imdb_id,
                    timestamp: Date.now()
                };
                Lampa.Storage.set(ID_MAPPING_CACHE, cache);
                callback(data.imdb_id);
            } else {
                if (cleanType === 'tv') {
                    fetchAlternativeImdbId(tmdbId, callback);
                } else {
                    callback(null);
                }
            }
        }, function(error) {
            console.error('TMDB API error:', error);
            callback(null);
        });
    } */
    
    function getImdbIdFromTmdb(tmdbId, type, callback) {
        if (!tmdbId) return callback(null);
        
        var cleanType = type === 'movie' ? 'movie' : 'tv';
        var cacheKey = cleanType + '_' + tmdbId;
        var cache = Lampa.Storage.get(ID_MAPPING_CACHE) || {};
        
        if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < CACHE_TIME)) {
            return callback(cache[cacheKey].imdb_id);
        }
    
        // 1. Пробуем стандартный метод для всех типов контента
        var url = 'https://api.themoviedb.org/3/' + cleanType + '/' + tmdbId + '/external_ids?api_key=' + Lampa.TMDB.key();
    
        // Универсальный обработчик запроса
        var makeRequest = function(url, success, error) {
            // Сначала пробуем стандартный silent-запрос
            new Lampa.Reguest().silent(url, success, function() {
                // Если не сработало, пробуем native-запрос
                new Lampa.Reguest().native(url, function(data) {
                    try {
                        success(typeof data === 'string' ? JSON.parse(data) : data);
                    } catch(e) {
                        error();
                    }
                }, error, false, { dataType: 'json' });
            });
        };
    
        makeRequest(url, function(data) {
            if (data && data.imdb_id) {
                cache[cacheKey] = {
                    imdb_id: data.imdb_id,
                    timestamp: Date.now()
                };
                Lampa.Storage.set(ID_MAPPING_CACHE, cache);
                callback(data.imdb_id);
            } else {
                // 2. Для сериалов пробуем альтернативный метод
                if (cleanType === 'tv') {
                    var altUrl = 'https://api.themoviedb.org/3/tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key();
                    makeRequest(altUrl, function(altData) {
                        var imdbId = (altData && altData.external_ids && altData.external_ids.imdb_id) || null;
                        if (imdbId) {
                            cache[cacheKey] = {
                                imdb_id: imdbId,
                                timestamp: Date.now()
                            };
                            Lampa.Storage.set(ID_MAPPING_CACHE, cache);
                        }
                        callback(imdbId);
                    }, function() {
                        callback(null);
                    });
                } else {
                    callback(null);
                }
            }
        }, function() {
            callback(null);
        });
    }

    function fetchAlternativeImdbId(tmdbId, callback) {
        var url = 'https://api.themoviedb.org/3/tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key();
        
        new Lampa.Reguest().silent(url, function(data) {
            var imdbId = (data && data.external_ids && data.external_ids.imdb_id) ? data.external_ids.imdb_id : null;
            if (imdbId) {
                var cacheKey = 'tv_' + tmdbId;
                var cache = Lampa.Storage.get(ID_MAPPING_CACHE) || {};
                cache[cacheKey] = {
                    imdb_id: imdbId,
                    timestamp: Date.now()
                };
                Lampa.Storage.set(ID_MAPPING_CACHE, cache);
            }
            callback(imdbId);
        }, function() {
            callback(null);
        });
    }
    
    // Получение рейтингов Кинопоиска и IMDb
    function fetchKpImdbRatings(card, callback) {
        var network = new Lampa.Reguest();
        var clean_title = kpCleanTitle(card.title);
        var search_date = card.release_date || '0000';
        var search_year = parseInt(search_date.slice(0, 4), 10);
        var orig = card.original_title || '';
        var params = {
            id: card.kp_id || card.id,
            url: 'https://kinopoiskapiunofficial.tech/',
            rating_url: 'https://rating.kinopoisk.ru/',
            headers: { 'X-API-KEY': KP_API_KEY }
        };

        var cachedData = getKpCache(params.id);
        if (cachedData) {
            showKpImdbRatings(cachedData);
            callback(cachedData);
            return;
        }

        // Если есть KP ID (каталог Куб), используем его
        if (card.kp_id) {
            fetchKpImdbRatingsById(card.kp_id, params, callback);
            return;
        }

        // Для TMDB ищем по IMDB ID или названию
        var url = card.imdb_id 
            ? params.url + 'api/v2.2/films?imdbId=' + encodeURIComponent(card.imdb_id)
            : params.url + 'api/v2.1/films/search-by-keyword?keyword=' + encodeURIComponent(clean_title);

        network.silent(url, function(json) {
            var items = json.items || json.films || [];
            var film = findBestMatch(items, card, orig, search_year);
            
            if (!film) {
                callback({ kp: null, imdb: null });
                return;
            }

            var id = film.kp_id || film.kinopoiskId || film.filmId;
            fetchKpImdbRatingsById(id, params, callback);
        }, function() {
            callback({ kp: null, imdb: null });
        }, false, { headers: params.headers });
    }
    
    function fetchKpImdbRatingsById(id, params, callback) {
        var network = new Lampa.Reguest();
        
        network.native(params.rating_url + id + '.xml', function(str) {
            try {
                var xml = $($.parseXML(str));
                var kpRating = parseFloat(xml.find('kp_rating').text()) || null;
                var imdbRating = parseFloat(xml.find('imdb_rating').text()) || null;
                var data = { kp: kpRating, imdb: imdbRating };
                setKpCache(params.id, data);
                showKpImdbRatings(data);
                callback(data);
            } catch (e) {
                fetchKpImdbRatingsAPI(id, params, callback);
            }
        }, function() {
            fetchKpImdbRatingsAPI(id, params, callback);
        }, false, { dataType: 'text' });
    }
    
    function fetchKpImdbRatingsAPI(id, params, callback) {
        var network = new Lampa.Reguest();
        network.silent(params.url + 'api/v2.2/films/' + id, function(data) {
            var ratings = {
                kp: data.ratingKinopoisk || null,
                imdb: data.ratingImdb || null
            };
            setKpCache(params.id, ratings);
            showKpImdbRatings(ratings);
            callback(ratings);
        }, function() {
            callback({ kp: null, imdb: null });
        }, false, { headers: params.headers });
    }
    
    function showKpImdbRatings(data) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        var imdbExistsInitially = $('.rate--imdb', render).length > 0;
        var kpExistsInitially = $('.rate--kp', render).length > 0;
        
        if (data.imdb && !isNaN(data.imdb)) {
            var imdb_rating = parseFloat(data.imdb).toFixed(1);
            $('.rate--imdb', render).removeClass('hide').find('> div').eq(0).text(imdb_rating);
        } else if (!imdbExistsInitially) {
            $('.rate--imdb', render).addClass('hide');
        }
        
        if (data.kp && !isNaN(data.kp)) {
            var kp_rating = parseFloat(data.kp).toFixed(1);
            $('.rate--kp', render).removeClass('hide').find('> div').eq(0).text(kp_rating);
        } else if (!kpExistsInitially) {
            $('.rate--kp', render).addClass('hide');
        }
    }
    
    function fetchOmdbRatings(card, cacheKey) {
        if (!card.imdb_id) {
            calculateAverageRating();
            return;
        }
        
        var url = 'https://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + card.imdb_id;
        
        new Lampa.Reguest().silent(url, function(data) {
            if (data && data.Response === 'True' && (data.Ratings || data.imdbRating)) {
                var ratings = {
                    rt: extractRating(data.Ratings, 'Rotten Tomatoes'),
                    mc: extractRating(data.Ratings, 'Metacritic'),
                    imdb: data.imdbRating || null,
                    ageRating: data.Rated || null,
                    timestamp: Date.now()
                };
                
                saveOmdbCache(cacheKey, ratings);
                insertRatings(ratings.rt, ratings.mc);
                updateHiddenElements(ratings);
            }
            calculateAverageRating();
        }, function(error) {
            console.error('Ошибка OMDB API:', error);
            calculateAverageRating();
        });
    }
    
    function updateHiddenElements(ratings) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        var pgElement = $('.full-start__pg.hide', render);
        if (pgElement.length && ratings.ageRating && ratings.ageRating !== 'N/A') {
            var localizedRating = AGE_RATINGS[ratings.ageRating] || ratings.ageRating;
            pgElement.removeClass('hide').text(localizedRating);
        }
        
        var imdbElement = $('.rate--imdb.hide', render);
        if (imdbElement.length && ratings.imdb && !isNaN(ratings.imdb)) {
            var imdbRating = parseFloat(ratings.imdb).toFixed(1);
            imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
        }
    }
    
    // Вспомогательные функции
    function findBestMatch(items, card, orig, searchYear) {
        if (!items || !items.length) return null;
        
        if (card.imdb_id) {
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                if ((items[i].imdb_id || items[i].imdbId) == card.imdb_id) {
                    filtered.push(items[i]);
                }
            }
            items = filtered;
            if (items.length) return items[0];
        }
        
        for (var j = 0; j < items.length; j++) {
            var elem = items[j];
            var year = elem.start_date || elem.year || '0000';
            var elemYear = parseInt(year.slice(0, 4), 10);
            
            var titleMatch = orig 
                ? equalTitle(elem.nameOriginal || elem.orig_title, orig) 
                : equalTitle(elem.nameRu || elem.title, card.title);
                
            var yearMatch = searchYear 
                ? Math.abs(elemYear - searchYear) <= 2 
                : true;
                
            if (titleMatch && yearMatch) {
                return elem;
            }
        }
        
        return null;
    }
    
    function kpCleanTitle(str) {
        if (!str) return '';
        return str.replace(/[\s.,:;’'`!?]+/g, ' ').trim()
            .replace(/^[ \/\\]+/, '').replace(/[ \/\\]+$/, '')
            .replace(/\+( *[+\/\\])+/g, '+').replace(/([+\/\\] *)+\+/g, '+')
            .replace(/( *[\/\\]+ *)+/g, '+');
    }
    
    function normalizeTitle(str) {
        if (!str) return '';
        return str.toLowerCase()
            .replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-')
            .replace(/ё/g, 'е')
            .replace(/[^a-zа-яё0-9\- ]/g, '')
            .trim();
    }
    
    function equalTitle(t1, t2) {
        return t1 && t2 && normalizeTitle(t1) === normalizeTitle(t2);
    }
    
    function extractRating(ratings, source) {
        if (!ratings || !Array.isArray(ratings)) return null;
        
        for (var i = 0; i < ratings.length; i++) {
            if (ratings[i].Source === source) {
                try {
                    return source === 'Rotten Tomatoes' 
                        ? parseFloat(ratings[i].Value.replace('%', '')) 
                        : parseFloat(ratings[i].Value.split('/')[0]);
                } catch(e) {
                    console.error('Ошибка при парсинге рейтинга:', e);
                    return null;
                }
            }
        }
        return null;
    }
    
    function insertRatings(rtRating, mcRating) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length) return;
    
        var lastRate = $('.full-start__rate:last', rateLine);
        
        if (rtRating && !isNaN(rtRating) && !$('.rate--rt', rateLine).length) {
            var rtElement = $(
                '<div class="full-start__rate rate--rt">' +
                    '<div>' + rtRating + '</div>' +
                    '<div class="source--name">Tomatoes</div>' +
                '</div>'
            );
            
            if (lastRate.length) {
                rtElement.insertAfter(lastRate);
            } else {
                rateLine.prepend(rtElement);
            }
        }
    
        if (mcRating && !isNaN(mcRating) && !$('.rate--mc', rateLine).length) {
            var insertAfter = $('.rate--rt', rateLine).length ? $('.rate--rt', rateLine) : lastRate;
            var mcElement = $(
                '<div class="full-start__rate rate--mc">' +
                    '<div>' + mcRating + '</div>' +
                    '<div class="source--name">Metacritic</div>' +
                '</div>'
            );
            
            if (insertAfter.length) {
                mcElement.insertAfter(insertAfter);
            } else {
                rateLine.prepend(mcElement);
            }
        }
    }
    
    function calculateAverageRating() {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length) return;
    
        var ratings = {
            imdb: parseFloat($('.rate--imdb div:first', rateLine).text()) || 0,
            tmdb: parseFloat($('.rate--tmdb div:first', rateLine).text()) || 0,
            kp: parseFloat($('.rate--kp div:first', rateLine).text()) || 0,
            mc: (parseFloat($('.rate--mc div:first', rateLine).text()) || 0) / 10,
            rt: (parseFloat($('.rate--rt div:first', rateLine).text()) || 0) / 10
        };
    
        var totalWeight = 0;
        var weightedSum = 0;
        var ratingsCount = 0;
        
        for (var key in ratings) {
            if (ratings.hasOwnProperty(key) && !isNaN(ratings[key]) && ratings[key] > 0) {
                weightedSum += ratings[key] * WEIGHTS[key];
                totalWeight += WEIGHTS[key];
                ratingsCount++;
            }
        }
    
        $('.rate--avg', rateLine).remove();
    
        if (ratingsCount > 1 && totalWeight > 0) {
            var averageRating = weightedSum / totalWeight;
            var colorClass = getRatingClass(averageRating);
            
            var avgElement = $(
                '<div class="full-start__rate rate--avg ' + colorClass + '">' +
                    '<div>' + averageRating.toFixed(1) + '</div>' +
                    '<div class="source--name">' + Lampa.Lang.translate("ratimg_omdb_avg") + '</div>' +
                '</div>'
            );
            
            $('.full-start__rate:first', rateLine).before(avgElement);
        }
        
        removeLoadingAnimation();
        rateLine.css('visibility', 'visible');
    }
    
    // Инициализация плагина
    function startPlugin() {
        window.combined_ratings_plugin = true;
        Lampa.Listener.follow('full', function(e) {
            if (e.type === 'complite') {
                setTimeout(function() {
                    fetchAdditionalRatings(e.data.movie);
                }, 500);
            }
        });
    }
    
    if (!window.combined_ratings_plugin) startPlugin();
})();