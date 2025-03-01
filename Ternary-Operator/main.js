let course = {
    name: "Javascript",
    coin: 250,
};

// su dung if
// if (course.coin > 0) {
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log("Mien phi");
// }

// toan tu 3 ngoi
let result = course.coin > 0 ? `${course.coin} Coins` : "Mien phi";
console.log(result);

let a = 1;
let b = 2;
let c = a > 0 ? a : b;

console.log(c);
