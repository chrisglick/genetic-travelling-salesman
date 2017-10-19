const equal = require('assert').deepEqual
const notEqual = require('assert').notDeepEqual
const { generateOneDimensionalSolution,
  generateOneDimensionalPopulation, basic } = require('./geneticAlgo.js')

describe( 'geneticAlgo.js', () => {
  describe('generateOneDimensionalSolution()', () => {
    it('should return an array with X elements (cities) which together are a possible solution', () => {
      const numCities = 9
      const result = generateOneDimensionalSolution(numCities)
      equal(result.length, numCities)
    })

    it('should return an array populated with numbers from 1 to num Cities + 1', () => {
      const numCities = 9
      const result = generateOneDimensionalSolution(numCities)
      const firstCity = 1
      const lastCity = 9
      const notValidCity = 10
      const notFound = -1
      const firstCityLocation = result.indexOf(firstCity)
      notEqual(firstCityLocation, notFound)
      const lastCityLocation = result.indexOf(lastCity)
      notEqual(lastCityLocation, notFound)

      const shouldNotGenerate = result.indexOf(notValidCity)
      equal(shouldNotGenerate, notFound)
    })

    it('should return a different shuffled array each run', () => {
      const numCities = 9
      const result1 = generateOneDimensionalSolution(numCities)
      const result2 = generateOneDimensionalSolution(numCities)
      notEqual(result1, result2)
    })
  })

  describe('generateOneDimensionalPopulation()', () => {
    it('should return an array with X elements', () => {
      const numSolutions = 20
      const numCities = 9
      const result = generateOneDimensionalPopulation(numSolutions, numCities)
      equal(result.length, numSolutions)
    })

    it('should have unique solutions in the population', () => {
      const numSolutions = 2
      const numCities = 9
      const result = generateOneDimensionalPopulation(numSolutions, numCities)
      notEqual(result[0], result[1])
    })
  })



  describe ('basicFun', () => {
    it('should return True', () => {
      const result = basic()
      equal(result, true)
    })
  })
})
