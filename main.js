import { pow, updatedPow } from './homework3.js';

// Tests for pow
console.log("\n +х и +у\n")
console.log(pow(3, 3));    // Очікую 27
console.log(pow(4, 2));    // Очікую 16
console.log(pow(1, 3));    // Очікую 1
console.log(pow(0.5, 3));    // Очікую 0.125
console.log(pow(0.6, 2));    // Очікую 0.36
console.log(pow(0, 5));    // Очікую 0
console.log(pow(17, 0));    // Очікую 1
console.log(pow(5, 0.5));    // Очікую undefined
console.log(pow(17, -25.45));    // Очікую undefined

console.log("\n -х и +y\n")
console.log(pow(-2, 2));    // Очікую 4
console.log(pow(-3, 3));   // Очікую -27
console.log(pow(-1, 4));    // Очікую 1
console.log(pow(-0, 3));    // Очікую 0
console.log(pow(-0.6, 2));    // Очікую 0.36
console.log(pow(-2.5, 3));    // Очікую -15.625

console.log("\n +х и -у\n")
console.log(pow(2, -2));    // Очікую 0.25
console.log(pow(3, -3));   // Очікую ~ 0.037
console.log(pow(1, -4));    // Очікую 1
console.log(pow(0, -3));    // Очікую undefined
console.log(pow(0.02, -2));    // Очікую 2500
console.log(pow(2.5, -3));    // Очікую 0.064

console.log("\n  -х и -у\n")
console.log(pow(-2, -2));    // Очікую 0.25
console.log(pow(-3, -3));   // Очікую ~ -0.037
console.log(pow(-4, -3));    // Очікую ~ -0.0156
console.log(pow(-5, -2));    // Очікую 0.04
console.log(pow(-1, -4));    // Очікую 1
console.log(pow(-0, -3));    // Очікую undefined
console.log(pow(-0.02, -2));    // Очікую 2500
console.log(pow(-2.5, -3));    // Очікую -0.064


// Tests for updatedPow
// console.log("\n +х и +у")
// console.log(updatedPow(3, 3));    // Очікую 27
// console.log(updatedPow(4, 2));    // Очікую 16
// console.log(updatedPow(1, 3));    // Очікую 1
// console.log(updatedPow(0.5, 3));    // Очікую 0.125
// console.log(updatedPow(0.6, 2));    // Очікую 0.36
// console.log(updatedPow(0, 5));    // Очікую 0
// console.log(updatedPow(17, 0));    // Очікую 1
// console.log(updatedPow(5, 0.5));    // Очікую undefined
// console.log(updatedPow(17, -25.45));    // Очікую undefined

// console.log("\n -х и +y")
// console.log(updatedPow(-2, 2));    // Очікую 4
// console.log(updatedPow(-3, 3));   // Очікую -27
// console.log(updatedPow(-1, 4));    // Очікую 1
// console.log(updatedPow(-0, 3));    // Очікую 0
// console.log(updatedPow(-0.6, 2));    // Очікую 0.36
// console.log(updatedPow(-2.5, 3));    // Очікую -15.625

// console.log("\n +х и -у")
// console.log(updatedPow(2, -2));    // Очікую 0.25
// console.log(updatedPow(3, -3));   // Очікую ~ 0.037
// console.log(updatedPow(1, -4));    // Очікую 1
// console.log(updatedPow(0, -3));    // Очікую undefined
// console.log(updatedPow(0.02, -2));    // Очікую 2500
// console.log(updatedPow(2.5, -3));    // Очікую 0.064

// console.log("\n  -х и -у")
// console.log(updatedPow(-2, -2));    // Очікую 0.25
// console.log(updatedPow(-3, -3));   // Очікую ~ -0.037
// console.log(updatedPow(-4, -3));    // Очікую ~ -0.0156
// console.log(updatedPow(-5, -2));    // Очікую 0.04
// console.log(updatedPow(-1, -4));    // Очікую 1
// console.log(updatedPow(-0, -3));    // Очікую undefined
// console.log(updatedPow(-0.02, -2));    // Очікую 2500
// console.log(updatedPow(-2.5, -3));    // Очікую -0.064