angular.module('redmine', [
    'ngResource',
    'ngAnimate',
    'ngSanitize',
    'ngCookies',
    'angularMoment',

    'redmine.configs',
    'redmine.routes',

    'noUi.core.utils',
    'noUi.dataAccess.postToken',
    'noUi.dataAccess.getIssues',

    'ui.controllers.token',
    'ui.controllers.table'
]);