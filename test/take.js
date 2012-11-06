
// take

var take = require('take');

// assert

function assert (b, msg) {
  if (b) return;
  throw new Error(msg || 'This is broken..');
}

// test stuff

describe('take arr, n', function () {
  it('should take `n` from array', function () {
    assert(take(new Array(5), 2).length == 2);
  })

  it('should accept `fn`', function () {
    var ret = take(new Array(5), function (i, el) {
      return 1 == i;
    });

    assert(ret.length == 1);
  })

  it('should return new empty array when theres nothing to take', function () {
    var real = new Array(5);
    var ret = take(real, 0);
    assert(ret != real);
    assert(0 == ret.length)
    ret = take(real, function (i) {});
    assert(0 == ret.length);
    assert(ret != real);
  })


})
