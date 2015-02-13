(function() {

    angular.module('angularProject.routing', []);
    angular.module('angularProject.main', []);
    angular.module('angularProject.sampleProject', []);


    angular.module('angularProject', ['ui.router','angularProject.routing', 'angularProject.main', 'angularProject.sampleProject'])
        .controller('angularProjectCtrl', function($scope, $location) {});
})();
