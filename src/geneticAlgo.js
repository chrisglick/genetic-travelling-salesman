const { generateOneDimensionalPopulation } = require('./createDataSets.js')

const calcFitnessSolution = (data) => {
  fitness = 0
  for (i = 1; i < data.length; i++) {
    fitness += Math.abs(data[i] - data[i-1])
  }
  return fitness
}

const fillFitness = (pop) => {
  return pop.map(steps => {
     return { 'fitness': calcFitnessSolution(steps), 'steps': steps}
  })
}

const selectBetterSolutions = (popWithFitness) => {
  const sortedPop = popWithFitness.sort( (a, b) => a.fitness - b.fitness)
  const bestHalfPop = sortedPop.slice(0, Math.ceil(sortedPop.length/2))
  const bestSteps = bestHalfPop.map(x => x.steps)
  return bestSteps
}

module.exports = {
  fillFitness,
  calcFitnessSolution,
  selectBetterSolutions,
}
