angular.module('noUi.dataAccess.order.getOrderInfo', [])
    .factory('noUiGetOrderInfoProvider', function ($resource) {

        var url = 'api/basket/get-order-info/';
        var params = {};

        return $resource(url, params, {
            query: {
                method: 'GET',
                cache: false,
                isArray: false,
                transformResponse: function (data) {
                    data = JSON.parse(data);
                   // console.log(data.data);
                    return data.data;
                }
            }
        });

    });