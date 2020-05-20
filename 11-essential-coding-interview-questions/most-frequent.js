/**
 * find the most frequently occurring item in an array 
 * ex.: the most frequent item in [1, 2, 3, 4, 2, 3, 5, 4, 3, 2, 2, 1]
 * most frequent is 2
 */

 const most_frequent = (arr) => {
    let most_dups = new Map()
    let max_count = -1; 
    let max_key = null; 
    for (let num of arr){
        most_dups.has(num) ? most_dups.set(num, most_dups.get(num) + 1) : most_dups.set(num, 1)
        if(most_dups.get(num) > max_count){
            max_count = most_dups.get(num)
            max_key = num 
        }
    }
    return max_key; 
 }

 console.log(most_frequent([1, 2, 3, 4, 2, 3, 5, 4, 3, 2, 2, 1]))