/*
# Requirements:
- Obscure credit card number except last 4 characeters
- Accept only card numbers between 12-16 characters
*/
const obscure = require('./obscure');
/*
For multiple cards I used gencard to create 7 card numbers
'12974773961',
'942549725771',
'2812159577963',
'36137252954639',
'936641896232680',
'5558773146956393',
'53469976594435694'
*/

describe("Obscure Module Test (Should fail)", () => {

	test("As User Obscure 11 character Credit Card Number", () => {
		try{
			expect(obscure('12974773961')).toThrow();
		} catch (e) {
			expect(e.message).toEqual("Invalid card length provided");
		}
	});

	test("As User Obscure 12 character Credit Card Number ", () => {
		expect(obscure('942549725771')).toEqual('XXXXXXXX5771')
	});

	test("As User Obscure 13 character Credit Card Number ", () => {
		expect(obscure('2812159577963')).toEqual('XXXXXXXXX7963')
	});

	test("As User Obscure 14 character Credit Card Number ", () => {
		expect(obscure('36137252954639')).toEqual('XXXXXXXXXX4639')
	});

	test("As User Obscure 15 character Credit Card Number ", () => {
		expect(obscure('936641896232680')).toEqual('XXXXXXXXXXX2680')
	});

	test("As User Obscure 16 character Credit Card Number ", () => {
		expect(obscure('5558773146956393')).toEqual('XXXXXXXXXXXX6393')
	});

	test("As User Obscure 17 character Credit Card Number", () => {
		try{
			expect(obscure('53469976594435694')).toThrow();
		} catch (e) {
			expect(e.message).toEqual("Invalid card length provided");
		}
	});
});