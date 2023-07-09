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

//function that takes a string and a shift factor and returns it with each character "shifted"//
function caesarCipher(str) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let cipher = "bcdefghijklmnopqrstuvwxyza";
    //the isLowerCase and isUpperCase will check each letter of the string to determine what case it has//
    let isLowerCase = (letter) => {
        if (letter === letter.toLowerCase() && letter !== letter.toUpperCase()) {
            return true;
        }
        return false;
    }

    let isUpperCase = (letter) => {
        if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
            return true;
        }
        return false;
    }

    let lowerCipher = (letter) => {
        //indexOf returns the first occurance of letter in the substring//
        //For example Z is the 25th letter so it will store in index as 24 (0-24 numbering)//
        let index = letters.indexOf(letter);
        //look at cipher string and locate the letter in the last slot A and return it//
        let cipherCharacter = cipher[index];
        return cipherCharacter;
    }

    //check to be sure the user inputs a string and not numbers or something else//
    if (typeof str !== "string") {
        return "Not a string!";
    }

    let cipherOutput = "";

    for (let i = 0; i < str.length; i++) {
        //this will only look at letters, it will skip special characters like the ! used in Zebra!//
        if(isUpperCase(str[i]) || isLowerCase(str[i])) {
            //The upper and lower case letters will be ran in if and if else through the lowerCipher function above//
            if (isLowerCase(str[i])) {
                cipherOutput += lowerCipher(str[i])
            } else if (isUpperCase(str[i])) {
                cipherOutput += lowerCipher(str[i].toLowerCase()).toUpperCase();
            //The ! will be pushed to else and append it to the string here//
            } 
        } else {
            cipherOutput += str[i];
        }
    }
    return cipherOutput;
}

function analyzeArray(inputArray) {
    let averageOutput = inputArray.reduct((a,b) => a + b) / inputArray.length;
    let minimumOutput = Math.min(...inputArray);
    let maximumOutput = Math.max(...inputArray);
    let arrayLengthOutput = inputArray.length;

    let OutputObject = {
        average: averageOutput, 
        minimum: minimumOutput, 
        maximum: maximumOutput,
        arrayLength: arrayLengthOutput
    };
    return OutputObject;
}

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.caesarCipher = caesarCipher;