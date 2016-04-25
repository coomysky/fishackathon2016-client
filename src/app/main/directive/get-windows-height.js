(function() {
  'use strict';

  angular
    .module('app.main')
    .directive('getWindowsHeight', getWindowsHeight);

  getWindowsHeight.$inject = [];
  /* @ngInject */
  function getWindowsHeight($window) {
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
