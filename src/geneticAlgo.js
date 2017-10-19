

const generateOneDimensionalSolution = (numCities) => {
  const solution = new Array(numCities)
  for (i = 1; i <= numCities; i++) {
    solution[i- 1] = i
  }
  const shuffledSolution = shuffleArray(solution)
  return shuffledSolution
}


const generateOneDimensionalPopulation = (numSolutions, numCities) => {
  const pop = new Array(numSolutions)
  pop.map(x => generateOneDimensionalSolution(numCities))
  console.log('wut,', pop)
  return pop
}

const basic = () => { return true }

// code not written by me
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


//


module.exports = {
  generateOneDimensionalSolution,
  generateOneDimensionalPopulation,
  basic,
}
