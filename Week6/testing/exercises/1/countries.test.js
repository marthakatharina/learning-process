const countries = require("./countries");

// When find is passed an empty string, it returns an empty array:

test("Passing an empty string returns an empty array", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

// The array that it returns contains no more than four matches:

test("returning an array containing no more than 4 matches", () => {
    const result = countries.find("G");
    expect(result.length).toBeLessThanOrEqual(4);
});

// The search is case insensitive:

test("passing a string not starting with a capital letter", () => {
    const string = countries.find("germany");
    expect(string).toContain("Germany");
});

// If there are no matching countries, an empty array is returned:

test("returning an empty array when there is no match ", () => {
    const result = countries.find("Lala-Country");
    expect(result).toEqual([]);
});
