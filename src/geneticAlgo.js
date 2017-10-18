

const generateOneDimensionalSample = (numSamples) => {
  const sample = new Array(numSamples)
  for (i = 1; i <= numSamples; i++) {
    sample[i- 1] = i
  }
  console.log(sample)
  return sample
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
  generateOneDimensionalSample,
  basic,
}
