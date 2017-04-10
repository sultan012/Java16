
angular.module("product")
    .controller("productController", ["$scope","$location",  "categoryService", "productService","loginService","cartService",
        function ($scope, $location, categoryService,productService, loginService, cartService) {



            $scope.loggedIn = false;




            productService.getProducts().then(function (response) {
                $scope.product = response.data;
            });

            categoryService.getCategory().then(function (response) {
                $scope.category = response.data;
            });



            $scope.productSelected = function (product) {
                $location.path("/product-detail/" + product.id);
            };


            $scope.$watch(function() {return loginService.getLoginValue()},
                function(newValue) {
                    $scope.loggedIn = newValue;
                });

            $scope.logOut = function () {
                console.log("test");
                loginService.doLogOut();
                cartService.emptyCart();

            }

        }]);