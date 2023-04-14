// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let countString = []
    let countNumber = []
    for (let i = 0; i <= x.length; i++){
      if (typeof x[i] == 'string'){
        countString.push(x[i])
      }
      if (typeof x[i] == 'number'){
        countNumber.push(x[i])
      }
    }
    let number = countString.map((ele)=> +ele)
    
  let count1 = countNumber.reduce((a,b)=> a-b,0)
  let count2 = number.reduce((a,b)=> a-b,0)
  
  return count2 - count1
}  