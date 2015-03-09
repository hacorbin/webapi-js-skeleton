var appApi = function () {
    function getLanguages() {
        return reqwest({ url: '/api/values', type: 'json' });
    }
    return {
        getLanguages: getLanguages
    };
}