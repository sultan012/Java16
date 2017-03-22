angular.module("app")
    .config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "app/product/product-list.template.html",
                    controller: "productListController"
                })

                .when("/product/:productId", {
                    templateUrl: "app/product/product-detail.template.html",
                    controller: "productDetailsController"
                })
                .when("/new-user", {
                templateUrl: "app/create-new-user/newuser.template.html",
                controller: "customerCreateController"
            })

                .when("/login", {
                    templateUrl: "app/login/login.template.html",
                    controller: "loginController"
                })

                .when("/cart", {
                    templateUrl: "app/cart/cart.template.html",
                    controller: "cartController"
                })


                .otherwise("/");
            $locationProvider.html5Mode(true);
        }]);