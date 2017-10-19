const equal = require('assert').deepEqual
const notEqual = require('assert').notDeepEqual
const { generateOneDimensionalPopulation } = require('./createDataSets.js')
const { formatDataForFitness } = require('./geneticAlgo.js')

const getBasicPop = () => {
  const numCities = 9
  const numSolutions = 2
  return generateOneDimensionalPopulation(numSolutions, numCities)
}

describe( 'geneticAlgo.js', () => {
  describe('formatDataForFitness()', () => {
    it('should take a 2-layer nested array and put it into a JSON package for easier work in the future', () => {
      const data = getBasicPop()
      const result = formatDataForFitness(data)
      console.log(typeof result)
      equal(typeof result, 'object')
    })

    it('should put each solution in a pop into a "solutions" member of the overall object', () => {
      const data = getBasicPop()
      const result = formatDataForFitness(data)
      equal('solutions' in result, true)
    })

    it('should assign each solution a 0 fitness', () => {
      const data = getBasicPop()
      const result = formatDataForFitness(data)
      equal(0, result.solutions[0].fitness)
    })
  })
})
