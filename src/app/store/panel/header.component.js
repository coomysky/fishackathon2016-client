(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeHeader', {
      templateUrl: 'app/store/view/header.html',
      controller:storeHeaderController,
      controllerAs:'vm',
      bindings:{
        data:'='
      }
    });

    function storeHeaderController(store){
      var vm = this;
      vm.logout = logout;

      function logout(){
        store.remove('shop');
        vm.data.storeIsLogin = false;
      }
    }

})();
