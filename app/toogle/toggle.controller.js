/**
 * Created by roxana on 26.10.2015.
 */
(function() {
    var app = angular.module('toggle-library');
    var ToggleController = function($scope) {
        if($scope.visibleOption == 'ON') {
            //console.log(angular.element.find('toggle').addAttr('ng-hide=true'));

        } else {
            console.log('hide');
        }
    };

    app.controller('ToggleController',['$scope',ToggleController]);
})();