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
            },


            emptyCart : function () {
               cartProducts=[];
            },


            getTotaltCost : function () {

               var total = 0;
               for ( var i = 0; i < cartProducts.length ; i++){
                   total += cartProducts[i].productPris * cartProducts[i].quantity;

               }
                return total;
            }
        };
    }]);