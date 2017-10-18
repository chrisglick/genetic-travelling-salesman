const equal = require('assert').deepEqual
const { generateOneDimensionalSamples, basic } = require('./geneticAlgo.js')

describe( 'geneticAlgo.js', () => {
  describe('generateOneDimensionalSamples()', () => {
      it('should return an array with X elements', () => {
        const result = generateOneDimensionalSamples(9)
        equal(result.length, 9)
      })
  })



  describe ('basicFun', () => {
    it('should return True', () => {
      const result = basic()
      equal(result, true)
    })
  })
})
