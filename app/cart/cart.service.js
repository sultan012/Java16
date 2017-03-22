angular.module("cart")
    .factory("cartService", ["$http", "$location", function($http, $location) {
        var cartProducts = [];
        return {

           createOrder   :   function (orderInfo) {
                return $http.post("http://nackbutik.azurewebsites.net/api/order/", orderInfo);
            },

            addToCart : function (cartProduct) {

                cartProducts.push(cartProduct);


            },
            getCartProducts : function () {
               return cartProducts;

            }
        };



    }]);