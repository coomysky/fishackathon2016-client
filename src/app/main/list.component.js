(function() {
  'use strict';

  angular.module('app.main')

    .component('list', {
      templateUrl: 'app/main/list.html',
      bindings:{
        data: '=',
      },
      controller:listController,
      controllerAs:'vm'
    });


    function listController(){
      var vm = this;

    }


})();
