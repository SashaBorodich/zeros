module.exports = function zeros(expression) {
	
	let factorials = {
		num: [],
		amountFactorial: [],
	};

	let count;
	let result = 0;

	for (let i = 0, j = -1; i < expression.length; i++) {

		count = 0;

		j++;
		factorials.num[j] = '';

		while ((expression[i] != '*') && (i < expression.length)) {
			if (expression[i] != '!') {
				factorials.num[j] += expression[i];
			} else {
				count++;
			}
			i++;
		}
		factorials.amountFactorial[j] = count;
	}

	function foo(num, sign) {

		let i = 0;
		let multiplier = 5;

		while ((Math.floor(num / multiplier)) != 0) {
			if (num % 2 != 0 && sign == 2) {
				i += Math.round((num / multiplier) / 2);
				multiplier *= 5;
			} else if (sign == 2) {
					i += Math.floor((num / multiplier) / sign);
					multiplier *= 5;
				} else {
					i += Math.floor((num / multiplier));
					multiplier *= 5;
				}
			}
		
		return i;
	}

	let odd = 0;
	
	for (let i = 0; i < factorials.num.length; i++) {

		if (factorials.num[i] % 2 != 0 && factorials.amountFactorial[i] == 2 && factorials.num[i] > 4) {
			odd += (foo(factorials.num[i], factorials.amountFactorial[i]));
		} else if (factorials.num[i] > 4) {
				result += (foo(factorials.num[i], factorials.amountFactorial[i]));
		}
	}

	if (result != 0) {
		result += odd;
	}

	return result;


}
