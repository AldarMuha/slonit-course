function guessNumber() {
    let secretNum = Math.round(Math.random() * 100 + 1);
    let guessedNum = 50;
    let max = 100;
    let min = 0;
    console.log('Компьютер 1 загадал число:');
    console.log(secretNum);
    let isEqualNum = secretNum === guessedNum;
    while (!isEqualNum) {
        console.log('Компьютер 2: Пробую число ' + guessedNum);
        if (secretNum < guessedNum) {
            console.log('Компьютер 1: Меньше.');
            max = guessedNum;
            guessedNum = min + Math.round((max - min) / 2);
            continue;
        }
        if (secretNum > guessedNum) {
            console.log('Компьютер 1: Больше.');
            min = guessedNum;
            guessedNum = min + Math.round((max - min) / 2);
            continue;
        }
        if (secretNum === guessedNum) {
            console.log('Компьютер 1: Угадал.');
            guessedNum = secretNum;
            return;
        }
    }
}