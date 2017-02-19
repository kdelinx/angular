angular.module('ui.controllers.table', [])
    .controller('uiTableCtrl', function ($scope, noUiGetIssuesProvider) {

        $scope.queryDate = '';

        // noUiGetIssuesProvider.query({date: queryDate}).$promise.then(function (resp) {
        //     console.log(resp);
        // });

        console.log(noUiGetIssuesProvider.getIssues());
    });