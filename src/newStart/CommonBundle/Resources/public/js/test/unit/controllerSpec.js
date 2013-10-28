describe('Havefyve controllers', function() {
 
  describe('ProductListCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('../api/v1/product/show').
          respond([{name: 'Nexus S', img_url:''}, {name: 'Motorola DROID', img_url:''}]);
 
      scope = $rootScope.$new();
      ctrl = $controller(ProductListCtrl, {$scope: scope});
    }));
 
    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.products).toBeUndefined();
      $httpBackend.flush();
     
      expect(scope.products).toEqual([{name: 'Nexus S', img_url:''},
                                   {name: 'Motorola DROID', img_url:''}]);
    });

    it('should redirect /me/ to /me/#/', function() {
      browser().navigateTo('http://192.168.1.11:8888/newStart/web/app_dev.php/me/');
      expect(browser().location().url()).toBe('/');
    });


  });
});
