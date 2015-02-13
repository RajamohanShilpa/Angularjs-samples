(function() {
    angular.module('angularProject.sampleProject.bootstrapConfirmation')
        .controller('bootstrapConfirmationCtrl', function($scope) {
            $scope.namespace = "bootstrapConf";
            $scope[$scope.namespace] = {};
            namespace = $scope[$scope.namespace];
            namespace.confirmYes = function() {
                debugger;
                alert('yes');
            };
            namespace.confirmNo = function() {
                alert('No');
            };
        }).directive("ngConfirmbox", function() {
            return {
                restrict: "AE",
                scope: {
                    confPlacement: "@confPlacement",
                    confTitle: "@confTitle",
                    confOkLabel: "@confOkLabel",
                    confCancelLabel: "@confCancelLabel",
                    confOkFunc: "=confOkFunc",
                    confCancelFunc: "=confCancelFunc"
                },
                link: function($scope, $element, $attrs) {
                    debugger;
                    $element.confirmation({
                        placement: $scope.confPlacement,
                        title: $scope.confTitle,
                        btnOkLabel: $scope.confOkLabel,
                        btnCancelLabel: $scope.confCancelLabel,
                        onConfirm: $scope.confOkFunc,
                        onCancel: $scope.confCancelFunc
                    });
                }
            }
        });
})();
