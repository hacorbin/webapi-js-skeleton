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
                data: function (data) {
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
                data: function (data) {
                    return StackModel;
                }
            });
        });
    });

    page('*', function () {
        console.log('Not found');
    });

    page({popstate: false, click: true, dispatch: true});
    
    var swiftclick = SwiftClick.attach(document.body);
