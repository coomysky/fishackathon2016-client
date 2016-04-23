(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainController', MainController);

    // MainController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainController($state,$scope,$rootScope,store, $http) {
          var vm = this;
          vm.user = store.get('user');;
          vm.search = search;
          vm.logout = logout;

          function search(){
            // Simple GET request example:
            $http({
              method: 'GET',
              url: '/vessel/mmsi/'+ vm.mmsi
            }).then(function successCallback(response) {
              $state.go('main.search',{mmsi:vm.mmsi});
            }, function errorCallback(response) {
              console.log(response);
            });
          }

          function logout(){
            store.remove('user');
            $state.go('home');
          }

        }

})();
