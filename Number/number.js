/*
Kiểu số (Number) trong Javascript

1. Tạo giá trị Number
     - Các cách tạo
     - Dùng cách nào? tại sao?
     - Kiểm tra data type

2. Làm việc với Number
     - To string
     - To fixed

// Keyword: Javascript number method
*/

// 1. Tao gia tri number
// c1
var age = 18;
var PI = 3.14;

// c2
var otherNumber = new Number(9);

// 2. Lam viec voi number
console.log(age.toString());

// isNaN() la kiem tra so NaN
// tostring() chuyen kieu so thanh kieu chuoi
// toFixed() lam tron so thap phan, VD: < 3.5 thi lam tron xuong, > 3.5 thi lam tron len, nếu truyền giá trị vào thì 1 là 1 số thập phân, 2 là 2 số thập phân

// console.log(toString(Number));
console.log(typeof age);
console.log(PI.toFixed()); // lam tron
