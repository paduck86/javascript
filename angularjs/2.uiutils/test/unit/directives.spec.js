'use strict';
describe('speces for directives', function() {
	beforeEach(module('myApp.directives'));
	var $scope;
	beforeEach(inject(function($rootScope) {
		$scope = $rootScope.$new();
		$scope.name = {first: "John", last: "Doe"};
	}));

	describe('hello-world', function() {
		it('should contain the proveded name', function() {
			inject(function($compile) {
				var element = $compile('<hello-world name="name"></hello-world>')($scope);
				$scope.$digest();

				expect(element.html()).toContain("John");
			});
		});
	});
});