    'use strict';
   
    page('/', function () {
        $.get('/Scripts/app/views/home.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    HomeModel.init(this);
                    return HomeModel;
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
                    HomeModel.init(this);
                    return HomeModel;
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
                    return AboutModel;
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
                    return StackModel;
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
                    return NotFoundModel;
                }
            });
        });
    });

    page({popstate: false, click: true, dispatch: true});
    
    var swiftclick = SwiftClick.attach(document.body);
