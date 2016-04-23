(function() {
  'use strict';

  angular
    .module('app.main')
    .directive('ellipseTag', ellipseTag);

  ellipseTag.$inject = [];
  /* @ngInject */
  function ellipseTag() {
    var directive = {
      replace: true,
      retrict: 'AE',
      templateUrl: 'app/main/directive/ellipse-tag.html',
      scope:{
        data:'=',
        removeTag:'&',
        clickTag:'&',
        showCross:'<',
        showDetail:'<'
      },
      transclude: true,
      link: link
    };

    return directive;

    function link(scope, elem, attrs){

    }
  }



})();
