// For test withoutA function

const StringWithMatch = "Wonderful, Joyful, usefully, atomic, app";
const StringWithoutMatch = "Happiness, Time, Task, Apple, Ultimated";
const StringEmpty = "";

// For test paranoya function

const arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"234@gmail.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"tt_@gmail.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@yahoo.co" // Нам такі не підходять
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"1@gmail.com" // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"!dmitroporohov@yahoo.com" // Нам такі не підходять
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"t@gmail.com" // Нам такі не підходять
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"$ndrii@mail.com" // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"andrii@gmail.com@yandex.ru"  // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:""  // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov", // Немає email зовсім
    }
];

const emptyArr = [];

const simpleArr = ["email", "andrii@gmail.com@yandex.ru", "t@gmail.com"];

export {arr, emptyArr, simpleArr, StringEmpty, StringWithMatch, StringWithoutMatch}