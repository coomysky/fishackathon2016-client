(function() {
    'use strict';

    angular.module('app.core')
        .constant('config', {
            appErrorPrefix: '[WC Error] ',
            appTitle: 'M.D.A.',
            locale: 'en_US',
            debugMode: true,
            tablePageCount: 50,
            bootstrapDateFormat: 'yyyy/mm/dd hh:ii:ss',
            bootstrapSDateFormat: 'yyyy/mm/dd hh:ii',
            dateFormat: 'yyyy/MM/dd hh:mm',
            domain: 'www.wedchat.com',
            apiUrl: 'http://0f4f1cb7.ngrok.io/'
            // apiUrl: 'http://192.168.56.101/wc/server/action/',
            // apiUrl: 'http://www.wedchat.com/server/action/',
            // apiUrl:'http://localhost/WC/server/action/',
            // versionUrl:'www.wedchat.com'
        });
}());
