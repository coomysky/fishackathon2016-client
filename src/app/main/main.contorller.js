(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainController', MainController);

    // MainController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainController($state,$scope,$rootScope,store) {
          var vm = this;
          vm.user = store.get('user');;
          vm.search = search;
          vm.logout = logout;

          function search(){
            $state.go('main.search',{mmsi:vm.mmsi});
          }

          function logout(){
            store.remove('user');
            $state.go('home');
          }

        }

})();
