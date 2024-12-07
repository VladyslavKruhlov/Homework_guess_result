/*
Опис ДЗ:
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
 */

export function paranoya(array){
    const pattern = /^[a-zA-Z0-9][a-zA-Z0-9#$%&‘*+—/=?^_`.{|}~]{2,49}@(gmail|yahoo)\.com$/;
    let result  = [];
    if(Array.isArray(array) && array.length>0) {
        array.forEach((item)=>{
            if (typeof item==="object"){
                let AddedEmail = pattern.test(item.email);
                if (AddedEmail===true){
                    result.push(item.email);
                }
            } else {
                result = null;
            }
        })
        if (result === null){
            console.log("You used array without objects inside!\n");
        }
    } else {
        console.log("You used incorrect parameter!\nPut array with objects like parameter for paranoya function\n")
        result = null;
    }
    return result;
}

export function paranoyaWithoutSimpleArrValidation(array){
    const pattern = /^[a-zA-Z0-9][a-zA-Z0-9#$%&‘*+—/=?^_`.{|}~]{2,49}@(gmail|yahoo)\.com$/;
    let result  = [];

    if(Array.isArray(array) && array.length>0) {
            array.forEach((item)=>{
                let AddedEmail = pattern.test(item.email);
                if (AddedEmail===true){
                    result.push(item.email);
                }
            })
        } else {
            console.log("You used incorrect parameter!\nPut array with objects like parameter for paranoya function")
            result = null;
        }
      return result;
}