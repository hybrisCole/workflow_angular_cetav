'use strict';

describe('Service: usuarioFactory', function () {

  // load the service's module
  beforeEach(module('cetavLavanderiaApp'));

  // instantiate service
  var usuarioFactory;
  beforeEach(inject(function(_usuarioFactory_) {
    usuarioFactory = _usuarioFactory_;
  }));

  it('should do something', function () {
    expect(!!usuarioFactory).toBe(true);
  });

});
