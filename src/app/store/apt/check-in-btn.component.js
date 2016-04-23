(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeAptCheckInBtn', {
      templateUrl: 'app/store/view/apt-check-in-btn.html',
      controller:storeAptCheckInBtnController,
      controllerAs:'vm',
      bindings:{
        clerks:'=',
        onCheckIn:'&',
        apt:'=',
        onFinish:'&'
      }
    });
    storeAptCheckInBtnController.$inject = ['ngDialog'];

    function storeAptCheckInBtnController(ngDialog){
      var vm = this;
      vm.popUpSelecClerk = popUpSelecClerk;
      vm.checkIn = checkIn;

      function checkIn(Clerk){


        var res = JSON.parse(Clerk);
        vm.onCheckIn({clerk:res});
        ngDialog.close();
      }

      function popUpSelecClerk(){
        ngDialog.open({
            template: 'app/store/view/check-in-btn-pop.html',
            controller: ['$scope', function($scope) {
              $scope.checkIn = vm.checkIn;
              $scope.clerks = vm.clerks;
            }]
        });
      }




    }

})();
