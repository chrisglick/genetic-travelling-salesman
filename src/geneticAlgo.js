//const { generateOneDimensionalPopulation } = require('./createDataSets.js')

const calcFitnessSolution = data => {
  var fitness = 0
  for (var i = 1; i < data.length; i++) {
    fitness += Math.abs(data[i] - data[i - 1])
  }
  return fitness
}

const fillFitness = pop => {
  return pop.map(steps => {
    return { fitness: calcFitnessSolution(steps), steps: steps }
  })
}

const selectBetterSolutions = popWithFitness => {
  const sortedPop = popWithFitness.sort((a, b) => a.fitness - b.fitness)
  const bestHalfPop = sortedPop.slice(0, Math.ceil(sortedPop.length / 2))
  const bestSteps = bestHalfPop.map(x => x.steps)
  return bestSteps
}

const mutateSolution = solution => {
  const mutateFromIndex = getRandomIntNoDupe(0, solution.length)
  const mutateToIndex = getRandomIntNoDupe(0, solution.length, mutateFromIndex)
  const mutated = [].concat(solution)
  mutated[mutateToIndex] = solution[mutateFromIndex]
  mutated[mutateFromIndex] = solution[mutateToIndex]
  return mutated
}

const crossoverSolution = (solution1, solution2) => {
  return [solution2, solution1]
}

const getRandomIntNoDupe = (
  startNum,
  endNum,
  bannedList = [],
  generation = 0
) => {
  const randomNum = Math.random()
  const expandedNum = Math.floor(randomNum * (endNum - startNum + 1) + startNum)

  var bannedNums = []
  if (typeof bannedList === 'number') {
    bannedNums = [bannedList]
  } else {
    bannedNums = bannedList
  }

  if (bannedNums.indexOf(expandedNum) === -1) return expandedNum
  if (generation > 20) return undefined
  return getRandomIntNoDupe(startNum, endNum, bannedList, ++generation)
}

module.exports = {
  fillFitness,
  calcFitnessSolution,
  selectBetterSolutions,
  mutateSolution,
  getRandomIntNoDupe,
  crossoverSolution,
}
