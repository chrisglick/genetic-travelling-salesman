const equal = require('assert').deepEqual
const { basic } = require('./geneticAlgo.js')

describe( 'geneticAlgo.js', function() {
  describe ('basicFun', function() {
    it('should return True', function() {
      const result = basic()
      equal(result, true)
    })
  })
})
