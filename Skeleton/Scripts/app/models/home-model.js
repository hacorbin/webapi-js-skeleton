var HomeModel = {
    "title": "Home Page",
    "languages": [],
    "init": function(ctx) {
        api.getLanguages()
            .then(function (res) {
                console.dir(res);
                //use the context from RACtive to update the data model bound to the view
                ctx.set('languages', res);
            }, function (err) {
                console.dir(err);
            });
    },
    "choose": function (element, lang, render) {
            console.log(lang + ' clicked');
            console.dir(element);
            element.style.color = 'red';
        }
};