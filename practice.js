//function to capitalize the first letter of a string//
function capitalize(str) {
    //string character at position 0 is the first letter and toUpperCase turns it uppercase + the character 1 and splice it back in as is//
    return str = (str.charAt(0)).toUpperCase() + str.slice(1);
}

//function to revers the text from the string//
//split "" takes the string and splits it into letters and then they will .reverse and .join back together into a string//
function reverseString(str) {
    return str.split("").reverse().join("");
}

//object is let calculator that invokes an anonymous function that invokes immediately//
let calculator = (() => {
    let add = (a,b) => a + b;
    let subtract = (a,b) => a - b;
    let multiply = (a,b) => a * b;
    let divide = (a,b) => a / b;
    return {
        add,
        subtract,
        multiply,
        divide
    };
})();

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;