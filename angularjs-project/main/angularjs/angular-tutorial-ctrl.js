(function() {
    angular.module('angularProject.main.angular-tutorial.angular-bind', []);
    angular.module('angularProject.main.angular-tutorial.angular-bootstrap', []);
    angular.module('angularProject.main.angular-tutorial', ['angularProject.main.angular-tutorial.angular-bind', 'angularProject.main.angular-tutorial.angular-bootstrap'])
        .controller('angularTutorialCtrl', function($scope) {
            $scope.header = "Welcome to angular tutorial page";
        })
        .directive('scrollSpy', function() {
            return {
                restrict: "A",
                link: function($scope, $element, $attrs) {
                    $element.find('a').bind('click', function(event) {
                        var _this = this;
                        var _li = $(this).closest("li");
                        $(_li).parent().find("li").removeClass('active');
                        $(_li).addClass('active');
                        debugger;
                        $(window).animate({scrollTop: 1000}, 1000, 'linear');
                        event.preventDefault();
                    });
                }
            };
        });
})();
