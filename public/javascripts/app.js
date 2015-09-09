var app = angular.module("app", ['gajus.swing']);
app.factory('People', ['$http', function($http){
          return $http.get('/users/people');
        }])
app.controller('card-stack-playground', ['$scope', 'People', function ($scope, People) {
        People.success(function(data){
            $scope.cards = data;
          }).error(function(data, status){
            console.log(data, status);
            $scope.cards = [];
        });

        $scope.controlClick = function(clickType){
            contact = getContact();
            contact.classList.add(clickType);
            $scope.removeCard(contact);    

        };

        $scope.throwout = function (eventName, eventObject) {
            contact = getContact();
            $scope.removeCard(contact);
        };

        $scope.throwoutright = function (eventName, eventObject) {
            //add logic for "It's a Match"
            console.log('throwoutright', eventObject);
        };

        //TODO: Add logic to handle LIKE and NOPE
        $scope.dragstart = function (eventName, eventObject) {
        };

        $scope.dragmove = function (eventName, eventObject) {
        };

        $scope.dragend = function (eventName, eventObject) {
        };
        $scope.removeCard = function (contact) {
            contact.classList.add('removed-card');
            setTimeout(function(){contact.classList.remove('contact');},500);
        }
        function getContact(){
            contactList = document.getElementsByClassName('contact');
            index = contactList.length-1;
            contact = contactList[index];
            return contact;
        }
    }]);
