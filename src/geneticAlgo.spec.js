const equal = require('assert').deepEqual
const notEqual = require('assert').notDeepEqual
const { generateOneDimensionalPopulation } = require('./createDataSets.js')
const { selectBetterSolutions, calcFitnessSolution, fillFitness, mutateSolution, getRandomIntNoDupe } = require('./geneticAlgo.js')

const getBasicPop = () => {
  const numCities = 9
  const numSolutions = 3
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
      equal(typeof result, 'object')
      equal(result[0].fitness, 4)
      equal(result.length, pop.length)
    })
  })

  describe('selectBetterSolutions()', () => {
    it('should return a list half as long', () => {
      const pop = getBasicPop()
      const popWithFitness = fillFitness(pop)
      const result = selectBetterSolutions(popWithFitness)
      equal(result.length, Math.ceil(pop.length/2) )
    })

    it('should only return the best (lowest) fitness scores', () => {
      const pop = [[1,5,2,4,3],[1,2,3,4,5],[1,2,3,4,5],[1,2,5,3,4]]
      const popWithFitness = fillFitness(pop)
      const result = selectBetterSolutions(popWithFitness)
      equal(result[0], [1,2,3,4,5])
      equal(result[1], [1,2,3,4,5])
    })
  })

  describe('mutateSolution()', () => {
    it('should not return the input unchanged', () => {
      const pop = getBasicPop()
      const solution = pop[0]
      const result = mutateSolution(solution)
      equal(typeof solution, typeof result)
      notEqual(result, solution)
    })
  })

  describe('getRandomNumberNoDupe()', () => {
    it('should not generate the same number if the num is banned', () => {
      const badSeries = [2,4]
      const startNum = 1
      const endNum = 4
      const result = getRandomIntNoDupe(startNum, endNum, badSeries)
      notEqual(2, result)
      notEqual(4, result)
    })

    it('should not infinitely recur', () => {
      const badSeries = [1,2]
      const startNum = 1
      const endNum = 2
      const result = getRandomIntNoDupe(startNum, endNum, badSeries)
      equal(result, undefined)
    })
  })
})
