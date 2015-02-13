(function() {
    angular.module('angularProject.routing')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('sampleProject.calendar', {
                    url:"/calendar",
                    templateUrl: "/angularjs-project/sample-project/calendar/calendar.html"
                })
                 .state('sampleProject.ngAnimation', {
                    url:"/ngAnimation",
                    templateUrl: "/angularjs-project/sample-project/ngAnimation/ngAnimation.html"
                }).state('sampleProject.bootstrapConfirmationBox', {
                    url:"/bootstrapConfirmationBox",
                    templateUrl: "/angularjs-project/sample-project/bootstrapConfirmation/bootstrapConfirmation.html"
                });
        });
})();
