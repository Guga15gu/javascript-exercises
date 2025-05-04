const sumAll = function(x, y) {
    let sum = 0;

    if (!(Number.isInteger(x) && Number.isInteger(y))){
        return 'ERROR';
    }
    if ((x < 0) || (y < 0)){
        return 'ERROR';
    } 

    let x1 = x;
    let y1 = y;
    
    if (x > y){
        x1 = y;
        y1 = x;
    }

    for(; x1 <= y1; ++x1){
        sum += x1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
