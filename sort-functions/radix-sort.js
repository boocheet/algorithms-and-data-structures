/**
 * Radix sort is a special sorting algorithm that works on lists of numbers
 * more digits means a bigger number
 */

 //need radix sort help functions 
 getDigit(num, i){
   //assume base 10 divide by hundred  floor then
   return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
  //returns the digit in num at the given place value


 } 