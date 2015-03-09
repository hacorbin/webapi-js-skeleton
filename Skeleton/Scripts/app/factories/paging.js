var paging = function (ctx, currentDataName, allData) {
    var context = ctx;
    var first =  function() {
        context.set('page', 0);
        var currentData = context.get(currentDataName);
        currentData = allData.slice(0, 5);
        context.set(currentDataName, currentData);
        $('body, html').scrollTop(0);
    },
    next = function () {
        var p = context.get('page');
        var ps = context.get('pages');
        if (p < ps - 2) {
            p = p + 1;
            context.set('page', p);
        }
        var currentData = context.get(currentDataName);
        currentData = allData.slice(5 * p, (p * 5) + 5);
        context.set(currentDataName, currentData);
        $('body, html').scrollTop(0);
    },
    previous = function (event, i) {
        var p = context.get('page');
        if (p > 0) {
            p = p - 1;
            context.set('page', p);
        }

        var currentData = context.get(currentDataName);
        currentData = allData.slice(5 * p, (p * 5)+5);
        context.set(currentDataName, currentData);
        $('body, html').scrollTop(0);
    },
    last = function (event, i) {
        var p = context.get('page');
        var ps = context.get('pages');
        if (p != ps-2) {
            p = ps - 2;
            context.set('page', p);
        }
        var currentData = context.get(currentDataName);
        currentData = allData.slice(5 * p, (p * 5) + 5);
        context.set(currentDataName, currentData);
        $('body, html').scrollTop(0);
    };

    return {
        first: first,
        last: last,
        previous: previous,
        next: next
    };
}