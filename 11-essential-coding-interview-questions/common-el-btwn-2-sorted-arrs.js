/**
 * write a function that returns the common elements (as an array) between two sorted arrays of integers (ascending order).
 * Example: the common elements between [1, 3, 4, 6, 7, 9] and [1, 2, 4, 5, 9, 10] are [1, 4, 9]
 */

 const common_element = (arr1, arr2) =>{
    let result = []
    // have pointers that points to each element 
    let i = 0
    let j = 0
    // if the items are equal in both elements push the value to the result arr 
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i])
            i++
            j++
        } else if (arr1[i] > arr2[j]){
            // else increment pointer
            j++
        } else {
            i++
        }
    }
    return result
}
let a1 = [1, 3, 4, 6, 7, 9];
let a2 = [1, 2, 4, 5, 9, 10];
console.log(common_element(a1, a2))//  [1, 4, 9 ]
let b1 = [1, 2, 9, 10, 11, 12],
b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15];
console.log(common_element(b1, b2)) //[ 1, 2, 9, 10, 12 ]