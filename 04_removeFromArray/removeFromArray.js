const removeFromArray = function(fullArray, ...allArgs) {

    while (allArgs.length > 0) {
        argArray = allArgs;
        eachArg = argArray.shift();
        
        while (fullArray.indexOf(eachArg) !== -1) {
            argIndex = fullArray.indexOf(eachArg);
            fullArray.splice(argIndex, 1);
        }    
                
    }

    return fullArray;

 };
// Do not edit below this line
module.exports = removeFromArray;
