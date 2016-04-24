(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainSearchController', MainSearchController);

    // MainSearchController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainSearchController($scope,$rootScope,$stateParams,Service) {
          var vm = this;
          vm.id = $stateParams.id;
          vm.type = $stateParams.type;
          vm.result = [];
          vm.setResult = setResult;




          init();

          function init(){
            Service.findMmsiData(vm.id, vm.type).then(function(res) {
              vm.result.push(res.data);
              if(_.isEmpty(res.data)){
                vm.result ='';
              }
            });
            // vm.result = Service.queryAllData();

            console.log(vm.result);

          }

          function setResult(boat){
            vm.result = [boat];
          }





        }

})();
