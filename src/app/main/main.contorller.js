(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainController', MainController);

    // MainController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainController($state,$scope,$rootScope) {
          var vm = this;
          vm.search = search;

          function search(){
            $state.go('main.search',{mmsi:vm.mmsi});
          }

          

        }

})();
