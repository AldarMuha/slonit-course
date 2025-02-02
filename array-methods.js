//Свои методы массива аналогичные методам массива из коробки

//1.Метод аналогичный arr.slice([start], [end])
function mySlice(arr, start = 0, end = arr.length) {
    const newArray = [];
    let startIndex = start;
    let endIndex = end;
    if (start < 0) {
        startIndex = arr.length - 1 + start;
    }
    if (end < 0) {
        endIndex = arr.length + end;
    }
    for (let i = startIndex; i < endIndex; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

//2.Метод аналогичный arr.indexOf(item, from) 
function myIndexOf(arr, item, from = 0) {
    let index = from;
    if (from < 0) {
        index = arr.length - 1 + from;
    }
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

//3. Метод аналогичный arr.includes(item, from)
function myIncludes(arr, item, from = 0) {
    let index = from;
    if (from < 0) {
        index = arr.length - 1 + from;
    }
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}