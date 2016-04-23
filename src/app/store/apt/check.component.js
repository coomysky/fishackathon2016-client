(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeAptCheck', {
      templateUrl: 'app/store/view/apt-check.html',
      controller:storeAptCheckController,
      controllerAs:'vm',
      bindings:{
        data:'=',
        aptCancel:'&',
        aptConfirm:'&',
        aptCheckIn:'&',
        aptComplete:'&',
        onCreateAptSend:'&',
        onCreateAptOpen:'&',
        onCheckMail:'&'
      }
    });
    storeAptCheckController.$inject = ['$scope','store'];

    function storeAptCheckController($scope,store){
      var vm = this;
      var sample ={
        header:{
          home:'#',
          back:'#',
          fixed:true
        },
        apts:[
          {
            id:'123456',
            name:'Coomy',
            email:'coomysky@gmail.com',
            phone:'0811954095',
            date:'2016/04/10',
            weddingDate:'2017/05/10',
            serviceType:'try bridal wedding dress',
            lastName:'chang',
            callerId:'03-583-4133',
            status: {id:0, name:''},
            confirm:'Yes',
            createBy:'Ken',
            createDate:'2016/03/10',
            bridalAppointmentNote:'找粉色婚紗',
            appointmentNote:'他看了很多魚形款的婚紗',
            bridalNote:'不是很有耐心',
            showConfirm:true,
            clerk:{id:0,name:'coomy'}
          },
          {
            id:'123457',
            name:'Coomy',
            email:'coomysky@gmail.com',
            phone:'0811954095'
          },
          {
            id:'123458',
            name:'Coomy',
            email:'coomysky@gmail.com',
            phone:'0811954095'
          },
          {
            id:'123458',
            name:'Coomy',
            email:'coomysky@gmail.com',
            phone:'0811954095'
          }
        ],
        clerks:[
          {
            name:'ken',
            id:1
          },
          {
            name:'coomy',
            id:2
          },
          {
            name:'Brian',
            id:3
          },
        ],
        serviceType:['try wedding dress','選伴娘禮服'],
        findAptUrl:'//www.facebook.com/'
      };

      if(!vm.data||vm.data ==='undifined'){
        vm.data = sample;
      }

      $scope.$watch('vm.data', function(res) {
        vm.data = res;
        init();
      });

      init();

      function init(){
        vm.aptDisplayStatus = 0;
        vm.header = vm.data.header;
        vm.apts = vm.data.apts;
        vm.openApt = openApt;
        vm.closeDetail = closeDetail;
        vm.onCancel = onAptCancel;
        vm.onConfirm = onAptConfirm;
        vm.onCheckIn = onAptCheckIn;
        vm.clerks = vm.data.clerks;
        vm.finishApt = finishApt;
        vm.editAptNote = false;
        vm.editBridalAptNote = false;
        vm.editBridalNote = false;
        vm.completeApt = onAptComplete;
        vm.createAptInit = createAptInit();
        vm.header.storeIsLogin = store.get('shop');
      }

      function createAptInit(){
        var createAptInitData = {
          clerks: vm.data.clerks,
          serviceType: vm.data.serviceType,
          store:vm.header.storeIsLogin,
          findAptSite:vm.data.findAptUrl
        };

        return createAptInitData;

      }

      function finishApt(){
        vm.aptDisplayStatus = 2;
      }

      function openApt(apt){
        vm.hasFinishApt = _.has(apt, 'complete');
        vm.aptDisplayStatus = 1;
        vm.apt = apt;

      }
      function onAptCancel(apt){
        console.log('call apt cancel api');
        return vm.aptCancel({apt:apt});
      }

      function onAptConfirm(apt){
        console.log('call apt confirm api');
        return vm.aptConfirm({apt:apt});
      }

      function onAptCheckIn(clerk){
        console.log('call apt check in api');
        console.log('getClerk',clerk);
        vm.apt.status = {
          id:1,
          name:'Check In'
        };
        vm.apt.clerk = clerk;
        return vm.aptCheckIn({apt:vm.apt});
      }
      function onAptComplete(completeId){
        console.log('call apt complete api');
        vm.editAptNote = false;
        vm.editBridalAptNote = false;
        vm.editBridalNote = false;
        vm.hasFinishApt = true;
        vm.aptDisplayStatus = 1;
        vm.apt.complete = completeId;
        return vm.aptComplete({apt:vm.apt});
      }

      function closeDetail(){
        vm.aptDisplayStatus = 0;
      }





    }

})();
