const removeFromArray = function(arr, ...values) {
    let new_arr = []
    for(let index = 0; index < arr.length; ++index){
        if (values.includes(arr[index])) {
            continue
        }
        new_arr.push(arr[index])
    }
    return new_arr
};

// Do not edit below this line
module.exports = removeFromArray;
