
const total = require('./total');

//Just the test from the video.
describe("Total Module Test", () => {
	test("As User total 3 prices (2.50, 78.12 12.89) == 93.51", () => {
		expect(total(2.5, 78.12, 12.89)).toEqual(93.51);
	});
});