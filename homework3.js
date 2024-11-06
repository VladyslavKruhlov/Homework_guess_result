/*
Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Не використовувати **
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
 */

/*
Коментар для викладача: Зробив чорновий варіант (pow) але вирішив його покращити в (updatedPow). Залишив обидва про всяк випадок
Тести обох функцій дають однаковий результат, можешь його перевірити у файлі test.js
 */

export function pow(x, y){

    let result=1;

    if (typeof x == "number" && typeof y == "number" && Number.isInteger(y)){
        if(x >= 0 && y >= 0){
            for (let i=1; i<=y; i++){
                result = result * Math.abs(x);
            }
            return result;
        }
        else if(y < 0 && x < 0){
            for (let i=1; i<= Math.abs(y); i++){
                if (Math.abs(y)%2===0){
                    result = result * Math.abs(x);
                } else {
                    result = Math.abs(result) * Math.abs(x) * -1;
                }
            }
            return 1/result;
        }
        else if(x >= 0 && y < 0){
            for (let i=1; i<= Math.abs(y); i++){
                    result = result * x;
            }
            return 1 / result;
        }
        else if(x < 0 && y > 0) {
            for (let i = 1; i <= y; i++) {
                if (Math.abs(y) % 2 === 0) {
                    result = result * Math.abs(x);
                } else {
                    result = Math.abs(result) * Math.abs(x) * -1;
                }
            }
            return result;
        }
    }
    else {
        console.log("Incorrect parameters. Parameters must be integer");
    }
}

export function updatedPow(x, y) {

    let result = 1;

    if (typeof x == "number" && typeof y == "number" && Number.isInteger(y)) {
        for (let i = 1; i <= Math.abs(y); i++) {
                result = result * Math.abs(x);
            }
        if (y < 0) {
            if (x < 0 && Math.abs(y) % 2 !== 0) {
                result = 1 / result * (-1);
            } else {
                result = 1 / result;
            }
        } else if (y >= 0) {
            if (x < 0 && Math.abs(y) % 2 !== 0) {
                result = result * (-1);
             }
        }
            return result;
        } else {
        console.log("Incorrect parameters. Parameters must be integer");
    }
}