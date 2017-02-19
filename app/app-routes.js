angular.module('redmine.routes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/templates/table.html'
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);

    });