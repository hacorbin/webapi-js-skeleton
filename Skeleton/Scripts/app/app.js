﻿    'use strict';
   
    page('/', function () {
        $.get('/Scripts/app/views/home.html', function (template) {
            var ractive = new Ractive({
                el: $('#target'),
                template: template,
                data: function () {
                    var model = new HomeModel(this);
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
                    var model = new HomeModel(this);
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
                    var model = new AboutModel(this);
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
                    var model = new StackModel(this);
                    return model;
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
                    var model = new NotFoundModel(this);
                    return model;
                }
            });
        });
    });

    page({popstate: false, click: true, dispatch: true});
    
    var swiftclick = SwiftClick.attach(document.body);
