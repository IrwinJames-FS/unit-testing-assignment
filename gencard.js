/*
Completely uncessary as arbitrary numbers can be used. But luhns algorithm is fun.
*/

const POTENTIAL_VALUES = [0,1,2,3,4,5,6,7,8,9];

const gencards = (start, end) => {
	const numbers = [];
	for(let i = start; i<=end; i++){
		numbers.push(gencard(i));
	}
	return numbers
}

/**
 * Generates a card of a provided length and backtracks if a valid card is not found. 
 * 
 * This really shouldnt need to backtrack however 
 * @param {*} length 
 * @param {*} str 
 * @returns 
 */
const gencard = (length, str = '') => {
	if (!length) return undefined;
	let card = '';
	for(let i=0; i<length-1; i++){
		card += Math.floor(Math.random()*9);
	}
	const vs = shuffle(POTENTIAL_VALUES);
	for(const v of vs){
		if(isLuhn(card+v)){
			card += v;
			break;
		}
	}
	return card;
}

const shuffle = l => {
	const list = [...l];
	for(let i = list.length-1; i>=0; i--){
		const ri = Math.floor(Math.random() * i);
		//swap the values
		const v = list[i]
		list[i] = list[ri];
		list[ri] = v;
	}
	return list;
}
/**
 * Checks if the provided set of characters complies to luhns algorithm check
 * @param {number[] | string} str 
 * @returns {boolean}
 * @throws {SyntaxError}
 */
const isLuhn = (str) => luhn(str) % 10 === 0;

/**
 * Calculates the luhn value for the provided card number
 * @param {number[] | string} values 
 * @returns number
 * @throws {SyntaxError}
 */
const luhn = (values) => {
	if(typeof values === 'string') return luhn(getValuesArray(values));
	return values.reduce((o,v,i)=>{
		if (i%2 === 0) {
			let p = v*2;
			if (p > 9) {
				//could just convert back to string and then separate however this should work a little more efficiently.
				p = (p%10) + Math.floor(p/10); //add the two characters together 
			}
			return o+p;
		} 
		return o+v;
	}, 0);
}

/**
 * Just a convenience function to convert a string into a list of numbers this will be exported for other methods to use
 * @param {string} str 
 * @returns {number}
 * @throws {SyntaxError}
 */
const getValuesArray = (str) => str.split('').map(char => {
	const value = parseInt(char);
	if(isNaN(value)) throw new SyntaxError("Invalid character in provided number");
	return value;
});

module.exports = {
	isLuhn, luhn, getValuesArray,gencard, gencards
}