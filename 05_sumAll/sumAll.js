const sumAll = function(a, b) {
	if (a < 0 || b < 0 || !(typeof (a) == typeof(b))) return "ERROR";
	let min;
	let max;
	let res = 0;

	if (a > b){
		max = a;
		min = b;
	}
	else if (a < b){
		min = a;
		max = b;
	}

	for (let i = min; i <= max; i++){
		res += i;
	}
	return (res);
};

// Do not edit below this line
module.exports = sumAll;
