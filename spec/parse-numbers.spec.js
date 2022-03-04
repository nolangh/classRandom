describe("parseNumber", () => {
	//Test 1
	it("Should Return an empty array if Parameters are not parsable", () => {
		const result = parseNumber("ty", "0p", "yu", "9L");

		expect(result).toBeDefined();
		expect(typeof result).toBe("object");
		expect(result.length).toBe(0);
	});
	//Test 2
	it('it should return an array with a 15 if "15" is passed in', () => {
		const result = parseNumber("15");

		expect(result.length).toBe(1);
		expect(result[0]).toBe(15);
	});
	//Test 3
	it('it should return an array with a 15, 34 and 12 if "15", "34" and "12" is passed in', () => {
		const result = parseNumber("15", "34", "12");

		expect(result.length).toBe(3);
		expect(result[0]).toBe(15);
		expect(result[1]).toBe(34);
		expect(result[2]).toBe(12);
	});
	//Test 4
	//Test 5
});
