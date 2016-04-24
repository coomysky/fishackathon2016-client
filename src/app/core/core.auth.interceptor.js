(function() {

  'use strict';

  angular
    .module('app.core')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$q', '$injector', '$location', 'store', 'logger'];
  /* @ngInject */
  function authInterceptor($q, $injector, $location, store, logger) {
    var service = {
      responseError: responseError
    };

    return service;

    function responseError(response) {
      if (response.status === 401) {
        logger.error(response.data.error);
        response.data = {};
        $injector.get('$state').go('login');
        store.remove('jwt');
        return $q.reject(response.data);
      } else if (response.status === 403) {
        var path = $location.path();
        if (path !== '/login' &&
          path !== '/forgotPassword' &&
          path !== '/sign_up' &&
          path !== '/resendConfirmation' &&
          path !== '/resetPassword' &&
          path !== '/confirmation') {
          $injector.get('$state').go('error', { status: response.status }, { location: false });
          return $q.reject();
        } else {
          store.remove('jwt');
        }
      }
      return $q.reject(response);
    }
  }
})();