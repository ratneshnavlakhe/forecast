angular.module("root", [])
    .controller("index", function($scope,$http) {
		$scope.myData = {};
		var city = "";
		
		$scope.myData.doClick = function(city){
			var responsePromise = $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&cnt=14&APPID=f9627b997af0300dc4576323cd3882f6");
			responsePromise.success(function (data,status,headers,config){
				$scope.myData.fromServer = data;
			});
			responsePromise.error(function (data, status, headers, config){
				alert('Request Cannot be completed! Please try again.');
			});
		}
    });