angular.module('checkout.configs', [])
    .factory('httpRequestInterceptor', function ($cookies) {
        return {
            request: function (config) {
                config.headers['X-CSRFToken'] = $cookies.get('csrftoken');
                return config;
            }
        };
    })
    .run(function ($rootScope, noUiPutOrderFieldProvider) {
	    $rootScope.autosave = function(event) {
            /*console.log(event.currentTarget);*/

           var attrs, prop, type, val;
            type = event.currentTarget.type;
            attrs = event.currentTarget.attributes;

            if(type === 'checkbox') {
                val = event.currentTarget.checked;
            } else {
                val = event.currentTarget.value;
            }

            for (var i=0; i < attrs.length; i++) {
                if(attrs[i].name === 'ng-model') {
                    prop = attrs[i].value.replace('order.', '');
                }
            }

            var field = {key: prop, value: val};
            noUiPutOrderFieldProvider.save(field).$promise.then(function () {
               console.info(field); 
            });
        };
    })
    .config(function ($httpProvider, $resourceProvider, $interpolateProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common = {
            'Accept-Language': navigator.language
        };
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/json'
        };

        $httpProvider.defaults.headers.put = {
            'Content-Type': 'application/json'
        };

        $httpProvider.defaults.headers.patch = {
            'Content-Type': 'application/json'
        };

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');

        $resourceProvider.defaults.stripTrailingSlashes = false;
    });