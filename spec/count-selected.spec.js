describe("countSelected", () => {
	it("Should return zero if an array with no elements is passed in", () => {
		const array = [];
		const number = countSelected(array);

		expect(numberSelected).toBe(0);
	});
});
