(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainSearchController', MainSearchController);

    // MainSearchController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainSearchController($scope,$rootScope,$stateParams,Service) {
          var vm = this;
          vm.mmsi = $stateParams.mmsi;
          vm.result = [];
          vm.setResult = setResult;



          init();

          function init(){
            vm.result = Service.findMmsiData(vm.mmsi);
            // vm.result = Service.queryAllData();

            console.log(vm.result);

          }

          function setResult(boat){
            vm.result = [boat];
          }





        }

})();
