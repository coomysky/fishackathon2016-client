(function() {

    'use strict';

    angular
        .module('app.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'home',
            abstract: true,
            config: {
                url: '/',
                data: {
                    requiresLogin: false
                },
                templateUrl: 'app/main/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            }
        },{
          state: 'main',
          abstract: true,
          config: {
              url: '/main',
              data: {
                  requiresLogin: false
              },
              templateUrl: 'app/main/main.html',
              controller: 'MainController',
              controllerAs: 'vm'
          }

        }];
    }
})();
