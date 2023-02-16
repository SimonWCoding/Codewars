//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//For example, when the input is green, output should be yellow.

// There are three possible answers. If the input if 'green', it should return 'yellow, 'yellow' should return 'red' and then 'red' should return 'green'.

function updateLight(current) {
    if (current === 'green') {
      return 'yellow'
    }
    else if (current === 'yellow'){
      return 'red'
    }
    else return 'green'
  }

// For this challange, I don't think any of the other solutions are clearer than this code, so it would remain the best option for me. 