const reverseString = (str) => {
    let splitString = str.split("");
    console.log(splitString)
    let reverseArray = splitString.reverse();
    console.log(reverseArray);
    let joinArray = reverseArray.join("");
    return joinArray
};

// Do not edit below this line
module.exports = reverseString;
