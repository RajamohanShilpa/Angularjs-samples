(function() {
    angular.module('angularProject.routing').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main', {
                url:'/main',
                templateUrl: '/angularjs-project/main/main.html'
            })
            .state('main.angular-tutorial',{
                url:'/angular-tutorial',
                templateUrl:'/angularjs-project/main/angularjs/angular-tutorial.html'
            })
           /* .state('main.angular-tutorial.abind',{
                url:'/abind',
                templateUrl:'/angularjs-project/main/angularjs/angular-bind/angular-bind.html'
            })*/
            .state('sampleProject', {
                url:'/sample-project',
                templateUrl: '/angularjs-project/sample-project/sample-project.html'
            });
            /*.state('karma',{
               url:'/karma',
               templateUrl:'/angularjs-project/karma-testing/karma-testing.html'
            });*/
    });
})();
