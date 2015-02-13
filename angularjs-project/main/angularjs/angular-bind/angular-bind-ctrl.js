(function(){
    angular.module('angularProject.main.angular-tutorial.angular-bind')
    .controller('angularProject.main.angular-tutorial.angularBindCtrl',function($scope){
        $scope.content="Returns a function which calls function fn bound to self (self becomes the this for fn). You can supply optional args that are prebound to the function. This feature is also known as partial application, as distinguished from function currying.";
    });
})();
