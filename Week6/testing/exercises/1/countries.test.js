const countries = require("./countries");

test("Passing an empty string returning an empty array", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

test("returning an array containing no more than 4 matches", () => {
    const result = countries.find("G");
    expect(result.length).toBeLessThanOrEqual(4);
});

test("passing a string not starting with a capital letter", () => {
    const string = countries.find("germany");
    expect(string).toContain("Germany");
});

test("returning an empty array when there is no match ", () => {
    const result = countries.find("Lala-Country");
    expect(result).toEqual([]);
});
