const sumAll = function(first,second) {
    
    let firstInt = first;
    let secondInt = second;
    let sumOfAll = firstInt;

    if (first < 0 || second < 0 || typeof(first) != 'number' || typeof(second) != 'number') {
        return 'ERROR';
    }
   
    if (first<second) {
        while (firstInt < secondInt) {
            firstInt += 1;
            sumOfAll += firstInt;
        }
    }

    if (first>second) {
        while (firstInt > secondInt) {
            firstInt -= 1;
            sumOfAll += firstInt;
        }
    }

    return sumOfAll
    
};

// Do not edit below this line
module.exports = sumAll;
