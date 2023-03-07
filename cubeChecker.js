
// pseudocode
// Check for invalid input
// Calculate the expected volume for a cube
// Check if the given volume matches the expected volume for a cube

function cubeChecker(volume, side) {
    
    if (volume <= 0 || side <= 0) {
      return false;
    }
  
    const cubeVolume = side ** 3;
  
    if (volume === cubeVolume) {
      return true;
    } else {
      return false;
    }
  }
  

  // Test cases
console.log(cubeChecker(27, 3));   
console.log(cubeChecker(64, 4)); 
console.log(cubeChecker(100, 5)); 
console.log(cubeChecker(0, 5)); 
console.log(cubeChecker(-125, -5)); 