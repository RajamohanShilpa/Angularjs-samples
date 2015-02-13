(function() {
    angular.module('angularProject.sampleProject.calendarApp', []);
    angular.module('angularProject.sampleProject.ngAnimation', []);
    angular.module('angularProject.sampleProject.bootstrapConfirmation', []);
    angular.module('angularProject.sampleProject', ['angularProject.sampleProject.calendarApp','angularProject.sampleProject.ngAnimation','angularProject.sampleProject.bootstrapConfirmation'])
        .controller('sampleProjectCtrl', function($scope) {
            $scope.test = "asdasd";
        });
})();
