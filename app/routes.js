'use strict';
angular
    .module('comoayudarmx')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home/home.html',
                controller: 'HomeController'
            })
            .when('/contactos',{
                templateUrl: 'app/views/contacts/contacts.html',
                controller: 'ContactsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
