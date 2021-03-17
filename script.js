'use strict'

console.log('Задание 1');

function pow(x, n) {
    return Math.pow(x, n);
}

let mathPow = pow(2, 3);
console.log('2 в третьей степени = ', mathPow);

console.log('Задание 2');

function repeat(str, n = 2) {
    return str.repeat(n);
}

let strRepeat = repeat('ab', 4);
console.log('Строка ab 4 раза', strRepeat);

console.log('Задание 3');

function min(a, b) {
    return Math.min(a, b);
}

let minNumber = min(5, 6);
console.log('Минимальное число ', minNumber);

console.log('Задание 4');

function maxArrayNumber(array) {
    return Math.max(...array);
}

let myArray = [3, 4, 5, 2]
let maxArray = maxArrayNumber(myArray)
console.log('Максимальное число в массиве', maxArray)


console.log('Задание 5');

function createRGB(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

let myRGB = createRGB(5, 6, 5);
console.log('Цвет ', myRGB);

console.log('Задание 6');

function getFormattedString(count = 0, one, two, five) {
    let str = count.toString();
    if (str >= 5 && str <= 20) {
        return five;
    }
    let lastChar = str.slice(-1);
    let lastNumber = +(lastChar);
    if (lastNumber === 1) {
        return one;
    }
    if (lastNumber >= 2 && lastNumber <= 4) {
        return two;
    }
    if (lastNumber >= 5 && lastNumber <= 9) {
        return five;
    }
    if (lastNumber === 0) {
        return five;
    }
}

let tovar = getFormattedString(21, 'товар', 'товара', 'товаров');
console.log('21', tovar);

console.log('Задание 7');

function sequence(start = 0) {
    function step(step = 1) {
        start = start + step;
        return start;
    }

    return step;
}

const generator = sequence(10);
console.log(generator(2));
console.log(generator());
console.log(generator(5));
console.log(generator());

console.log('Задание 8');


function upToLow(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === str[i]) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

let res = upToLow('wEwwEEwqErTTeQXFfas');
console.log(res);

