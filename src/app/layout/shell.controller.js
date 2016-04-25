(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$timeout', 'logger', 'config','randomString','$window','$location','$rootScope'

    ];
    /* @ngInject */
    function ShellController($timeout, logger, config,randomString,$window,$location,$rootScope) {
        var vm = this;
        vm.showSplash = true;
        vm.appTitle = config.appTitle;

        activate();
        function activate() {
            logger.info(' Quick Start ' + config.appTitle, null);
            hideSplash();




        }
        vm.appTitle = config.appTitle;



        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();
