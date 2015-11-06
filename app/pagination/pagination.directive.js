/**
 * Created by cipriach on 05.11.2015.
 */
(function() {
    var app = angular.module('toggle-library');

    var slMocks = ['sl-invest','sl-test','sl-menu','sl-dashboard','sl-administration','sl-log','sl-logmerge'];
    var perPages = [3,5,10];

    var controller = function($scope) {

        //initialisations
        $scope.perPages = perPages;
        $scope.total = slMocks.length;
        $scope.currentPerPage = 3;
        $scope.currentPage; //TODO
        $scope.totalPages = getTotalPages($scope.currentPerPage);
        $scope.Sls = slMocks;
        //end

        $scope.getTotalPagesByPerPageSelection = function(perPage) {
            $scope.currentPerPage = perPage;
            $scope.totalPages = getTotalPages(perPage);

            var count = 0,
                aux = $scope.totalPages,
                arr = [];

                do {
                    arr.push(++count);
                } while(count < aux);
            $scope.pages = arr;
            console.log('DEBUG ',arr);
        };

        $scope.loadPage = function () {

        };

        /**
         * Get total pages based on total result list and perPage selection
         * @param perPage
         * @returns {*}
         */
        function getTotalPages(perPage) {
            var totalPages;
            if(perPage >= slMocks.length) {
                return 1;
            }
            totalPages = Math.floor(slMocks.length / perPage);
            if(Math.floor(slMocks.length % perPage) == 0){
                return totalPages;
            } else {
                return totalPages + 1;
            }
        }

        $scope.loadFirstPage = function() {
          //TODO
        };

        function loadPerPage(perPage,totalPages) {

        };

        $scope.loadLastPage = function() {
            //TODO
        };
    };

    app.directive('paginate', function() {
        return {
            restrict: 'E',
            templateUrl:'pagination/pagination.html',
            controller:controller
        };
    });

})();