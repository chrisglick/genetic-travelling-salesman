const { generateOneDimensionalPopulation } = require('./createDataSets.js')

const formatDataForFitness = (data) => {
  const formattedData = {}
  formattedData.solutions = data.map(x => formatOneSolution(x))
  return formattedData
}

const formatOneSolution = (solution) => {
  const formattedSolution = { 'fitness': 0, solution}
  return formattedSolution
}


module.exports = {
  formatDataForFitness,
  formatOneSolution,
}
