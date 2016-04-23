(function() {
  'use strict';

  angular
    .module('app.store')
    .directive('storeMainButton', storeMainButton);

  storeMainButton.$inject = [];
  /* @ngInject */
  function storeMainButton() {
    var directive = {
      replace: true,
      retrict: 'AE',
      templateUrl: 'app/store/view/main-button.html',
      scope:{
        data:'='
      },
      transclude: true,
      link: link
    };

    return directive;

    function link(scope, elem, attrs){

    }
  }



})();
