import {withoutAMoreThanSixLetters} from './withoutA.js';
import {paranoya, paranoyaWithoutSimpleArrValidation} from "./paranoya.js";
import {arr, emptyArr, simpleArr, StringWithMatch, StringWithoutMatch, StringEmpty} from "./exampleDataForTest.js"

//Test1(withoutA): function find matches
console.log("------------Test1---------------")
withoutAMoreThanSixLetters(StringWithMatch);

// Test2(withoutA): function don`t find matches
console.log("------------Test2---------------")
withoutAMoreThanSixLetters(StringWithoutMatch);

// Test3(withoutA): empty string
console.log("------------Test3---------------")
withoutAMoreThanSixLetters(StringEmpty);

// Test4(paranoya): different email type
console.log("------------Test4---------------")
console.log(paranoya(arr))

// // Test5(paranoya): empty arr
console.log("------------Test5---------------")
console.log(paranoya(emptyArr))

// Test6(paranoya): simple arr without obj inside
console.log("------------Test6---------------")
console.log(paranoya(simpleArr))

// Test7(paranoyaWithoutSimpleArrValidation): simple arr without obj inside (added this function and situation for compare with paranoya)
console.log("------------Test7---------------")
console.log(paranoyaWithoutSimpleArrValidation(simpleArr))