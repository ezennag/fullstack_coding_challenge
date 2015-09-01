angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope) {
        $scope.cards = [
            {name: 'clubs', imgUrl: 'http://assets.vg247.com/current//2015/02/kanye-west.jpg'},
            {name: 'diamonds', imgUrl: 'http://assets.rollingstone.com/assets/2013/article/how-kanye-west-came-to-harvard-20131119/13521/_original/1035x672-111913-kanye-west-1800-1384897712.jpg'},
            {name: 'hearts', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMWsK6DBprHLVk899jRzIxtqa3qRLR9AiQti9c3WHqRFsZqb5'},
            {name: 'spades', imgUrl: 'http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg'}
        ];

        $scope.throwout = function (eventName, eventObject) {
            eventObject.target.classList.add('removed-card');
        };

        $scope.throwoutleft = function (eventName, eventObject) {
            console.log('throwoutleft', eventObject); 
        };

        $scope.throwoutright = function (eventName, eventObject) {
            console.log('throwoutright', eventObject);
        };

        $scope.throwin = function (eventName, eventObject) {
            console.log('throwin', eventObject);
        };

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

        $scope.dragmove = function (eventName, eventObject) {
            console.log('dragmove', eventObject);
        };

        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
        $scope.remove = function (index) {
            console.log('removing')
            $scope.cards.splice(index, 1);
            console.log($scope.cards);
        }
    });
