'use strict';
 
(function() {
	angular.module('Login')

	.factory('LoginService',
			['$rootScope', '$cookieStore', '$timeout',
			function ($rootScope, $cookieStore, $timeout) {
					var service = {};
					service.Login = function (username, password, callback) {
							$timeout(function(){
									var response = { success: username !== '' && password !== ''};
									if(!response.success) {
											response.message = 'loginPg.Incorect';
									}
									callback(response);
							}, 100);

					};

					service.SetUser = function (username, password) {
							$rootScope.globals = {
									currentUser: {
											username: username
									}
							};
							$cookieStore.put('globals', $rootScope.globals);
					};

					service.ClearUser = function () {
							$rootScope.globals = {};
							$cookieStore.remove('globals');
					};

					return service;
			}]);
	})();