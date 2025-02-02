function getSumNumInputObject(obj) {
    let total = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            total += obj[key];
        }
    }
    return total;
}

function getKeyNames(obj) {
    const keysArray = Object.entries(obj)
        .filter(([key, value]) => typeof value === 'number')
        .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
        .map(([key, value]) => key);
    return keysArray;
}