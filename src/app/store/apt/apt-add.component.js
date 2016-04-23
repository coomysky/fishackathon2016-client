(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeAptAdd', {
      templateUrl: 'app/store/view/apt-add.html',
      controller:storeAptAddController,
      controllerAs:'vm',
      bindings:{
        data:'=',
        onCreateAptSend:'&',
        onCreateAptOpen:'&',
        onCheckMail:'&'
      }
    });
    storeAptAddController.$inject = ['ngDialog','AptService','$filter'];

    function storeAptAddController(ngDialog,AptService,$filter){
      var vm = this;
      vm.popUpCreateApt = popUpCreateApt;

        function popUpCreateApt(){
          ngDialog.open({
              template: 'app/store/view/apt-add-pop.html',
              className: 'ngdialog-theme-default apt-add__pop' ,
              controller: ['$scope', function($scope) {
                $scope.openDatepicker = openDatepicker;
                $scope.showDatepicker = false;
                $scope.data = vm.data;
                $scope.getCreateAptTimes = getCreateAptTimes;
                $scope.createApt = createApt;
                $scope.checkEmail = checkEmail;
                $scope.apt ={
                  createDate: new Date()
                };

                init();

                function init(){
                   getCreateAptTimes();
                }
                function checkEmail(){
                  var promise = vm.onCheckMail({email:$scope.apt.email});

                  promise.then(function(res) {
                    $scope.apt.phone = res.phone;
                    $scope.apt.firstName = res.firstName;
                    $scope.apt.lastName = res.lastName;
                  });
                }

                function createApt(){
                  var apt = $scope.apt;
                  apt.createDate = $filter('date')($scope.apt.createDate, 'yyyy-MM-dd');
                  apt.store = vm.data.store.id;

                  vm.onCreateAptSend({apt:apt});
                  ngDialog.close();

                }

                function getCreateAptTimes(){
                  var aptCreateDate  =  $filter('date')($scope.apt.createDate, 'yyyy-MM-dd');
                  var promise = vm.onCreateAptOpen({date:aptCreateDate});

                  promise.then(function(res) {
                    $scope.gotCreateAptTimeList =  AptService.getCreateAptTimesList(res);

                  });

                }

                function openDatepicker(){
                    $scope.showDatepicker = true;
                }

              }]
          });

        }







    }

})();
