describe("parseNumbers", () => {
	it("Should Return an empty array if Parameters are not parsable", () => {
		const result = parseNUmbers("ty", "0p", "yu", "9L");

		expect(result).toBeDefined();
		expect(typeof result).toBe("object");
		expect(result.length).toBe(0);
	});
	it("", () => {});
});
