// #1
// Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

// Given
// var string = '88Hello3World';

// var addNumbers = function(string){
	
// 	var purgatory = [];

// 	var result = 0;

// 	var splitString = string.split('');

// 	splitString.forEach(function(element){

// 		if(!isNaN(element) && element !== ' '){
// 			purgatory.push(element);
// 		}
// 		else{
// 			result += parseInt(purgatory.join('') || 0, 10);
// 			purgatory = [];
// 		}

// 	})

// 	return result += parseInt(purgatory.join('') || 0, 10);

// }

// Return 91 -> 88 + 3



// #2
// Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.


var longestWord = function(string){

	var purgatory = ['A', 1];

	var splitString = string.split(' ');

	for(var i = 0; i < splitString.length; i++){

		if(splitString[i].length > purgatory[1]){

			purgatory = [];
			purgatory.push(splitString[i]);
			purgatory.push(splitString[i].length);

		}

	}
	return purgatory[0];
}