(function () {
    var SOURCE_NAME = 'NUMParser';
    var CACHE_SIZE = 100;
    var CACHE_TIME = 1000 * 60 * 60 * 3; // 3 hours
    var cache = {};

    var BASE_URL = 'http://138.124.26.44:38888/api/lampac';

    var CATEGORIES = {
        k4: '4k',
        k4_new: '4k_new',
        movies_new: 'movies_new',
        movies: 'movies',
        russian_new_movies: 'movies_ru_new',
        russian_movies: 'russian_movies',
        cartoons: 'cartoons',
        cartoons_tv: 'cartoons_tv',
        all_tv: 'all_tv',
        russian_tv: 'russian_tv'
    };

    function NumparserApiService() {
        var self = this;
        self.network = new Lampa.Reguest();
        self.discovery = false;
        self.cache = {};

        function getCache(key) {
            var res = cache[key];
            if (res) {
                var cache_timestamp = Date.now() - CACHE_TIME;
                if (res.timestamp > cache_timestamp) return res.value;

                for (var ID in cache) {
                    var node = cache[ID];
                    if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
                }
            }
            return null;
        }

        function setCache(key, value) {
            var timestamp = Date.now();
            var size = Object.keys(cache).length;

            if (size >= CACHE_SIZE) {
                var cache_timestamp = timestamp - CACHE_TIME;
                for (var ID in cache) {
                    var node = cache[ID];
                    if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
                }
            }

            cache[key] = {
                timestamp: timestamp,
                value: value
            };
        }

        function normalizeData(json) {
            return {
                results: (json.results || []).map(function (item) {
                    return {
                        id: item.id,
                        name: item.name || item.title,
                        number_of_seasons: item.number_of_seasons,
                        last_episode_to_air: item.last_episode_to_air,
                        seasons: item.seasons,
                        first_air_date: item.first_air_date,
                        release_date: item.release_date,
                        poster_path: item.poster_path || item.poster || item.img || '',
                        overview: item.overview || item.description || '',
                        vote_average: item.vote_average || 0,
                        vote_count: item.vote_count || 0,
                        backdrop_path: item.backdrop_path || item.backdrop || '',
                        still_path: item.still_path || '',
                        source: SOURCE_NAME,
                        release_quality: item.release_quality || '',
                        original_language: item.original_language || 'en',
                        update_date: item.update_date || ''
                    };
                }),
                page: json.page || 1,
                total_pages: json.total_pages || json.pagesCount || 1,
                total_results: json.total_results || json.total || 0
            };
        }

        function getFromCache(url, params, onComplete, onError) {
            var json = getCache(url);
            if (json) {
                onComplete(normalizeData(json));
            } else {
                self.get(url, params, onComplete, onError);
            }
        }

        self.get = function (url, params, onComplete, onError) {
            self.network.silent(url, function (json) {
                if (!json) {
                    onError(new Error('Empty response from server'));
                    return;
                }

                var isArray = Array.isArray(json);
                var rawResults = isArray ? json : (json.results || []);
                var normalizedJson = {
                    results: rawResults.map(function (item) {
                        return {
                            id: item.id,
                            name: item.name || item.title,
                            number_of_seasons: item.number_of_seasons,
                            last_episode_to_air: item.last_episode_to_air,
                            seasons: item.seasons,
                            first_air_date: item.first_air_date,
                            release_date: item.release_date,
                            poster_path: item.poster_path || item.poster || item.img || '',
                            overview: item.overview || item.description || '',
                            vote_average: item.vote_average || 0,
                            vote_count: item.vote_count || 0,
                            backdrop_path: item.backdrop_path || item.backdrop || '',
                            still_path: item.still_path || '',
                            source: SOURCE_NAME,
                            release_quality: item.release_quality || '',
                            original_language: item.original_language || 'en',
                            update_date: item.update_date || ''
                        };
                    }),
                    page: json.page || 1,
                    total_pages: json.total_pages || json.pagesCount || 1,
                    total_results: json.total_results || json.total || rawResults.length
                };

                setCache(url, normalizedJson);
                onComplete(normalizedJson);
            }, function (error) {
                onError(error);
            });
        };

        self.list = function (params, onComplete, onError) {
            params = params || {};
            onComplete = onComplete || function () { };
            onError = onError || function () { };

            var category = params.url || CATEGORIES.movies_new;
            var page = params.page || 1;
            var url = BASE_URL + '/' + category + '?page=' + page + '&language=' + Lampa.Storage.get('tmdb_lang', 'ru');

            getFromCache(url, params, function (json) {
                if (!json.results) {
                    onError(new Error('Invalid cached data'));
                    return;
                }
                onComplete({
                    results: json.results || [],
                    page: json.page || page,
                    total_pages: json.total_pages || 1,
                    total_results: json.total_results || 0
                });
            }, onError);
        };

        self.full = function (params, onSuccess, onError) {
            var card = params.card;
            params.method = !!(card.number_of_seasons || card.seasons || card.first_air_date) ? 'tv' : 'movie';
            Lampa.Api.sources.tmdb.full(params, onSuccess, onError);
        };

        self.category = function (params, onSuccess, onError) {
            params = params || {};

            var partsData = [
                function (callback) {
                    makeRequest(CATEGORIES.k4_new, 'В высоком качестве (новые)', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.movies_new, 'Новые фильмы', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.russian_new_movies, 'Новые русские фильмы', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.all_tv, 'Сериалы', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.russian_tv, 'Русские сериалы', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.cartoons, 'Мультфильмы', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.k4, 'В высоком качестве', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.movies, Lampa.Lang.translate('menu_movies'), callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.russian_movies, 'Русские фильмы', callback);
                },
                function (callback) {
                    makeRequest(CATEGORIES.cartoons_tv, 'Мультсериалы', callback);
                }
            ];

            function makeRequest(category, title, callback) {
                var page = params.page || 1;
                var url = BASE_URL + '/' + category + '?page=' + page + '&language=' + Lampa.Storage.get('tmdb_lang', 'ru');

                getFromCache(url, params, function (json) {
                    var result = {
                        url: category,
                        title: title,
                        page: page,
                        total_results: json.total_results || 0,
                        total_pages: json.total_pages || 1,
                        more: json.total_pages > page,
                        results: json.results || [],
                        source: SOURCE_NAME
                    };
                    callback(result);
                }, function (error) {
                    callback({ error: error });
                });
            }

            function loadPart(partLoaded, partEmpty) {
                Lampa.Api.partNext(partsData, 5, function (result) {
                    partLoaded(result);
                }, function (error) {
                    partEmpty(error);
                });
            }

            loadPart(onSuccess, onError);
            return loadPart;
        };
    }

    function startPlugin() {
        if (window.numparser_plugin) {
            return;
        }
        window.numparser_plugin = true;

        if (Lampa.Storage.field('start_page') === SOURCE_NAME) {
            window.start_deep_link = {
                component: 'category',
                page: 1,
                url: '',
                source: SOURCE_NAME,
                title: SOURCE_NAME
            };
        }

        var values = Lampa.Params.values.start_page;
        values[SOURCE_NAME] = SOURCE_NAME;

        var numparserApi = new NumparserApiService();
        Lampa.Api.sources.numparser = numparserApi;
        Object.defineProperty(Lampa.Api.sources, SOURCE_NAME, {
            get: function () {
                return numparserApi;
            }
        });

        var menuItem = $('<li data-action="numparser" class="menu__item selector"><div class="menu__ico"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path fill="currentColor" d="M482.909,67.2H29.091C13.05,67.2,0,80.25,0,96.291v319.418C0,431.75,13.05,444.8,29.091,444.8h453.818c16.041,0,29.091-13.05,29.091-29.091V96.291C512,80.25,498.95,67.2,482.909,67.2z M477.091,409.891H34.909V102.109h442.182V409.891z"/></g></g><g><g><rect fill="currentColor" x="126.836" y="84.655" width="34.909" height="342.109"/></g></g><g><g><rect fill="currentColor" x="350.255" y="84.655" width="34.909" height="342.109"/></g></g><g><g><rect fill="currentColor" x="367.709" y="184.145" width="126.836" height="34.909"/></g></g><g><g><rect fill="currentColor" x="17.455" y="184.145" width="126.836" height="34.909"/></g></g><g><g><rect fill="currentColor" x="367.709" y="292.364" width="126.836" height="34.909"/></g></g><g><g><rect fill="currentColor" x="17.455" y="292.364" width="126.836" height="34.909"/></g></g></svg></div><div class="menu__text">NUMParser</div></li>');
        $('.menu .menu__list').eq(0).append(menuItem);

        menuItem.on('hover:enter', function () {
            Lampa.Activity.push({
                title: SOURCE_NAME,
                component: 'category',
                source: SOURCE_NAME,
                page: 1
            });
        });
    }

    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (event) {
            if (event.type === 'ready') {
                startPlugin();
            }
        });
    }
})();