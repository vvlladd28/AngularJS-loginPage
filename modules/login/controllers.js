'use strict';
 
(function() {
	angular.module('Login')

	.controller('LoginController',
			['$scope', '$rootScope', '$location', 'LoginService',
			function ($scope, $rootScope, $location, LoginService) {
					LoginService.ClearUser();
					$scope.login = function () {
							$scope.dataLoading = true;
							LoginService.Login($scope.username, $scope.password, function(response) {
									if(response.success) {
											LoginService.SetUser($scope.username, $scope.password);
											$location.path('/home');
									} else {
											$scope.error = response.message;
											$scope.dataLoading = false;
									}
							});
					};
			}]);
	})();