(function() {
    'use strict';

    angular
        .module('wc')
        .run(appRun);

    appRun.$inject = ['routerHelper', '$rootScope', '$state'];

    /* @ngInject */
    function appRun(routerHelper, $rootScope, $state) {
        routerHelper.configureStates(getStates());
        $rootScope.$on('$stateChangeStart', function(event, toState,
            toParams) {
            // fix ui-router when
            // http://stackoverflow.com/questions/27120308/angular-ui-router-urlrouterprovider-when-not-working-when-i-click-a-ui-sref
            var defaultRoutes = {
            
            };

            if (defaultRoutes[toState.name]) {
                event.preventDefault();
                var route = defaultRoutes[toState.name];
                $state.go(route.targetState, route.data);
            }

        });
    }

    function getStates() {
        return [];
    }

})();
