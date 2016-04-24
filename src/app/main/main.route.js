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

        },{
          state: 'main.near',
          abstract: true,
          config: {
              url: '/near',
              data: {
                  requiresLogin: false
              },
              views: {
                  '': {
                    templateUrl: 'app/main/near.html',
                    controller: 'MainNearController',
                    controllerAs: 'vm'
                  }
              }

          }

        },{
          state: 'main.report',
          abstract: true,
          config: {
              url: '/report',
              data: {
                  requiresLogin: false
              },
              views: {
                  '': {
                    templateUrl: 'app/main/report.html',
                    controller: 'MainReportController',
                    controllerAs: 'vm'
                  }
              }

          }

        },{
          state: 'main.query',
          abstract: true,
          config: {
              url: '/query',
              data: {
                  requiresLogin: false
              },
              views: {
                  '': {
                    templateUrl: 'app/main/query.html',
                    controller: 'MainQueryController',
                    controllerAs: 'vm'
                  }
              }

          }

        },{
          state: 'main.search',
          abstract: true,
          config: {
              url: '/search/:type/:id',
              data: {
                  requiresLogin: false
              },
              views: {
                  '': {
                    templateUrl: 'app/main/search.html',
                    controller: 'MainSearchController',
                    controllerAs: 'vm'
                  }
              }

          }

        }];
    }
})();
