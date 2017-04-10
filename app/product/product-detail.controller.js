angular.module("product").controller("productDetailsController",
    ["$scope", "$routeParams","$location", "productService", "categoryService","loginService","cartService",
    function ($scope, $routeParams,$location,productService, categoryService, loginService,cartService) {
        $scope.product = productService.getProductById($routeParams.productId).then(function (response) {

            //console.log( response.data);

            $scope.product = response.data;
            productService.getProducts().then(function (response) {
                var products = response.data;

                categoryService.getCategory().then(function (response) {
                    var categories = response.data;


                    angular.forEach(products, function (product) {
                        angular.forEach(categories, function (category) {
                            if (product.categoryId == category.id) {
                                product.categoryName = category.name;
                            }
                        });
                    });
                    $scope.products = products;
                    $scope.categories = categories;
                });
            });




            $scope.addToCart = function (product) {
               // var cartProducts = [];

                var cartProduct = {
                    productId: product.id,
                    quantity : $scope.antal,
                    productImage: product.imageUrl,
                    productName: product.name,
                    productPris : product.price
                };

                //cartProducts.push(temp);
                cartService.addToCart(cartProduct);
                $location.path("/cart");

                };

            /*    var userId = loginService.getUserId();

                var order = {
                    customerId  :   userId.id,
                    products: cartProducts
                };
                console.log(order);
                cartService.createOrder(order).then(function (response) {
                    console.log("hej");
                })*/

        }, function (errorResponse) {
        });
    }]);