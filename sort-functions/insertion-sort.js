/**
 * INSERTION SORT PSUEDO CODE
 * pick the second element in the arr
 * compare the second element with the prev item swap if necessary
 * continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. left side) to place the element in the correct place.
 * repeat until array is sorted
 */ 

 function insertionSort(arr){
   let curVal;
  for (let i = 1; i < arr.length; i++){
    curVal = arr[i];
    let j = i - 1; 
    //have to use var for j because of scope
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--){
      arr[j + 1] = arr[j] 
    }
    arr[j + 1] = curVal
  }
  return arr;
 }

 console.log(insertionSort([2, 1, 9, 76, 4]))