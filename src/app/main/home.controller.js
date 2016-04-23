(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('HomeController', HomeController);

    // HomeController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function HomeController($state,$scope,$rootScope,store) {
          var vm = this;
          vm.login = login;

          function login(){
            store.set('user', vm.account);
            $state.go('main');
          }


        }

})();
