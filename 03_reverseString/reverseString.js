const reverseString = function reverseString(input) {
    inputString = input
    inputString = inputString.split('');
    inputString = inputString.reverse();
    inputString = inputString.join('');
    return inputString;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
