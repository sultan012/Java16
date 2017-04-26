angular.module("login").
controller("loginController", ["$scope", "loginService","$location" ,function ($scope, loginService,$location) {


    $scope.doLogin = function (username, password){
        loginService.doLogin(username,password);
        $scope.failedLogin = true;
        $location.path("/");
    };


}]);
