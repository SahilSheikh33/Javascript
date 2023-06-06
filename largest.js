function findLargestNumber(array) {
    let largestNumber = array[0];
    
    for(let i = 1; i < array.length; i++) {
      if(array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }
    
    return largestNumber;
  }
  
  const myArray = [4, 9, 2, 6, 5, 8, 1, 7, 3];
  const largestNumber = findLargestNumber(myArray);
  
  console.log(largestNumber);
  