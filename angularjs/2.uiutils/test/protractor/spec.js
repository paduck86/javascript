describe('hello world app', function() {
	it('should have a title', function() {
		browser.get('http://localhost:8000/src/');
		expect(browser.getTitle()).toEqual('Hello Wolrd');
	});
});