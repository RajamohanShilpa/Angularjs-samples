(function() {
    angular.module('angularProject.main.angular-tutorial.angular-bootstrap')
        .controller('angularProject.main.angular-tutorial.angularBootstrapCtrl', function($scope) {
            $scope.content = "Note that Protractor based end-to-end tests cannot use this function to bootstrap manually. They must use ngApp.Angular will detect if it has been loaded into the browser more than once and only allow the first loaded script to be bootstrapped and will report a warning to the browser console for each of the subsequent scripts. This prevents strange results in applications, where otherwise multiple instances of Angular try to work on the DOM.";
            $scope.SampleCode='<!doctype html><html><body><div ng-controller="WelcomeController">{{greeting}}</div><script src="angular.js"></script><script>var app = angular.module("demo", []).controller("WelcomeController", function($scope) {$scope.greeting = "Welcome!";});angular.bootstrap(document, ["demo"]);</script></body></html';
        });
})();
