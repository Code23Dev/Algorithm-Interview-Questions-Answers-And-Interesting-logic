//Question=>Find the missing number in a given integer array of 1 to 100

/*
  My approach to this solution was to realize that the numbers are
   in consecutive order. Since the array is sorted, we can solve 
   this in one pass by looking ahead using arr[i] + 1 and comparing 
   that to arr[i + 1]. If arr[i + 1] is not equal to arr[i] + 1, it 
   means that arr[i] + 1 is the missing number.
*/

let arr = [1,2,3,4,5,6,7,8,10]

const findMissingNum = (arr) => {
    for (let i=0; i<arr.length-1; i++){
     if(arr[i]+1 !=arr[i+1]){
         return arr[i] + 1
     }
    }
  return false
}

console.log(findMissingNum(arr));