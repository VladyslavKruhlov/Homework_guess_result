import {course} from './js_homework5.js';
import {homework1, homework2, homework3, toolForWork, students} from "./objectForTest.js";

// Test getInfo for basic object
console.log("------------Basic---------------")
course.getInfo();

// TEST 1: for modified object
console.log("------------Test1---------------")
/* Change keys:
    homework (true -> false),
    group_members (add a new person),
    title (QA Pro -> QA Advanced),
    group_number (21 -> 28),
    homework_description[0].name (git -> GIT)
    tool.name (Github -> GIT),
 */
course.homeworks = false;
course.group_members = ["Vlad", "Viki", "Olya", "Anna"];
course.title = "QA Advanced";
course.group_number = 28;
course.tool.name = "GIT";
course.homework_description[0].name = "GIT";
course.getInfo();

// TEST 2: replaced some key for object
console.log("------------Test2---------------")
/* Change keys:
    course.group_members replaced by array students,
    tool.name values replaced by object toolForWork,
    course.homework_description values replaced by objects homework1, homework2,
 */
course.group_members = students;
course.tool.name = toolForWork.name;
course.homework_description = [homework3, homework2, homework1];
course.getInfo();

// TEST 3: deleted and add some keys for object
console.log("------------Test3---------------")
/* Change keys:
    delete tool values (values -> null),
    add a new key Language (JavaScript),
    delete key homework_description,
 */
course.tool = null;
course['Language'] = 'JavaScript';
delete course.homework_description;

course.getInfo();