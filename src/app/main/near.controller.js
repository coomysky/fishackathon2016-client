(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainNearController', MainNearController);

    // MainNearController.$inject = ['config', 'logger', '$scope', '$timeout'];
    /* @ngInject */
    function MainNearController($state,$scope,$rootScope,NgTableParams,Service) {
          var vm = this;

          vm.map = { center: { latitude: 23, longitude: 123 }, zoom: 8 };
          vm.markers = [{
            id: 'first',
            stuff: 'stuff',
            last_known_location: {
                latitude: 37.3694868,
                longitude: -5.9803275
            }
          }];
          vm.nearList = Service.getNearBoat();

          vm.tableParams = new NgTableParams({
             page: 1,
             count: 10
           }, {
             filterDelay: 0,
             data: vm.nearList
           });



        }

})();
