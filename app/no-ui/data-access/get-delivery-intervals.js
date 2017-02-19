angular.module('noUi.dataAccess.order.getDeliveryIntervals', [])
    .factory('noUiGetDeliveryIntervalsProvider', function ($resource) {

        var url = '';
        var params = {};

        return $resource(url, params, {
            query: {
                method: 'POST',
                cache: false,
                isArray: false,
                transformResponse: function (data) {
                    data = JSON.parse(data);
                    return data;
                }
            }
        });

    });