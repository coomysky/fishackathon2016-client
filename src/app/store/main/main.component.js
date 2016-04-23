(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeMain', {
      templateUrl: 'app/store/view/main.html',
      controller:storeMainController,
      controllerAs:'vm',
      bindings:{
        data:'='
      }
    });

    storeMainController.$inject = ['$scope','store'];
    function storeMainController($scope,store){
      var vm = this;



      $scope.$watch('vm.data', function(res) {
            vm.links = res.links;
            vm.header = res.header;
            vm.stores = res.stores;
      });

      var sample ={
        links:[
          {name:'Find Apt',url:'//www.facebook.com/'},
          {name:'Find Apt',url:'#'},
          {name:'Find Apt',url:'#'},
          {name:'Find Apt',url:'#'},
          {name:'Find Apt',url:'#'},
          {name:'Find Apt',url:'#'},
          {name:'Find Apt',url:'#'},
          {name:'Find Apt',url:'#'}
        ],
        header:{
          home:'//www.facebook.com',
          fixed:true
        },
        stores:[
          {name:'LA.1',id:1},
          {name:'LA.2',id:2},
          {name:'LA.3',id:3}
        ]
      };

      if(!vm.data||vm.data ==='undifined'){
        vm.data = sample;
      }

      vm.links = vm.data.links;
      vm.header = vm.data.header;
      vm.stores = vm.data.stores;
      vm.storeLogin = storeLogin;
      vm.header.storeIsLogin = store.get('shop');

      function storeLogin(shop){
          store.set('shop',{id:shop.id,name:shop.name});
          vm.header.storeIsLogin = store.get('shop');

      }

    }

})();
