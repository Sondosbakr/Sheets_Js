// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(num * num + num); // 6

// Soultion Four
console.log(num * ++num); // 6

// Solution Five
console.log(num + (num * true)); // 6

// Solution Six
console.log(num ** num / 3 - num); // 6




let n = "10";

// Solution One
console.log(+n + +n); // 20

// Solution Two
console.log(+n * +n - (n * --n) + ++n); // 20

// Solution Three
console.log(n * n / n + n); // 20

// Solution Four
console.log(n); // 20


let points = 10;

points+=3;
console.log(points); // 13

 points-=5;
console.log(points); // 8;