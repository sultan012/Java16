angular.module("login")
    .factory("loginService", ["$http","$location", function($http) {

        var isLoggedIn = false;
        var user;


        return {
            doLogin: function(username, password) {

                console.log(isLoggedIn);
                var login = {
                    email: username,
                    password: password
                };
                $http.post("http://nackbutik.azurewebsites.net/api/customer/login", login).then(function(response){
                    user = response.data;
                    if (user.email == username) {
                        isLoggedIn = true;
                        console.log(isLoggedIn);
                        console.log(user);

                    }

                });


            },
            doLogOut : function() {
                console.log("test");
                isLoggedIn = false;
                user = null;
                console.log(isLoggedIn);

            },

            getLoginValue: function() {
                return isLoggedIn;
            },
            getUserId: function() {
                return user.customerId;
            }
        };
    }]);