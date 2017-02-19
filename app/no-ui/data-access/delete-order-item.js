angular.module('noUi.dataAccess.order.deleteOrderItem', [])
    .factory('noUiDeleteOrderItemProvider', function ($resource) {

        var url = '';
        var params = {
            id: '@id'
        };

        return $resource(url, params, {
            save: {
                cache: false,
                method: 'POST'
            }
        });

    });