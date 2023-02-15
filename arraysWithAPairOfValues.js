// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// What the question is asking for:
// senior = 55 or older and a handicap of 7+
// List of pairs, person's age and a person's handcicap. An array of arrays.
// Output should be 'Open' or 'Senior'

function openOrSenior(data){
    if (data[0].includes(>=55) && (data[1].includes(>7)) {
        return 'Senior'
        }
    else {
      return 'Open'
    }
  }

// My attempt did not work because it was an incorrect way to use .includes()
// This map solution with two parameters is what I would have liked to have done. 

  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
// To further test, I came up with:
function areYouAllowedToBeHere(data){
    alert( data.map(([age, handicap, paid]) => (age > 17 && handicap > 0 && paid === true) ? 'Yes' : 'No'))
  }

areYouAllowedToBeHere([[45, 12, true],[55,21, false],[19, 2, true],[104, 20, false]])

