(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainReportController', MainReportController);

    // MainReportController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainReportController($state,$scope,$rootScope,Service,NgTableParams) {
          var vm = this;
          vm.blackListShow = true;
          vm.isLoading = true;
          vm.creatRepo = creatRepo;
          vm.sendRes =false;
          vm.showRepo = showRepo;

          vm.map = { center: { latitude: 23.18, longitude: 123.15 }, zoom: 8 };

           Service.queryBlackList().then(function(res){

              vm.blackList = res.data;
              vm.isLoading = false;
              vm.tableParams = new NgTableParams({
                 page: 1,
                 count: 10
               }, {
                 filterDelay: 0,
                 data: vm.blackList
               });


          });

          function showRepo(){
            vm.sendRes = false;
            vm.repo = '';
            console.log(vm.repo);
          }
          function creatRepo(){
            vm.sendRes = true;
            console.log(vm.repo);
          }





        }

})();
