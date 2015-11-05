/**
 * Created by cipriach on 05.11.2015.
 */
(function() {
    var app = angular.module('toggle-library');

    app.directive('paginate', function() {
        return {
            restrict: 'E',
            templateUrl:'pagination/pagination.html'
        };
    });

})();