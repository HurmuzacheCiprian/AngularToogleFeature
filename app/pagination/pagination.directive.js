/**
 * Created by cipriach on 05.11.2015.
 */
(function() {
    var app = angular.module('toggle-library');

    var slMocks = ['sl-invest','sl-test','sl-menu','sl-dashboard','sl-administration','sl-log','sl-logmerge'];
    var perPages = [3,5,10],
        originalArray;

    var controller = function($scope) {

        //initialisations
        $scope.currentPerPage = 3;
        $scope.currentPage;
        //end

        init();

        //TODO investigate at load, page 1 is not loaded by default;

        function init() {
            if($scope.perPages == undefined || $scope.perPages == null) {
                $scope.perPages = perPages;
                $scope.totalPages = getTotalPages($scope.currentPerPage);
                    $scope.currentPerPage=3;
                $scope.currentPage=1;
                $scope.total = slMocks.length;
                $scope.pages = getTotalPagesPerPage($scope.totalPages);
                originalArray = slMocks;
                $scope.Sls = getPaginatedElements(1,3,$scope.total);

            }
        }

        $scope.getTotalPagesByPerPageSelection = function(perPage) {
            $scope.currentPerPage = perPage;
            $scope.currentPage = 1;
            $scope.totalPages = getTotalPages(perPage);
            $scope.pages = getTotalPagesPerPage($scope.totalPages);
            $scope.Sls = getPaginatedElements(1,perPage,$scope.total);
        };

        $scope.loadPage = function (currentPage) {
            $scope.currentPage = currentPage;

            var total = $scope.total,
                perPage = $scope.currentPerPage,
                startIdx;
            $scope.Sls = getPaginatedElements(currentPage, $scope.currentPerPage, $scope.total);
        };

        function getPaginatedElements(currentPage, perPage, total) {
            var startIdx;

            startIdx = (currentPage-1) * perPage;

            var arr = createNewArray(originalArray);
            return arr.splice(startIdx,perPage);
        }

        function getTotalPagesPerPage(totalPages) {
            var count = 0,
                aux = totalPages,
                arr = [];

            do {
                arr.push(++count);
            } while(count < aux);

            return arr;
        }

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

        function createNewArray(arr) {
            return arr.slice();
        }

    };
    app.directive('paginate', function() {
        return {
            restrict: 'E',
            templateUrl:'pagination/pagination.html',
            controller:controller
        };
    });
})();