const reverseString = function(word) {
	let len = word.length - 1; 
	word = word.split("");
	let newWord = "";

	for(len; len >= 0; len--){
	newWord += word[len];
}
	return(newWord);
};

// Do not edit below this line
module.exports = reverseString;
