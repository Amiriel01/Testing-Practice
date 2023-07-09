//jest tests//
//must have JSON file to run tests (command line npm init)//
//JSON file script, delete echo and put in jest//
//this worked when I ran into the "command not found: jest" error (command line: npm install -g jest)//

let practice = require("./practice");

test("A capitalize function that takes a string and returns it with the first character capitalized.", () => {
    expect(practice.capitalize("this is a test")).toBe("This is a test");
});

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(practice.reverseString("this is a test")).toBe("tset a si siht");
});

test("A calculator object that contains functions for the basic operation: add.", () => {
    expect(practice.calculator.add(1,1)).toBe(2);
});

test("A calculator object that contains functions for the basic operation: subtract.", () => {
    expect(practice.calculator.subtract(2,1)).toBe(1);
});

test("A calculator object that contains functions for the basic operation: multiply.", () => {
    expect(practice.calculator.multiply(2,2)).toBe(4);
});

test("A calculator object that contains functions for the basic operation: divide.", () => {
    expect(practice.calculator.divide(8,2)).toBe(4);
});