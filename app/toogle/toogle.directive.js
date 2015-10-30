(function() {
    var app = angular.module('toggle-library');
    app.directive("toggle",function(){
        return {
            restrict: 'E',
            scope: {
                show: '=',
                id: '@'
            },
            //template: '<button class="btn btn-active" ng-click="hideElement()">{{buttonText}}</button>',
            controller: 'ToggleController',
            link: function (scope, element, attrs) {
                        if(scope.show === true) {
                            console.log("true");
                        } else {
                            console.log("false");
                            var id = scope.id;
                            //element.css({'display': 'none'});
                            //scope.buttonText = "Hide";
                            ///scope.show = "true";
                        }
                    }

        }
    });
})();