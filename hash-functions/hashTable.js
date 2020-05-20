/**
 * dealing with collisions 
 * separate chaining
 * at each index in our array we store values using a more sophisticated data structure 
 * i.e. an array or linked list this allows us to store multiple key-val pairs at the same index;
 * linear probing 
 * we search through the array to find the next empty slot
 * 
 * Set/Get methods
 * set
 * 1. accepts a key and a val
 * 2. hashes the key
 * 3. stores the key-val pair in the hash table arr via separate chaining
 * 
 * get
 * 1. accepts a key
 * 2. hashes the key
 * 3. retrieves the key-val pair in the hash table 
 * 4. if the key isnt found, returns undefined 
 * 
 * keys/values
 * Keys
 * Loops through the hash table array and returns an array of keys in the table
 * 
 * Values
 * Loops through the hash table array and returns an array of values in the table

 */


function hash(key) {
  let total = 0; 
  //prime numbers is helpful in spreading out the keys more uniformly // decreases collisions
  let primeNum = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    //map 'a' to 1, 'b' to 2, 'c' to 3, etc.
    // subtracting 96 gives us the index of the alphabel
    let val = char.charCodeAt(0) - 96;
    let keymap = new Array(10)
    total = (total * primeNum + val) % keymap.length;
    // console.log('val', val, 'total', total)
  }
  return Math.abs(total);
}

console.log('square', hash('square'));// 0
console.log('triangle', hash('triangle'));// 9
console.log('trapezoid', hash('trapezoid'));// 36
console.log('pentagon', hash('pentagon'));// 6
console.log('oval', hash('oval'));// 7
console.log('circle', hash('circle'));// 27
console.log('diamond', hash('diamond'));// 12
console.log('heart', hash('heart'));// 48
console.log('hexagon', hash('hexagon'));// 17
console.log('parallelogram', hash('parallelograms'));// 0
console.log('rectangle', hash('rectangle'));// 24
// console.log(hash('pink', 10));// 0
// console.log(hash('orangered', 10));// 7
// console.log(('cyan', 10));// 10
// class HashTable {
//   constructor(size= 53){
//     this.keymap = new Array(size);
//   }

//   set(key, val){
//     this.hash()
//   }

//   get(key){

//   }
// }

// class HashTable {
//   constructor(size=53){
//     this.keyMap = new Array(size);
//   }
//   hash(key) {
//     let total = 0;
//     const PRIMENUM = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let val = char.charCodeAt(0) - 96
//       total = (total * PRIMENUM + val) % this.keyMap.length;
//     }
//     return total;
//   }
//   set(key,val){
//     let index = this.hash(key);
//     if(!this.keyMap[index]){
//       this.keyMap[index] = [];
//     }
//     this.keyMap[index].push([key, val]);
//   }
//   get(key){
//     let index = this.hash(key);
//     if(this.keyMap[index]){
//       for(let i = 0; i < this.keyMap[index].length; i++){
//         if(this.keyMap[index][i][0] === key) {
//           return this.keyMap[index][i][1]
//         }
//       }
//     }
//     return undefined;
//   }

//   keys(){
//     let keysArr = [];
//     for(let i = 0; i < this.keyMap.length; i++){
//       if(this.keyMap[i]){
//         for(let j = 0; j < this.keyMap[i].length; j++){
//      // checks for duplicates // keys are stored at index 0
//           if(!keysArr.includes(this.keyMap[i][j][0])){
//             keysArr.push(this.keyMap[i][j][0])
//           }
//         }
//       }
//     }
//     return keysArr;
//   }

//   vals(){
//     let valsArr = [];
//     for(let i = 0; i < this.keyMap.length; i++){
//       if(this.keyMap[i]){
//         for(let j = 0; j < this.keyMap[i].length; j++){
//      // checks for duplicates // values are stored at index 1
//           if(!valsArr.includes(this.keyMap[i][j][1])){
//             valsArr.push(this.keyMap[i][j][1])
//           }
//         }
//       }
//     }
//     return valsArr;
//   }
 
 
// }
