'use strict';
 
(function(){
	angular.module('Navbar')

	.directive('navBar', function() {
		return {
			restrict: 'EA',
			templateUrl: 'modules/navbar/views/navbar.html'
		}
	});
})();