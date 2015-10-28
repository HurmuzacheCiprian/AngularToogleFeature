/**
 * Created by roxana on 26.10.2015.
 */
(function() {
    var app = angular.module('toggle-library');
    app.directive("toggle",function(){
        return{
            restrict:'E',
            scope: {
                visibleOption:'@option'
            },
            controller:'ToggleController'
        }
    });
})();