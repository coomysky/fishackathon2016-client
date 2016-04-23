(function() {
  'use strict';

  angular
    .module('app.cs')
    .component('csMain', {
      templateUrl: 'app/cs/view/main.html',
      controller:csMainController,
      controllerAs:'vm',
      bindings:{
        data:'='
      }
    });

    csMainController.$inject = ['$scope', '$timeout'];
    function csMainController($scope, $timeout){
      var vm = this;
      var sample ={
        stores:[
          {name:'Coomy',phone:'0911954095',address:'20 college street,PA 65454,USA',status:'15',storeId:'store1'},
          {name:'LA.2',phone:'0912834980',address:'20 college street,LA 23456,USA',status:'60',storeId:'store2'},
          {name:'LA.3',phone:'0312421788',address:'20 college street,MN 13114,USA',status:'80',storeId:'store3'}
        ]
      };

      if(!vm.data||vm.data ==='undifined'){
        vm.data = sample;
      }

      //datas
      vm.stores = vm.data.stores;
      vm.apts = vm.data.apts;

      //functions
      vm.selectedStore = selectedStore;
      vm.getApts = getApts;

      function selectedStore(storeId) {
        //do ajax call to get reservations
        getApts();
      }

      function getApts() {
        vm.apts = [
            [
              {
                startTime:'0900',
                endTime:'1000',
                aptId:'333'
              },
              {
                startTime:'1000',
                endTime:'1100',
                aptId:'333'
              },
              {
                startTime:'1300',
                endTime:'1400',
                aptId:'333'
              },
              {
                startTime:'1500',
                endTime:'1600',
                aptId:'333'
              }
            ],[
              {
                startTime:'0900',
                endTime:'1000',
                aptId:'333'
              },
              {
                startTime:'1000',
                endTime:'1100',
              },
              {
                startTime:'1100',
                endTime:'1200',
              },
              {
                startTime:'1300',
                endTime:'1430',
                aptId:'333'
              },
            ]
          ];
      }

    }

})();
