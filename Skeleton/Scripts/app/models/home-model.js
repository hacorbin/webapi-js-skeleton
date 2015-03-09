var HomeModel = function () {
    var languages = [];
    return {
        "title": "Home Page",
        "languages": languages,
        "init": function (ctx) {
            if (languages.length == 0) {
                api.getLanguages()
                    .then(function (res) {
                        console.dir(res);
                        //use the context from RACtive to update the data model bound to the view
                        ctx.set('languages', res);
                    }, function (err) {
                        console.dir(err);
                    });
            }
        },
        "choose": function (element, lang, render) {
            console.log(lang + ' clicked');
            console.dir(element);
            element.style.color = 'red';
        }
    };
}