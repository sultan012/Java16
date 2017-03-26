angular.module("cart")
    .controller("cartController", ["$scope", "$location", "$routeParams", "cartService","loginService",//login?
        function($scope, $location, $routeParams, cartService,loginService){

                   $scope.cartInfo=  cartService.getCartProducts();

                $scope.buy = function () {
                    var isLogIn = loginService.getLoginValue;
                    console.log(isLogIn);
                    console.log(!isLogIn);
                    var isLogIn1 = !isLogIn;
                    console.log(isLogIn1);
                    console.log(!isLogIn1);
                    console.log(!loginService.getLoginValue);
                    console.log(loginService.getLoginValue);
               /*    if (!isLogIn1) {
                        $location.path("/login");
                    } else */{
                        var orderProducts = [];
                        var userId = loginService.getUserId();

                        var products = cartService.getCartProducts();

                        console.log(products);

                        for (var i = 0; i < products.length; i++) {
                            orderProducts.push({productId: products[i].productId, quantity: products[i].quantity});

                        }

                        console.log(orderProducts)
                        var order = {
                            customerId: userId,
                            products: orderProducts
                        };

                        console.log(order);
                            cartService.createOrder(order).then(function (response) {
                                $location.path("/");
                                console.log("Inloggad");

                            })
                       // $scope.cartInfo=  null;
                    }
                }




        }]);