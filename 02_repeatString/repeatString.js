

const repeatString = function(stringToRepeat, numRepeats) {
    repeatedString = ''
    if (numRepeats < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < numRepeats; ++i) {
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
