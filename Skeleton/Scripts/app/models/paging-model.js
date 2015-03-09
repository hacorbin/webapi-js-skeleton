var PagingModel = function (ctx, api) {
    var context = (ctx ? ctx : this);
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
    var pages = (Math.round(players.length % 5) == 0 ? Math.round(players.length / 5) : (Math.round(players.length / 5) + 1));
    collection = players.slice(0, 5);
    
    return {
        title: title,
        players: players,
        page: page,
        pages: pages,
        collection: collection
    };
};

