        var currentDate = new Date().toISOString().substr(0, 10);
        var menuList = $('.menu .menu__list').eq(0);

        categories.forEach(function(category) {
            var menuItem = $('<li class="menu__item selector" data-action="inter_' + category.title.replace(/\s+/g, '_') + '"><div class="menu__ico">' + category.icon + '</div><div class="menu__text">' + category.title + '</div></li>');
            
            menuItem.on('hover:enter', function() {
                var params = {
                    url: category.query + currentDate,
                    title: category.title,
                    component: 'category_full',
                    source: 'tmdb',
                    card_type: 'true',
                    page: 1
                };

                if (category.networks) {
                    params.networks = category.networks;
                }

                Lampa.Activity.push(params);
            });
            
            menuList.append(menuItem);
        });
    }

    if (window.appready) {
        initPlugin();
    } else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                initPlugin();
            }
        });
    }
})();                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.57 17.735h-1.815l-3.34-9.203h1.633l2.02 5.987c.075.231.273.9.586 2.012l.297-.997l.33-1.006l2.094-6.004H24zm-5.344-.066a5.8 5.8 0 0 1-1.55.207c-1.23 0-1.84-.693-1.84-2.087V9.646h-1.063V8.532h1.121V7.081l1.476-.602v2.062h1.707v1.113H13.38v5.805c0 .446.074.75.214.932s.396.264.75.264c.207 0 .495-.041.883-.115zm-7.29-5.343c.017 1.764 1.55 2.358 1.567 2.366c-.017.042-.248.842-.808 1.658c-.487.71-.99 1.418-1.79 1.435c-.783.016-1.03-.462-1.93-.462c-.89 0-1.17.445-1.913.478c-.758.025-1.344-.775-1.838-1.484c-.998-1.451-1.765-4.098-.734-5.88c.51-.89 1.426-1.451 2.416-1.46c.75-.016 1.468.512 1.93.512s1.327-.627 2.234-.536c.38.016 1.452.157 2.136 1.154c-.058.033-1.278.743-1.27 2.219M6.468 7.988c.404-.495.685-1.18.61-1.864c-.585.025-1.294.388-1.723.883c-.38.437-.71 1.138-.619 1.806c.652.05 1.328-.338 1.732-.825"/></svg>',
                query: 'discover/tv?sort_by=first_air_date.desc&first_air_date.gte=2020-01-01&vote_average.gte=6&vote_average.lte=10&first_air_date.lte=',
                networks: '1024'
            },
            {
                title: 'Netflix',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596c2.344.058 4.85.398 4.854.398c-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/></svg>',
                query: 'discover/tv?sort_by=first_air_date.desc&first_air_date.gte=2020-01-01&vote_average.gte=6&vote_average.lte=10&first_air_date.lte=',
                networks: '213'
            },
            {
                title: 'MGM+',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.57 17.735h-1.815l-3.34-9.203h1.633l2.02 5.987c.075.231.273.9.586 2.012l.297-.997l.33-1.006l2.094-6.004H24zm-5.344-.066a5.8 5.8 0 0 1-1.55.207c-1.23 0-1.84-.693-1.84-2.087V9.646h-1.063V8.532h1.121V7.081l1.476-.602v2.062h1.707v1.113H13.38v5.805c0 .446.074.75.214.932s.396.264.75.264c.207 0 .495-.041.883-.115zm-7.29-5.343c.017 1.764 1.55 2.358 1.567 2.366c-.017.042-.248.842-.808 1.658c-.487.71-.99 1.418-1.79 1.435c-.783.016-1.03-.462-1.93-.462c-.89 0-1.17.445-1.913.478c-.758.025-1.344-.775-1.838-1.484c-.998-1.451-1.765-4.098-.734-5.88c.51-.89 1.426-1.451 2.416-1.46c.75-.016 1.468.512 1.93.512s1.327-.627 2.234-.536c.38.016 1.452.157 2.136 1.154c-.058.033-1.278.743-1.27 2.219M6.468 7.988c.404-.495.685-1.18.61-1.864c-.585.025-1.294.388-1.723.883c-.38.437-.71 1.138-.619 1.806c.652.05 1.328-.338 1.732-.825"/></svg>',
                query: 'discover/tv?sort_by=first_air_date.desc&first_air_date.gte=2020-01-01&vote_average.gte=6&vote_average.lte=10&first_air_date.lte=',
                networks: '6219'
            }
        ];

        var currentDate = new Date().toISOString().substr(0, 10);
        var menuList = $('.menu .menu__list').eq(0);

        categories.forEach(function(category) {
            var menuItem = $('<li class="menu__item selector" data-action="inter_' + category.title.replace(/\s+/g, '_') + '"><div class="menu__ico">' + category.icon + '</div><div class="menu__text">' + category.title + '</div></li>');
            
            menuItem.on('hover:enter', function() {
                var params = {
                    url: category.query + currentDate,
                    title: category.title,
                    component: 'category_full',
                    source: 'tmdb',
                    card_type: 'true',
                    page: 1
                };

                if (category.networks) {
                    params.networks = category.networks;
                }

                Lampa.Activity.push(params);
            });
            
            menuList.append(menuItem);
        });
    }

    if (window.appready) {
        initPlugin();
    } else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                initPlugin();
            }
        });
    }
})();
