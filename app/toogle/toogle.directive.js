(function () {
    var app = angular.module('toggle-library');

    app.directive("toggle", ['$compile', function ($compile) {
        return {
            restrict: 'E',
            scope: {
                show: '=',
                id: '@'
            },
            controller: function ($scope, $element) {
                $scope.$watch(function () {
                    //if (isLoading) {
                    //    $element.addClass('loading');
                    //    $element.attr('disabled', '');
                    //} else {
                    //    $element.removeClass('loading');
                    //    $element.removeAttr('disabled');
                    //}
                    $element.attr('ng-show', $scope.show);
                    if($scope.show == false) {
                        $element.addClass('ng-hide');
                    }

                });
                //$compile($element)($scope);
                $scope.enableToggles = true;
            }
        }
    }]);
})();