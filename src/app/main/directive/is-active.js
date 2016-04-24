(function() {
  'use strict';

  angular
    .module('app.main')
    .directive('isActive', isActive);

  isActive.$inject = ['$state'];

  function isActive($state) {
    return {
      link: function(scope, el, attrs) {
        if (!attrs.uiSref) {
          return;
        }

        updateClass($state.current, el, attrs);

        scope.$on('$stateChangeSuccess', function(event, toState) {
          updateClass(toState, el, attrs);
        });
      }
    };

    function updateClass(currentState, el, attrs) {
      var isActive = currentState.name === attrs.uiSref ||
        (_.startsWith(currentState.name, attrs.uiSref) &&
          currentState.name.split('.').length !== attrs.uiSref.split('.').length
        );
      if (isActive) {
        el.closest('li').addClass('-active');
      } else {
        el.closest('li').removeClass('-active');
      }
    }
  }
})();
