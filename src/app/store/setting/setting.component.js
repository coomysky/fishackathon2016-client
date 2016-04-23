(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeSetting', {
      templateUrl: 'app/store/setting/setting.html',
      controller:storeSettingController,
      controllerAs:'vm',
      bindings:{
        data:'=',
        onDeleteScheduleElement:'&',
        getMonthEvents:'&'
      }
    });

    storeSettingController.$inject = ['$scope','store','ngDialog'];
    function storeSettingController($scope,store,ngDialog){
      var vm = this;
      $scope.$watch('vm.data', function(res) {
            vm.data = res;
            init();
      });

      var sample ={
        header:{
          home:'//www.facebook.com',
          back:'#',
          fixed:true
        },
        settings:[
          {
            name:'M-M',
            id:1,
            settings:[
              {
                startTime:'0900',
                endTime:'1000'
              },
              {
                startTime:'1001',
                endTime:'1100'
              },
              {
                startTime:'1101',
                endTime:'1200'
              },
              {
                startTime:'1301',
                endTime:'1400'
              },
              {
                startTime:'1401',
                endTime:'1500'
              },
              {
                startTime:'1501',
                endTime:'1600'
              }
            ]
          },
          {
            name:'M-S',
            id:2,
            settings:[
              {
                startTime:'0900',
                endTime:'1000'
              },
              {
                startTime:'1001',
                endTime:'1100'
              },
              {
                startTime:'1101',
                endTime:'1200'
              },
              {
                startTime:'1301',
                endTime:'1400'
              },
              {
                startTime:'1401',
                endTime:'1500'
              },
              {
                startTime:'1501',
                endTime:'1600'
              }
            ]
          },
          {
            name:'S-M',
            id:3,
            settings:[
              {
                startTime:'0900',
                endTime:'1000'
              },
              {
                startTime:'1001',
                endTime:'1100'
              },
              {
                startTime:'1101',
                endTime:'1200'
              },
              {
                startTime:'1301',
                endTime:'1400'
              },
              {
                startTime:'1401',
                endTime:'1500'
              },
              {
                startTime:'1501',
                endTime:'1600'
              }
            ]
          }
        ],
        MF:[
          {
            name:'S-M',
            id:3
          },
          {
            name:'M-M',
            id:1
          }
        ],
        SS:[
          {
            name:'M-S',
            id:2
          },
          {
            name:'M-M',
            id:1
          },
          {
            name:'M-M',
            id:1
          }
        ]


      };

      if(!vm.data||vm.data ==='undifined'){
        vm.data = sample;
      }

      init();

      function init(){
        vm.header = vm.data.header;
        vm.header.storeIsLogin = store.get('shop');
        vm.settings = vm.data.settings;
        vm.mfDefaultSetting = [{owner:'mf1'},{owner:'mf2'},{owner:'mf3'}];
        vm.ssDefaultSetting = [{owner:'ss1'},{owner:'ss2'},{owner:'ss3'}];
        vm.MF = _.merge(vm.data.MF,vm.mfDefaultSetting);
        vm.SS = _.merge(vm.data.SS,vm.ssDefaultSetting);
      }

      vm.removeElement = removeElement;
      vm.clickElement = clickElement;
      vm.setMfSetting = setMfSetting;
      vm.setSSSetting = setSSSetting;
      vm.deleteSSDefaultSetting = deleteSSDefaultSetting;
      vm.deleteMFDefaultSetting = deleteMFDefaultSetting;
      vm.deleteBaseSetting = deleteBaseSetting;
      vm.editBaseSetting = editBaseSetting;

      function deleteBaseSetting(data,evn){
        if(!_.isEmpty(data.owner)){
          return;
        }
        ngDialog.open({
            template: 'app/store/setting/confirm-delete.html',
            controller: ['$scope', function($scope) {
              $scope.elementName = data.name;
              $scope.delete = function(){
                _.remove(vm.SS, {id:data.id});
                _.remove(vm.MF, {id:data.id});
                _.remove(vm.settings, {id:data.id});
                vm.onDeleteScheduleElement({res:data.id});
                ngDialog.close();

              };
              $scope.cancel = function(){
                ngDialog.close();
              };
            }]
        });

      }

      function editBaseSetting(data,evn){
        console.log('sss',data);
      }

      function deleteSSDefaultSetting(data,evn){
        if(_.isEmpty(data.owner)){
          return;
        }
         _.remove(vm.SS, data);

      }
      function deleteMFDefaultSetting(data,evn){
        if(_.isEmpty(data.owner)){
          return;
        }
         _.remove(vm.MF, data);
      }

      function setSSSetting(data,evn,SSindex){
        vm.SS[SSindex] = _.cloneDeep(data);
        vm.SS[SSindex].owner = 'ss'+SSindex;

      }

      function setMfSetting(data,evn,MFindex){
        vm.MF[MFindex] = _.cloneDeep(data);
        vm.MF[MFindex].owner = 'mf'+MFindex;
      }

      function removeElement(tag){
        console.log(tag);
      }

      function clickElement(tag){

        console.log('add',tag);
      }



    }

})();
