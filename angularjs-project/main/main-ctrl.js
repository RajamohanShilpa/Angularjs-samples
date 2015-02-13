(function() {
    angular.module('angularProject.main.angular-tutorial', []);
    angular.module('angularProject.main', ['angularProject.main.angular-tutorial'])
        .controller('mainCtrl', function($scope) {
            $scope.mainTest = "Main Page";
        });
})();
