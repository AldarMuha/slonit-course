function getStringWithFirstBigLetter(text) {
    let str = text[0].toUpperCase();
    return str + text.slice(1);
}

function hideExtraText(text) {
    if (text.length < 40) {
        return text;
    }
    if (text[39] === ' ' || text[39] === ',' || text[39] === '.' || text[39] === '!' || text[39] === '?' || text[39] === ':' || text[39] === ';') {
        let str = text.slice(0, 40);
        let integer = 0;
        for (let char of str) {
            if (char === ' ' || char === ',' || char === '.' || char === '!' || char === '?' || char === ':' || char === ';') {
                return str.slice(0, integer + 1) + '...';
            }
            integer++;
        }
    }
    return text.slice(0, 40) + '...';
}

function getIsSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}