import {withoutAMoreThanSixLetters} from './withoutA.js';

// Test1: function find matches
console.log("------------Test1---------------")
const StringWithMatch = "Wonderful, Joyful, usefully, atomic, app";
withoutAMoreThanSixLetters(StringWithMatch);

// Test2: function dont find matches
console.log("------------Test2---------------")
const StringWithoutMatch = "Happiness, Time, Task, Apple, Ultimated";
withoutAMoreThanSixLetters(StringWithoutMatch);

// Test2: empty string
console.log("------------Test3---------------")
const StringEmpty = "";
withoutAMoreThanSixLetters(StringEmpty);