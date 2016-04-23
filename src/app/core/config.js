(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    core.config(materialThemConfig);
    materialThemConfig.$inject = ['$mdThemingProvider'];

    function materialThemConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('orange');
    }


    core.config(configure);

    configure.$inject = ['$logProvider', '$httpProvider',
        'routerHelperProvider', 'exceptionHandlerProvider',
        'jwtInterceptorProvider', 'laddaProvider', 'config',
        '$locationProvider'
    ];
    /* @ngInject */
    function configure($logProvider, $httpProvider, routerHelperProvider,
        exceptionHandlerProvider, jwtInterceptorProvider, laddaProvider,
        config, $locationProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        $locationProvider.hashPrefix('!');

        // $httpProvider.interceptors.push('authInterceptor');
        // $httpProvider.interceptors.push('jwtInterceptor');

        laddaProvider.setOption({
            style: 'zoom-out'
        });

        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });

    }

})();
