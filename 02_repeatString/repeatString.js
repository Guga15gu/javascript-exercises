const repeatString = function(string, number) {
    result_string = ''

    if (number < 0){
        return "ERROR"
    }
    for (let i = 0; i < number; i++) {
        result_string += string
    }

    return result_string
};

// Do not edit below this line
module.exports = repeatString;
