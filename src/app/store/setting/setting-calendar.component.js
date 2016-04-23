(function() {
  'use strict';

  angular
    .module('app.store')
    .component('storeSettingCalendar', {
      templateUrl: 'app/store/setting/setting-calendar.html',
      controller:storeSettingCalendarController,
      controllerAs:'vm',
      bindings:{
        data:'=',
        getMonthEvents:'&'
      }
    });

    storeSettingCalendarController.$inject = ['ngDialog','moment','AptService'];
    function storeSettingCalendarController(ngDialog,moment,AptService){
      var vm = this;

      vm.toolEvents = vm.data;

      init();

      function init(){
        var promise = vm.getMonthEvents({res:'test'});

        promise.then(function(res) {
         console.log('getData',res);
         vm.events = res;
        });
      }






    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    vm.isCellOpen = true;
    vm.toolOpen = false;
    vm.closeToolTip = closeToolTip;
    vm.openToolTip = openToolTip;

    vm.eventDropped = eventDropped;
    vm.eventDeleted = eventDeleted;
    vm.eventClicked = eventClicked;

    function eventClicked(event){
      console.log('edit',event);
    }

    function eventDeleted(event){
      console.log('delete',event);
    }

    function eventDropped(event, start, end){
       if (_.find(vm.toolEvents, event)) {
         var newEvent={
           title:event.name,
           type: 'warning',
           startsAt: start,
           draggable: true,
           deletable: true,
           cssClass: 'custom-events'
         };
         vm.events.push(newEvent);
       }
      console.log(event);
     event.type = 'warning';
     event.startsAt = start;
     if (end) {
       event.endsAt = end;
     }
    }


    function openToolTip(){
      vm.toolOpen = true;
    }

    function closeToolTip(){
      vm.toolOpen = false;
    }


    }

})();
