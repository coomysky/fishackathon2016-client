(function() {

    'use strict';

    angular
        .module('app.main')
        .factory('Service', Service);

    Service.$inject = ['$http', 'logger', 'config', '$rootScope',
        '$location','store'
    ];

    /* @ngInject */
    function Service($http, logger, config, $rootScope, $location,store) {

        var service = {
          findMmsiData : findMmsiData,
          queryAllData:queryAllData

        };

                var exampleMmsiData = [
                  {
                    'name':'KHATIM',
                    'imo':9558323,
                    'mmsi':'565888000',
                    'country':'Flag of Singapore',
                    'image':'https://static.vesselfinder.net/ship-photo/9558323-565888000-1dcf55b7167e63002516a380914baad3/0',
                    reportStatus:'危險'
                  },
                  {
                    'name':'BAYAN',
                    'imo':9532317,
                    'mmsi':'565058000',
                    'country':'Flag of Singapore',
                    'image':'https://static.vesselfinder.net/ship-photo/9532317-565058000-fc977422779e154d953311c9a07874e7/0',
                    reportStatus:'等待救援'
                  },
                  {
                    'name':'GLORY LONGEVITY',
                    'imo':9207340,
                    'mmsi':'565158000',
                    'country':'Flag of Singapore',
                    'image':'https://static.vesselfinder.net/ship-photo/9207340-565158000-802ebf943f89700441799ed78feceff6/0'
                  },
                  {
                    'name':'POSH PAHLAWAN',
                    'imo':9565998,
                    'mmsi':'565906000',
                    'country':'Flag of Singapore',
                    'image':'https://static.vesselfinder.net/ship-photo/9565998-565906000-a3f374d452fb029f22d2b69423ef5623/0'
                  },
                  {
                    'name':'HUANGPU',
                    'imo':8107529,
                    'mmsi':'123456789',
                    'country':'Flag of Panama',
                    'image':'https://static.vesselfinder.net/ship-photo/8107529-0-1670c5063bd199d0281eddab425c9cbb/0',
                    reportStatus:'失竊'
                  },
                  {
                    'name':'MONTECRUZ',
                    'imo':7710276,
                    'mmsi':'352545000',
                    'country':'Flag of Panama',
                    'image':'https://static.vesselfinder.net/ship-photo/7710276-352545000-cf6132ea899a4486af262bd0918b1969/0'
                  },
                  {
                    'name':'SY MAGIC',
                    'imo':0,
                    'mmsi':'235018912',
                    'country':'Flag of United Kingdom',
                    'image':'https://static.vesselfinder.net/ship-photo/0-235018912-d6c013359da2bbdd3e77bddd123c5830/0'
                  },
                  {
                    'name':'MERRY FISHER',
                    'imo':8519318,
                    'mmsi':'249566000',
                    'country':'Flag of Malta',
                    'image':'https://static.vesselfinder.net/ship-photo/8519318-249566000-885de2b08e9a1c0186d5a59e73ec33db/0',
                    reportStatus:'失蹤'
                  },
                  {
                    'name':'MELTEMI',
                    'imo':9172442,
                    'mmsi':'529642000',
                    'country':'Flag of Kiribati',
                    'image':'https://static.vesselfinder.net/ship-photo/9172442-529642000-e8a98b1d12f9c62fef4aa19b74f47b2d/0'
                  },
                  {
                    'name':'MIRAGE II',
                    'imo':0,
                    'mmsi':'518442000',
                    'country':'Flag of Cook Islands',
                    'image':'https://static.vesselfinder.net/ship-photo/0-518442000-7e3dcfe049a4e358e293988cb88530b7/0'
                  }
                ];

        return service;

        function findMmsiData(id){
          return _.find(exampleMmsiData,{'mmsi':id});

        }

        function queryAllData(){
          return exampleMmsiData;
        }

    }
})();
