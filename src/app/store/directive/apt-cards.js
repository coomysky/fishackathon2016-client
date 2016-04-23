(function() {
  'use strict';

  angular
    .module('app.store')
    .directive('aptCards', aptCards);

  aptCards.$inject = [];
  /* @ngInject */
  function aptCards() {
    var directive = {
      replace: true,
      retrict: 'AE',
      templateUrl: 'app/store/view/apt-cards.html',
      scope:{
        apts:'=',
        onConfirm:'&',
        onCancel:'&',
        onOpen:'&'
      },
      link: link
    };

    return directive;

    function link(scope, elem, attrs){
        scope.onOpenApt= scope.onOpen;
        scope.isFinishedApt =isFinishedApt;

        function isFinishedApt(apt){
          return _.has(apt, 'complete');
        }
    }
  }



})();
