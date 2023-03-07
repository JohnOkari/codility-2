
// psudeocode

//Convert the input string into an array of integers
//Check for non-numeric elements
//Check for missing elements in the sequence
//If all elements are present and in order, return //

//code

function sequenceChecker(inputString) {
    const inputArray = inputString.split(' ').map(num => parseInt(num));
  
    if (inputArray.some(num => isNaN(num))) {
      return 1;
    }
  
    let expectedNum = 1;
    for (const num of inputArray.sort((a, b) => a - b)) {
      if (num === expectedNum) {
        expectedNum++;
      } else if (num > expectedNum) {
        return expectedNum;
      }
    }
  
    return 0;
  }

  
console.log(sequenceChecker("1 2 3 4"));  
console.log(sequenceChecker("1 2 4 3"));  
console.log(sequenceChecker("2 1 3 a"));  
console.log(sequenceChecker("1 3 2 5"));  
console.log(sequenceChecker("1 5"));      
