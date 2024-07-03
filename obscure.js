/**
 * Obscures all but the last 4 characters of a card number. 
 * @param {string} number The credit card number to be obscured
 * @returns string
 * @throws {Error}
 */
const obscure = number => {
	if(number.length < 12 || number.length > 16) throw new Error("Invalid card length provided");
	const ln = number.length-4; //we want to provide the last 4
	return new Array(ln).fill('X').join('')+number.slice(ln);
}

module.exports = obscure

