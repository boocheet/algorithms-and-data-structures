/**
 * 
 * Quick sort designates an element as the pivot 
 * then rearranges elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
 */ 

 function pivotHelper(arr, left, right){
  //  First find the "pivot" element in the array. selecting the middle element gives the best performance
  let pivot = arr[Math.floor((right + left) / 2)]; // middle element
  // left pointer is the first index in the array
  // right pointer is the last index in the array
  while(left <= right){
  //  Compare the element at the left index and if it is less than the pivot element, then move the left pointer to the right 
    while(arr[left] < pivot){
      // (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
      left++;
    }
    //  Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left 
    while(arr[right] > pivot){
      // (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
      right--;
    }
    //  If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.
    //  Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers.
    if(left <= right){
      //Es6 swap two elements
      [arr[right], arr[left]] = [arr[left], arr[right]]; 
      //  Increment the left pointer 
      left++;
      //decrement the right pointer.
      right--;
    }
  }
  return left;
}

function quickSort(items, left = 0, right = items.length -1){
  let index; 
  if (items.length > 1){
    index = pivotHelper(items, left, right);
    if(left < index -1){
      quickSort(items, left, index - 1);
    }
    if(index < right){
      quickSort(items, index, right)
    }
  }
  return items;
}

let items = [8, 5, 1, 12, 4, 3, 2, 1, 4, 10, 9, 16, 13, 7]
console.log(quickSort(items, 0, items.length -1))