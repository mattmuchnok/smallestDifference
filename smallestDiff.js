const arrayOne = [10, 20, 14, 16, 18]
const arrayTwo = [30, 23, 54, 33, 96]


function smallestDifference(arr1, arr2){
  if(arr1.length === 0 || arr2.length === 0){ return -1; }
  let result = Number.MAX_SAFE_INTEGER; // (2^53) - 1
  
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(Math.abs(arr1[i] - arr2[j]) < result){
        result = Math.abs(arr1[i] - arr2[j]);
      }
    }    
  }
  return result;
}


console.log(smallestDifference(arrayOne, arrayTwo))