'use strict';
 
(function() {
	angular.module('Navbar')
 
	.controller('NavbarController',
			['$scope', '$translate',
				function($scope, $translate) {
					$scope.changeLang = function changeLangFn(langKey) {
						$translate.use(langKey);
					};
					$scope.getCurrentLanguage = function () {
						return $translate.use();
						console.log($translate.use());
					};
			}]);
})();