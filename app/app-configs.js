angular.module('redmine.configs', [])
    .factory('httpRequestInterceptor', function ($cookies) {
        return {
            request: function (config) {
                config.headers['X-CSRFToken'] = $cookies.get('csrftoken');
                return config;
            }
        };
    })
    .run(function ($rootScope) {
	   console.log('Hello config!');
    })
    .config(function ($httpProvider, $resourceProvider, $interpolateProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
        //$httpProvider.defaults.withCredentials = true;
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