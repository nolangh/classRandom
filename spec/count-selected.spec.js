describe("countSelected", () => {
	it("Should return zero if an array with no elements is passed in", () => {
		const array = [];
		const number = countSelected(array);

		expect(numberSelected).toBe(0);
	});
});

 
describe('parseNumbers', () =>{
    it('Should Return an empty array if Parameters are not parsable', () =>{
        const result = parseNUmbers('ty,'0p', 'yu','9L')

        expect(result).toBeDefined();
        expect(typeOf result).toBe('object');
        expect(result.length).toBe('0');
    });
    it('', () => {

    })
})

