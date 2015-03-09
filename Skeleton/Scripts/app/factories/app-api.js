var api = {
    "getLanguages": function () {
        return reqwest({ url: '/api/values', type: 'json' });
    }
};