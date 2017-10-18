const equal = require('assert').deepEqual
const notEqual = require('assert').notDeepEqual
const { generateOneDimensionalSample, basic } = require('./geneticAlgo.js')

describe( 'geneticAlgo.js', () => {
  describe('generateOneDimensionalSamples()', () => {
      it('should return an array with X elements', () => {
        const result = generateOneDimensionalSample(9)
        equal(result.length, 9)
      })

      it('should return an array populated with numbers from 1 to num samples + 1', () => {
        const result = generateOneDimensionalSample(9)
        const notFound = -1
        const firstNumLocation = result.indexOf(1)
        notEqual(firstNumLocation, notFound)
        const lastNumLocation = result.indexOf(9)
        notEqual(lastNumLocation, notFound)

        const shouldNotGenerate = result.indexOf(10)
        equal(shouldNotGenerate, notFound)
      })
  })



  describe ('basicFun', () => {
    it('should return True', () => {
      const result = basic()
      equal(result, true)
    })
  })
})
