var HomeModel = function (api, template) {
    var languages = [],
        title = "Home Page";

    var getLanguages = function (ctx) {
        api.getLanguages()
            .then(function (res) {
                console.dir(res);
                //use the context from RACtive to update the data model bound to the view
                ctx.set('languages', res);
            }, function (err) {
                console.dir(err);
            });
    };

    return new Ractive({
        el: $('#target'),
        template: template,
        onrender: function () {
            getLanguages(this);
        },
        data: {
            title: title,
            languages: []
        }
    });
}