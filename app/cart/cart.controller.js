angular.module("cart")
    .controller("cartController", ["$scope", "$location", "$routeParams", "cartService","loginService",//login?
        function($scope, $location, $routeParams, cartService,loginService){

                   $scope.cartInfo=  cartService.getCartProducts();
                   $scope.isLoggedin=false;
                   $scope.total = cartService.getTotaltCost();
                   console.log(cartService.getTotaltCost());
                   $scope.$watch(function () {
                       return loginService.getLoginValue()},
                       function (newValue, oldValue) {
                       $scope.isLoggedin = newValue;
                   });

                $scope.buy = function () {

                   if (!loginService.getLoginValue()) {
                        $location.path("/login");
                    } else {
                        var orderProducts = [];
                        var userId = loginService.getUserId();
                        var products = cartService.getCartProducts();

                        console.log(products);

                        for (var i = 0; i < products.length; i++) {
                            orderProducts.push({productId: products[i].productId, quantity: products[i].quantity});

                        }

                        console.log(orderProducts);
                        var order = {
                            customerId: userId,
                            products: orderProducts
                        };

                        console.log(order);
                            cartService.createOrder(order).then(function (response) {
                                cartService.emptyCart();
                                $location.path("/thanks");
                                console.log("Inloggad");
                            });

                    }
                }




        }]);