function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}