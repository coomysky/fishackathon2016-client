(function() {

'use strict';
  angular
    .module('app.store')
    .factory('AptService', AptService);

    AptService.$inject = ['moment'];

    function AptService(moment) {

      var service = {
        getCreateAptTimesList:getCreateAptTimesList,
        translateToDrogEvent:translateToDrogEvent

      };


      return service;

      function getCreateAptTimesList(aptData){
        var settings = [];

        var aptDataList =_.reduce(aptData, function(setting, nextSetting) {
          return setting.concat(nextSetting);
        });

        var aptTimeSettings = getTimeSettingList(aptDataList);

        return aptTimeSettings;


      }

      function translateToDrogEvent(settings){
        var events = [];
        _.map(settings, function(res){
          var event =  {
            title: res.name,
            type: 'info',
            startsAt: moment().startOf('month').toDate(),
            draggable: true
          };
          events.push(event);
        });

        return events;

      }

      function formatTime(time){
        var time = _.split(time,'');
        return time[0]+time[1]+':'+time[2]+time[3];
      }

      function getTimeSettingList(settings){
        var setting = [];

       _.map(settings,function(obj){
          var start = formatTime(obj.startTime);
          var end = formatTime(obj.endTime);
          var timeInterval = _.join([start,end],'-');

          var findTimeIntervalSetting = _.find(setting, { 'timeInterval': timeInterval});

          if(findTimeIntervalSetting){
            if(!_.isEmpty(obj.aptId)){
              findTimeIntervalSetting.aptIds.push(obj.aptId);
            }
            findTimeIntervalSetting.count = findTimeIntervalSetting.count +1;
          }else{
            var settingList = {
              timeInterval:_.join([start,end],'-'),
              aptIds:[obj.aptId],
              count:1
            };
            setting.push(settingList);
          }

        });
        return setting;
      }

    }



})();
