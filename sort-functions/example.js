//input string snake_case_is_this 
//output string  snakeCaseIsThis 

function snakeCase(str){

  str = str.split('_')
  temp_str = ''
  for(let i = 0; i < str.length; i++){
    // console.log(str[i], str[i][0],  str[i][0].toUpperCase())
    str[i][0] = str[i][0].toUpperCase()
    str[i] = str[i][0].toUpperCase() + str[i].slice(1)
  }
  // return temp_str;
  return str.join('');
}

console.log(snakeCase('came_in_onto_the_night'))
// console.log(snakeCase('hello')