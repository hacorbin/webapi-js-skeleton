var AboutModel = function (api, template) {
    var title = "About Page";

    return new Ractive({
        el: $('#target'),
        template: template,
        data: {
            title: title
        }
    });
};