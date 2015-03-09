var PagingModel = function (api, template) {
    var title = "Paging Data";
    var collection = [];
    var players = [ { name: "Joe", sport: "football" },
                    { name: "Joe", sport: "football" },
                    { name: "Joe", sport: "football" },
                    { name: "Joe", sport: "football" },
                    { name: "Joe", sport: "football" },
                    { name: "Mel", sport: "football" },
                    { name: "Mel", sport: "football" },
                    { name: "Mel", sport: "football" },
                    { name: "Mel", sport: "football" },
                    { name: "Mel", sport: "football" },
                    { name: "Pat", sport: "football" },
                    { name: "Pat", sport: "football" },
                    { name: "Pat", sport: "football" },
                    { name: "Pat", sport: "football" },
                    { name: "Pat", sport: "football" },
                    { name: "Bo", sport: "football" },
                    { name: "Bo", sport: "football" },
                    { name: "Bo", sport: "football" },
                    { name: "Bo", sport: "football" },
                    { name: "Bo", sport: "football" },
                    { name: "Mike", sport: "football" },
                    { name: "Mike", sport: "football" },
                    { name: "Mike", sport: "football" },
                    { name: "Mike", sport: "football" }];

    var page = 0;
    var pages = 0;

    return new Ractive({
        el: $('#target'),
        template: template,
        data: {
            title: title,
            collection: collection,
            players: players,
            page: page,
            pages: pages
        },
        onrender: function () {
            var p = this.get('players');
            pages = (Math.round(p.length % 5) == 0 ? Math.round(p.length / 5) : (Math.round(p.length / 5) + 1));
            collection = p.slice(0, 5);
            this.set('pages', pages);
            this.set('collection', collection);
        },
        first: function () {
            var paging = new Pager(this, 'collection', this.get('players'));
            paging.first();
        },
        next: function () {
            var paging = new Pager(this, 'collection', this.get('players'));
            paging.next();
        },
        previous: function () {
            var paging = new Pager(this, 'collection', this.get('players'));
            paging.previous();
        },
        last: function () {
            var paging = new Pager(this, 'collection', this.get('players'));
            paging.last();
        }
    });;
}