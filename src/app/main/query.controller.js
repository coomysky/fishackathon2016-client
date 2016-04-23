(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainQueryController', MainQueryController);

    // MainQueryController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainQueryController($state,NgTableParams,Service) {
          var vm = this;
          
          vm.tableParams = new NgTableParams({
             page: 1,
             count: 10
           }, {
             filterDelay: 0,
             data: Service.queryAllData()
           });
        }

})();
