/**
 * Bubble sort is not efficient o(n^2) the larger values will bubble to the top
 */

 function bubbleSort(arr){
   //start looping from with a var called i the end of the array towards the beginning 
   for(let i = 0; i < arr.length; i++){
     //start an inner loop with  a var called j from the beginning until i -1
     for (let j = 0; j < arr.length; j++){
       //if arr[j] is greagter than arr[j+1] swap those two values 
       if (arr[j] > arr [j + 1]){
         [arr[j], arr[j +1]] = [arr[j + 1], arr[j]]
       }
     }
   }
   //return the sorted array
   return arr
 }


 console.log(bubbleSort([37, 45, 88, -3, 8, 12, 29]))