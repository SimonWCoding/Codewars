// // I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    let years = [0,0,0]
    if (humanYears <= 1){
      years = [1,15,15]
    }
    else if (humanYears <=2 ){
      years = [2,24,24]
    }
    else {
      years[0] = humanYears
      years[1] = 24 + (4 * (humanYears - 2))
      years[2] = 24 + (5 * (humanYears - 2))
    }
    return years
  }
  
