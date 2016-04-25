(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: 'error',
        config: {
          url: '/error/:status',
          controller: 'ErrorController',
          controllerAs: 'vm',
          ncyBreadcrumb: {
            label: '錯誤頁'
          },
          templateUrl: function($stateParams) {

            var pagePath = 'app/core/' + $stateParams.status + '.html';
            return 'app/core/' + $stateParams.status + '.html';
          }
        }
      }
    ];
  }
})();
