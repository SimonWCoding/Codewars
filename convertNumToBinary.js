// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.

//Examples:(Input1, Input2 --> Output (explanation)))

//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// I wanted to have an empty string, then divide num by two each time. If there was a remainder, add a 1, otherwise add a 0.
// I would then reverse the string so it became the correct format for a binary number. 

 function addBinary(a,b) {
    let str = ''
    let num = a + b
    for (let i = num; i <= 0 ; i / 2) {
      if (num % 2 === 0) {
        str += '0'
      }
      else str += '1'
    }
  return str.split("").reverse().join("");
  }

// This solution showed me that a while loop would have been better. 
let sum = a + b, binary = '';

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  return binary;

 // And then there's the simplest method of all, something new for me to remember. 

  function addBinary(a,b){
    return (a+b).toString(2)
  }

  


  