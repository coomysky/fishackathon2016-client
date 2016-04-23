(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize', 'ngCookies', 'ngTouch',
            'ngResource',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus', 'ui.bootstrap', 'angular-ladda',
            'angular-jwt', 'angular-storage', 'ngDialog','slickCarousel', 'ngMaterial', 'angular-momentjs',
            'angularRandomString'
        ]);
})();
