'use strict';

(function() {
	angular.module('Login', []);
	angular.module('Home', []);
	angular.module('Navbar', []);

	angular.module('Authentication', [
			'Login',
			'Home',
			'Navbar',
			'ngRoute',
			'ngCookies',
			'pascalprecht.translate'
	])

	.config(['$translateProvider', function ($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: 'translations/',
			suffix: '.json'
		});

		$translateProvider.useLocalStorage();
		$translateProvider.preferredLanguage('ru');
	}])

	.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
					.when('/', {
							controller: 'LoginController',
							templateUrl: 'modules/login/views/login.html'
					})

					.when('/home', {
							controller: 'HomeController',
							templateUrl: 'modules/home/views/home.html'
					})

					.otherwise({ redirectTo: '/' });
	}])

	.run(['$rootScope', '$location', '$cookieStore',
			function ($rootScope, $location, $cookieStore) {
					$rootScope.globals = $cookieStore.get('globals') || {};

					$rootScope.$on('$locationChangeStart', function (event, next, current) {
							if ($location.path() !== '/' && !$rootScope.globals.currentUser) {
									$location.path('/');
							}
					});
			}]);
})();