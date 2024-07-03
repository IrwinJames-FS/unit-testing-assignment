/*
# Requirements: 
- A method to generate a possibly valid credit card without knowledge of necessary length or institution codes.
	- Needs to comply to luhns algorithm's mod 10 check.
	- Should allow for a dictated length.
	- While less efficient should used a randomized base so all cards arent similar.
- A luhn value method
- A luhn check method
*/

const {isLuhn, luhn, gencard, gencards} = require("./gencard");
/*console.log(gencards(11, 17));*/
describe("gencard Module Test", ()=>{
	test("As a Developer this should generate a potentially viable credit card number", ()=>{
		const gc = gencard(12);
		expect(gc).toBeDefined();
	});

	test("As a Developer this should generate a potentially viable credit card number", ()=>{
		const gc = gencard(0);
		expect(gc).toBeUndefined()
	});
	

	test("As a Developer this should generate a list of potentially viable numbers of different lengths", ()=>{
		const gc = gencards(11, 17);
		console.log(gc); //will be used later
		expect(gc.length).toBe(7);
	});

	test("As a Developer (this is a dev tool) expect this 12 digit number to be compliant", ()=>{
		expect(isLuhn("312877312347")).toEqual(true);
	});

	test("As a Developer (this is a dev tool) expect this 12 digit number to fail", ()=>{
		try{
			expect(isLuhn("3128773123X7")).toThrow();
		} catch (e) {
			expect(e.message).toEqual("Invalid character in provided number");
		}
	});

	
})