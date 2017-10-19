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

module.exports = {
  fillFitness,
  calcFitnessSolution,
}
