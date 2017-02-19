angular.module('noUi.dataAccess.postToken', [])
    .factory('noUiPostTokenProvider', function ($resource) {


        var url = 'url';
        var params = {};

        return $resource(url, params, {
            query: {
                method: 'POST',
                cache: false,
                isArray: false,
                transformResponse: function (data) {
                    data = JSON.parse(data);
                   // console.log(data.data);
                    return data;
                }
            }
        });

    });