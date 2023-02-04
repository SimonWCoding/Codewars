// Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
// FIND SHORTEST WORD IN AN ARRAY

// My failed attempt:
function findShort(s){
    let arr = s.split(' ');
   }

// Best solution:
function findShort(s){
	let arr = s.split(' ');
	let smallest = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

// Conclusion:

function findShort(s){
    let arr = s.split(' ');
    let arrSort = arr.sort((a,b) => a.length - b.length)
     console.log(arrSort[0].length)
   }

   // After being puzzled after splitting the string, I realised I should have sorted the string by length and I think I could have easily
   // chosen it by index Number. 

