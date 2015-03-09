    'use strict';
    
    var api = api ? api : new appApi();

    page('/', function () {
        $.get('/Scripts/app/views/home.html', function (template) {
            var homeModel = new HomeModel(api, template);
        });
    });

    page('/home', function () {
        $.get('/Scripts/app/views/home.html', function (template) {
            var homeModel = new HomeModel(api, template);
        });
    });

    page('/about', function () {
        $.get('/Scripts/app/views/about.html', function (template) {
            var aboutModel = new AboutModel(api, template);
        });
    });

    page('/stack', function () {
        $.get('/Scripts/app/views/stack.html', function (template) {
            var stackModel = new StackModel(api, template);
        });
    });

    page('/paging', function () {
        $.get('/Scripts/app/views/paging.html', function (template) {
            var pageModel = new PagingModel(api, template);
        });
    });

    page('*', function () {
        $.get('/Scripts/app/views/404.html', function (template) {
            var notFoundModel = new NotFoundModel(api, template);
        });
    });

    page({popstate: false, click: true, dispatch: true});
    
    var swiftclick = SwiftClick.attach(document.body);
