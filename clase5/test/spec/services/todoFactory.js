'use strict';

describe('Service: todoFactory', function () {

  // load the service's module
  beforeEach(module('ToDoRESTApp'));

  // instantiate service
  var todoFactory;
  beforeEach(inject(function (_todoFactory_) {
    todoFactory = _todoFactory_;
  }));

  it('should do something', function () {
    expect(!!todoFactory).toBe(true);
  });

});
