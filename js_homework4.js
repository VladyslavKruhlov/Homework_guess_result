/*
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.
 */

/*
    Коментар для викладача:
    Для швидкого тесту розкоментуй checkProbabilityTheoryForTest у файлі js_homework4.js
    а також його імпорт і всі console.log(checkProbabilityTheoryForTest) у файлі main.
    Ця функція з додатковими параметрами (min & max) для легшої перевірки,
    або просто змінюй minValueForNumbers і maxValueForNumbers у файлі js_homework4.js і користуйся
    console.log(checkProbabilityTheory) у файлі main.js
 */

let minValueForNumbers = 100;
let maxValueForNumbers = 1000;

export function checkProbabilityTheory(count){
    if(count > 0 && Number.isInteger(count)) {
        let pair=0;
        let unpair=0;
        let randomNumbersArray = generateRandomNumbersArray(count, minValueForNumbers, maxValueForNumbers);

        for(let i = 0; i < randomNumbersArray.length; i++){
            if(randomNumbersArray[i]%2===0){
                pair++;
            } else {
                unpair++;
            }
        }

        let pairPercentage = (pair * 100) / count;
        let unpairPercentage = (unpair * 100) / count;
        let ratioPairToUnpair = `Pair ${pairPercentage}% : Unpair ${unpairPercentage}%`;
        let ratio50to50 = Math.abs(pairPercentage - unpairPercentage) <= 5;

        return {
            pairNumbersCount: pair,
            unpairNumbersCount: unpair,
            ratio: ratioPairToUnpair,
            ratio50to50: ratio50to50,
            array: randomNumbersArray
        };
    } else {
        console.log("You put wrong count parameter, please put count like a number with a value > 0")
        return null;
    }

}

function generateRandomNumbersArray(count, minValue, maxValue){
    let randomNumbers = [];
    for(let i = 0; i < count; i++){
        let number = selectRandomNumbers(minValue, maxValue);
        if(number!==null) {
            randomNumbers.push(number);
        } else {
            break;
        }
    }
    return randomNumbers;
}

function selectRandomNumbers(min, max){
    let randomNumber;
    if(Number.isInteger(max) && Number.isInteger(min) && min<=max){
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (min > max) {
        console.log("You put wrong number, min can`t be '>' or '=' max");
        return null;
    } else {
        console.log("You put wrong number. Function works only with Integer");
        return null;
    }
    return randomNumber;
}

// export function checkProbabilityTheoryForTest(count, minNumber, maxNumber) {
//     if (count > 0 && Number.isInteger(count)) {
//         let pair = 0;
//         let unpair = 0;
//         let randomNumbersArray = generateRandomNumbersArray(count, minNumber, maxNumber);
//
//         for (let i = 0; i < randomNumbersArray.length; i++) {
//             if (randomNumbersArray[i] % 2 === 0) {
//                 pair++;
//             } else {
//                 unpair++;
//             }
//         }
//
//         let pairPercentage = (pair * 100) / count;
//         let unpairPercentage = (unpair * 100) / count;
//         let ratioPairToUnpair = `Pair ${pairPercentage}% : Unpair ${unpairPercentage}%`;
//         let ratio50to50 = Math.abs(pairPercentage - unpairPercentage) <= 5;
//
//         return {
//             pairNumbersCount: pair,
//             unpairNumbersCount: unpair,
//             ratio: ratioPairToUnpair,
//             ratio50to50: ratio50to50,
//             array: randomNumbersArray
//         };
//     } else {
//         console.log("You put wrong count parameter, please put count like a number with a value > 0")
//         return null;
//     }
// }