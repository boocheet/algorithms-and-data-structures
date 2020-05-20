/**
 * Selection sort
 * places small values into sorted position 
 * pseudo code
 * store the first element as the smalledst value you've seen so far.
 * compare this item to the next item in the array until you find a smaller number.
 * if a smaller number is found, designate that smalle number to be the new "minimum" and continue until the end of the array.
 * if the minimum is not the value (index) you initially began with, swap the two values. 
 * repeat this with the next element until the array is sorted. 
 *  
 */

 function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++){
     let min = i;
     for (let j = i + 1; j < arr.length; j++){
       if (arr[j] < arr[min]){
         min = j;
        }
      }
      //swap inside of the if statement to 
      const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
      }
      if (i !== min) swap(arr, i, min) // es6 way below is es5 way
    //   if (i !== min){
    //    let temp = arr[i];
    //    arr[i] = arr[min];
    //    arr[min] = temp;
    // }
   }
   return arr;
 }

 console.log(selectionSort([5, 6, 4, 3, 2, 1]));

