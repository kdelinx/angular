angular.module('checkout.routes', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('options', {
                url: '/checkout',
                templateUrl: '/checkout-dist/options.html'
            })
            .state('delivery', {
                url: '/checkout/delivery',
                templateUrl: '/checkout-dist/delivery.html'
            })
            .state('payment', {
                url: '/checkout/payment',
                templateUrl: '/checkout-dist/payment.html'
            })
            .state('order', {
                url: '/checkout/order',
                templateUrl: '/checkout-dist/order.html'
            });

        $urlRouterProvider.otherwise('/checkout');

        $locationProvider.html5Mode(true);

    });