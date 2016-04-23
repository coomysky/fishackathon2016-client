(function() {
  'use strict';

  angular
    .module('app.cs')
    .component('csShop', {
      templateUrl: 'app/cs/view/shop.html',
      controller:csShopController,
      controllerAs:'vm',
      bindings:{
        data:'=',
        selectedStore: '&'
      }
    });

    csShopController.$inject = ['$scope', 'liquidFillGauge','$timeout'];
    function csShopController($scope, liquidFillGauge, $timeout){
      var vm = this;
      vm.storeClick = storeClick;
      vm.storeInfo;
      //Refactor: use timeout to make sure view is loaded.
      init();

      function init() {
        loadStorePie(); //draw store pie
        $timeout(function() { //init store data
          var initStore = _.head(vm.data);
          storeClick(initStore.storeId);
          vm.selectedStore({storeId: initStore.storeId});
        } , 0); //array's first element.

      }

      function loadStorePie() {
        $timeout(function() {
          _(vm.data).forEach(function(value) {
              liquidFillGauge.loadLiquidFillGauge(value.storeId, value.status, null, value.name);
          });
        }, 0)
      }

      function storeClick(storeId) {
        vm.storeInfo = _.filter(vm.data, { 'storeId': storeId })[0]; //array's first element
        vm.selectedStore({storeId: vm.storeInfo.storeId});
      }

    }
})();
