(function() {
  'use strict';

  angular
    .module('app.cs')
    .component('csApts', {
      templateUrl: 'app/cs/view/apts.html',
      controller:csAptsController,
      controllerAs:'vm',
      bindings:{
        data:'='
      }
    });

    csAptsController.$inject = ['$scope'];
    function csAptsController(){
      var vm = this;
    }

})();
