(function() {
    'use strict';

    angular
        .module('wc')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
