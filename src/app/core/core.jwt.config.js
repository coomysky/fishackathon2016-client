(function() {

    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', 'logger', 'store',
        'jwtHelper'
    ];
    /* @ngInject */
    function appRun($rootScope, $state, logger, store, jwtHelper) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            logger.log('$stateChangeStart, to: ', to.name);
            if (to.data && to.data.requiresAuth) {
                if (!store.get('jwt') || jwtHelper.isTokenExpired(
                        store.get('jwt'))) {
                    e.preventDefault();
                }
            }

        });
    }
})();
