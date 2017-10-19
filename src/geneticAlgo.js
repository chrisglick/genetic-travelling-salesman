const { generateOneDimensionalSolution,
  generateOneDimensionalPopulation } = require('./createDataSets.js')

const formatDataForFitness = (data) => {
  console.log(data)
  const formattedData = {}
  formattedData.solutions = data
  console.log(formattedData)
  return formattedData
}

module.exports = {
  formatDataForFitness,
}
