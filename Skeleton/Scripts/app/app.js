    'use strict';
    
    var api = api ? api : new appApi();

    page('/', function () {
        $.get('/Scripts/app/views/home.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new HomeModel(this, api);
                    model.init(this);
                    return model;
                }
            });
        });
    });

    page('/home', function () {
        $.get('/Scripts/app/views/home.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new HomeModel(this, api);
                    model.init(this);
                    return model;
                }
            });
        });
    });

    page('/about', function () {
        $.get('/Scripts/app/views/about.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new AboutModel(this, api);
                    return model;
                }
            });
        });
    });

    page('/stack', function () {
        $.get('/Scripts/app/views/stack.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new StackModel(this, api);
                    return model;
                }
            });
        });
    });

    page('/paging', function () {
        $.get('/Scripts/app/views/paging.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new PagingModel(this, api);
                    return model;
                },
                first: function() {
                    var p = new paging(this, 'collection', this.get('players'));
                    p.first();
                },
                next: function () {
                    var p = new paging(this, 'collection', this.get('players'));
                    p.next();
                },
                previous: function () {
                    var p = new paging(this, 'collection', this.get('players'));
                    p.previous();
                },
                last: function () {
                    var p = new paging(this, 'collection', this.get('players'));
                    p.last();
                }
            });
        });
    });

    page('*', function () {
        $.get('/Scripts/app/views/404.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new NotFoundModel(this, api);
                    return model;
                }
            });
        });
    });

    page({popstate: false, click: true, dispatch: true});
    
    var swiftclick = SwiftClick.attach(document.body);
