
const repeatString = (word, count) => {
    let string = ""
    if (count < 0)
        return "ERROR"
    for (let i = 0; i < count; i++) {
        console.log(word, count)
        string += word;
    }
    return string;
};

//console.log(repeatString(word.toString(), parseInt(count)))

// repeatString('hey', 3) //return string a number of times
//if statement does not need {to be wrapped}

// Do not edit below this line
module.exports = repeatString;
