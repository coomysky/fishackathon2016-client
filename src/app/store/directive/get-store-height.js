(function() {
  'use strict';

  angular
    .module('app.store')
    .directive('getStoreHeight', getStoreHeight);

  getStoreHeight.$inject = [];
  /* @ngInject */
  function getStoreHeight($window) {
    var directive = {
      link: link
    };

    return directive;

    function link(scope, element, attrs){

      var currentScreenHeight = screen.availHeight;
      var getHeight = element.css('height');

     element.css('height',currentScreenHeight);
      // element.css('height',768);
    }
  }



})();
