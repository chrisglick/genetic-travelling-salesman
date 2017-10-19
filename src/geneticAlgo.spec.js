const equal = require('assert').deepEqual
const notEqual = require('assert').notDeepEqual
const { generateOneDimensionalPopulation } = require('./createDataSets.js')
const { formatOneSolution, calcFitnessSolution, fillFitness } = require('./geneticAlgo.js')

const getBasicPop = () => {
  const numCities = 9
  const numSolutions = 2
  return generateOneDimensionalPopulation(numSolutions, numCities)
}

describe( 'geneticAlgo.js', () => {
  describe('calcFitnessSolution()', () => {
    it('should calculate fitness based on distance between Cities (6,2) is 4, (1, 5) is 4', () => {
      const data = [1,2,3,4]
      const result = calcFitnessSolution(data)
      equal(result, 3)

      const data2 = [6,2]
      const result2 = calcFitnessSolution(data2)
      equal(result2, 4)

      const data3 = [1,5]
      const result3 = calcFitnessSolution(data3)
      equal(result3, 4)

      const data4 = [6,5,4,3,2,1]
      const result4 = calcFitnessSolution(data4)
      equal(result4, 5)

      const data5 = [1,5,2,7,3]
      const result5 = calcFitnessSolution(data5)
      equal(result5, 16)
    })
  })

  describe('fillFiness()', () => {
    it('should take a population of solutions and fill-in the correct fitnesses', () => {
      const pop = getBasicPop()
      pop[0] = [1,2,3,4,5]
      const result = fillFitness(pop)
      console.log(JSON.stringify(pop))
      equal(typeof result, 'object')


    })
  })


  describe.skip('formatDataForFitness()', () => {
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

  describe.skip('formatOneSolution()', () => {
    it('should take the data array and add associate metadata in a JSON obj', () => {
      const data = getBasicPop()
      const oneSolution = data[0]
      const result = formatOneSolution(oneSolution)
      equal(0, result.fitness)
    })
  })
})
