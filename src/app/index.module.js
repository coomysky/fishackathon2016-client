(function() {
  'use strict';

  angular.module('ams',['app.core','app.cs','app.main','app.store'])
    .service('pathService', PathService)
    .value('$routerRootComponent', 'app')
    .component('app', {
      templateUrl:'app/root.html',
      controller:indexController,
      controllerAs:'vm',
      $routeConfig: [
        {path: '/cs/main' ,name:'Cs', component:'csMain'},
        {path: '/store/main' ,name:'Store-Main', component:'storeMain'},
        {path: '/store/apt/check' ,name:'Store-Apt-Check', component:'storeAptCheck'},
        {path: '/store/setting' ,name:'Store-Setting', component:'storeSetting'}
      ]
    });


  function indexController(pathService,$q){

    var vm = this;
    vm.test = test;

    function test(res){
        console.log(res);
        var deferred = $q.defer();

        setTimeout(function() {
          var events = [
            {
              title: 'Draggable event',
              type: 'info',
              startsAt: moment().startOf('month').toDate(),
              draggable: true,
              deletable: true,
              cssClass: 'custom-events'
            },
            {
              title: 'Non-draggable event',
              type: 'info',
              startsAt: moment().startOf('month').toDate(),
              draggable: true,
              deletable: true,
              cssClass: 'custom-events'
            },
            {
              title: 'Draggable event',
              type: 'info',
              startsAt: '2016-04-23',
              draggable: true,
              deletable: true,
              cssClass: 'custom-events'
            },
            {
              title: 'Non-draggable event',
              type: 'info',
              startsAt: '2016-04-25',
              draggable: true,
              deletable: true,
              cssClass: 'custom-events'
            }

          ]
          deferred.resolve(events);
        }, 1000);

        return deferred.promise;


    }

    pathService.getPaths().then(function(paths) {
        vm.paths = paths;
      });

  }

  function PathService($q){
    var paths = ['Cs','Store-Main','Store-Apt-Check','Store-Setting'];
    var pathPromise = $q.when(paths);

   this.getPaths = function() {
     return pathPromise;
   };

  }


})();
