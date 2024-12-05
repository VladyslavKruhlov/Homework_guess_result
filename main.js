import {withoutA} from './withoutA.js';

const StringWithMatch = "Wonderful, Joyful, usefully, atomic, app";
const StringWithoutMatch = "Happiness, Time, Task, Apple, Ultimated";
const StringEmpty = "";

withoutA(StringWithMatch);
withoutA(StringWithoutMatch);
withoutA(StringEmpty);