describe('myApp', function(){

  beforeEach(module('myApp'));

  it('Make sure that the "Top Sellers in Books" title appears as the heading of the page.', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.title).toBe('Top Sellers in Books');
  }));

});
