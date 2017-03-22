angular.module("order")
.factory("orderService", ["$http", function($http) {
	var order = [];

	return {
		
		
		createOrder: function(order) {
		//	console.log(order);
			return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
		}
	};
}])