'use strict';
angular
  .module('comoayudarmx')
  .controller('ContactsController', function ($scope) {
    $scope.cards = Contacts;
  });