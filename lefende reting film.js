(function () {
    'use strict';

    var preFilters = {
        filters: [
            function(baseUrl) {
                baseUrl += '&vote_count.gte=' + 1;
                return baseUrl;
            },
            function(baseUrl) {
                var baseExcludedKeywords = [
                    '346488',
                    '158718',
                    '41278'
                ];

                baseUrl += '&without_keywords=' + encodeURIComponent(baseExcludedKeywords.join(','));
                return baseUrl;
            }
        ],
        apply: function(baseUrl) {
            var resultUrl = baseUrl;

            for (var i = 0; i < this.filters.length; i++) {
                resultUrl = this.filters[i](resultUrl);
            }

            return resultUrl;
        }
    };

    var postFilters = {
        filters: [
            function(results) {
                return results.filter(function(item) {
                    if (!item.original_language) {
                        return true;
                    }

                    var lang = item.original_language.toLowerCase();
                    if (lang == 'uk' || lang == 'ru') {
                        return true;
                    }

                    return item.vote_count > 50;
                });
            }
        ],
        apply: function(results) {
            var clone = Lampa.Arrays.clone(results);

            for (var i = 0; i < this.filters.length; i++) {
                clone = this.filters[i](results);
            }

            return clone;
        }
    };

    function isFilterApplicable(baseUrl) {
        return baseUrl.indexOf(Lampa.TMDB.api('')) > -1 && baseUrl.indexOf('search') == -1;
    }

    function start() {
        if (window.trash_filter_plugin) {
            return;
        }

        window.trash_filter_plugin = true;

        Lampa.Listener.follow('request_before', function(event) {
            if (isFilterApplicable(event.params.url)) {
                event.params.url = preFilters.apply(event.params.url);
            }
        });

        Lampa.Listener.follow('request_secuses', function (event) {
            if (isFilterApplicable(event.params.url) && event.data && Array.isArray(event.data.results)) {
                event.data.results = postFilters.apply(event.data.results);
            }
        });
    }

    if (window.appready) {
        start();
    } else {
        Lampa.Listener.follow('app', function (event) {
            if (event.type === 'ready') {
                start();
            }
        });
    }
})(); {
  'use strict';

  function startPlugin() {
    var manifest = {
      type: 'other',
      version: '0.1.0',
      name: 'Скрытие AI',
      description: 'Плагин для скрытия AI-элементов',
      component: 'hide_ai',
    };
    Lampa.Manifest.plugins = manifest;


    // Lampa.Template.add('hhh', '<style type="text/css">\n.search-source.selector:contains("TMDB") {display:none}\n</style>');
    // $('head').append(Lampa.Template.get('hhh', {}, true));


    Lampa.Listener.follow('full', function (e) {

      console.log('full', e);
      if (e.type == 'complite') {
      
        $('.button--options').hide();
        $('.search-source.selector:contains("AI")').hide();

      }

    });

      
  }

  if (window.appready) {
    startPlugin();
  } else {
    Lampa.Listener.follow('app', function(e) {
      console.log('app', e);
      if (e.type == 'ready') {
        startPlugin();
      }
    });
  }
})();
