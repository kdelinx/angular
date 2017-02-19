angular.module('noUi.dataAccess.order.putOrderField', [])
    .factory('noUiPutOrderFieldProvider', function ($resource) {

        var url = 'api/basket/autosave/';
        var params = {};

        return $resource(url, params, {
            save: {
                cache: false,
                method: 'POST'
            }
        });

    });