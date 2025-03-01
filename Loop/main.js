/*
1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi
điều kiện đúng
*/

// For loop
// for (let i = 1; i <= 5; i++) {
//   console.log(`${i}`, " ");
// }

let myArray = ["Js", "Java", "Python", "php"];
let myArrayLength = myArray.length;

// function XuatMang(a, n) {
//   for (let i = 0; i < n; i++) {
//     console.log(`a[${i}] = ${a[i]}`);
//   }
// }

// XuatMang(myArray, myArrayLength);

// for (var key in myArray) {
//   console.log(myArray[key]);
// }

let languges = "Javascript";

// for (let key in languges) {
//   console.log(languges[key]);
// }

// for (let value of languges) {
//   console.log(value);
// }

let myInfo = {
  name: "Thuan",
  age: 18,
};

// for (let value of Object.keys(myInfo)) {
//   console.log(myInfo[value]);
// }

// while
let i = 0;
// while (i < myArrayLength) {
//   console.log(myArray[i]);
//   i++;
// }

// do whilte
let isSuccess = false;

do {
  i++;
  console.log("Nap the lan " + i);

  // Thanh cong
  if (false) {
    isSuccess = true;
  }
} while (!isSuccess && i < 3);

// vong lap long nhau - Nested loop
var myArrayLong = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// for (let i = 0; i < myArrayLength.length; i++) {
//   for (let j = 0; j < myArrayLong[i].length; i++) {
//     console.log(myArrayLength[i][j]);
//   }
// }

for (let i = 100; i > 0; i--) {
  console.log(i);
}
