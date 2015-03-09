var NotFoundModel = function (api, template) {
    var title =  "404: Resource Not Found."
    return new Ractive({
        el: $('#target'),
        template: template,
        data: {
            title: title
        }
    });
};