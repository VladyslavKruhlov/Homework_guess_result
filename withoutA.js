/*
Опис ДЗ:
Напишіть регулярний вираз,
який знайде послідовність з шести або більше символів,
які не містять літери «А» (великої або малої)
 */

export function withoutAMoreThanSixLetters(str) {
    const pattern = /\b[^aA\s]{6,}\b/g;
    if (str.length !==0) {
        const words = str.match(pattern);
        const result = pattern.test(str);
        if (result===true) {
            console.log(result);
            console.log(words);
        } else {
            console.log(result);
        }

    } else {
        console.log("You put wrong string for searching")
    }
}