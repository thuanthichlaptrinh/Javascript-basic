/*----------------- Khái niệm về Array -----------------
// 1. Tao mang: array có thể chứa tất cả kiểu dữ liệu trong js
// cach 1
// let languages = [
//   "Javascript",
//   "Java",
//   "Php",
//   null,
//   undefined,
//   function () {}, // có thể tạo 1 hàm trong mảng, vẫn đc hiểu là 1 phần tử trong mảng
//   {},
//   123,
// ]; // 1 phan tu cach nhau 1 dau phay

// cach 2:
// let languages2 = new Array(
//   "Javascript",
//   "Java",
//   "Php",
//   null,
//   undefined,
//   function () {},
//   {},
//   123
// );

// console.log(languages);
// console.log(languages2);

// 2. Kiem tra kieu du lieu
// console.log(Array.isArray(new Array));
//console.log(Array.isArray([])); // kiểm tra xem có phải là mảng hay không

// 3. Truy xuat mang
// console.log(languages[3]);
// for (let i = 0; i < languages.length; i++) {
//   console.log("A[" + i + "] = " + languages[i]);
// }

//4. kiem tra do dai cua array
// console.log(languages.length);
//------------------------------------------------

/*-------------- Làm việc với Array --------------
1. Keyword: javascript array methods

1. To string: chuyển kiểu dữ liệu của array sang string
2. Join: sau 1 phần tử sẽ có 1 dấu cách
3. Pop: xóa 1 phần tử ở cuối mảng, và trả về phần tử đã xóa đó
4. Push: thêm 1 phần tử vào cuối mảng, và trả về độ dài mới của mảng
5. Shift: xóa 1 phần tử vào cuối mảng, và trả về phần tử đã xóa đó
6. Unshift: thêm 1 phần tử vào đầu mảng, và trả về độ dài mới của mảng
7. Splicing: xóa 1 ptu bất kỳ or chèn phần tử mới vào mảng
8. Concat: nối chuỗi 
9. Slicing: cắt phần tử trong mảng 
*/

let languages = ["Javascript", "PHP", "Java"];
let languages2 = ["Ruby", "Dart"];

// console.log(languages);
// console.log("ToString: " + languages.toString());
// console.log("Join: " + languages.join(" "));
// console.log("Pop: " + languages.pop());
// console.log("Push: " + languages.push("Dart", "Cpp"));
// console.log("Shift: " + languages.shift());
// console.log("Unshift: " + languages.unshift("concat"));

//languages.splice(1, 1); // bắt đầu từ vị trí thứ 1 xóa đi 2 phần tử
//languages.splice(1, 1, "Cpp"); // xóa bỏ 1 phần tử ở vị trí 1 và truyển cpp vào
//languages.splice(1, 0, "Cpp"); // xóa bỏ 0 phần tử ở vị trí 1 và truyển cpp vào
//console.log(languages);

//console.log(languages2.concat(languages)); // nối chuổi languages vào chuổi languages2

// console.log(languages.slice(-2, -1));

//------------------------------------------------

// Array method
var courses = [
    { id: 1, name: "Javascript", coin: 250 },
    { id: 2, name: "Cpp", coin: 400 },
    { id: 3, name: "Java", coin: 0 },
    { id: 4, name: "Ruby", coin: 250 },
    { id: 5, name: "Ruby", coin: 300 },
    { id: 6, name: "Python", coin: 250 },
];

// foreach
// courses.forEach(function (course, index) {
//   console.log(index, course);
// });

// every: kiểm tra tất cả đk trong mảng phải thỏa mãn điều kiện gì đó (trả về giá trị boolean)
// let isFree = courses.every(function (course, index) {
//   // nếu thấy đk sai thì hàm sẽ dừng ngay lập tức
//   return course.coin === 0; // kiểm tra tất cả các coin trong array
// });

// some: kiểm tra đk trong mảng nếu có 1 ông thỏa thì sẽ đúng (nó sẽ dừng ngay đó và trả về kết quả đúng)
// let isFree = courses.some(function (course, index) {
//   console.log(index);
//   return course.coin === 0;
// });

// Find: lặp qua từng phần tử và kiểm tra nếu có ptu nào trùng
// với ptu cần ktra thì trả về ptu đó ngược lại return underfile
// let isFree = courses.find(function (course, index) {
//   console.log(index);
//   return course.name === "Ruby2";
// });

// Tìm kiếm và trả về 1 danh sách
let listCourses = courses.filter(function (course, index) {
    return course.name === "Ruby";
});

// Map: lưu tất cả các ptu từ mảng vào map
// duyệt qua từng phần tử của mảng courses mỗi khi
// duyệt qua nó sẽ gọi lại function mà ta đã truyền trong map
function courseHandler(course, index) {
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coninText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses,
    };
}

let newCourse = courses.map(courseHandler);

// console.log(newCourse);

// Reduce: muốn nhận về 1 giá trị duy nhất là tổng thứ gì đó trong mảng đó
// VD: nhận về 1 giá trị duy nhất là tổng số coin trong mảng course
// let totalCoin = 0;
// for (let course of courses) {
//   totalCoin += course.coin;
// }
//let i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   i++;
//   let total = accumulator + currentValue.coin;
//   console.table({
//     "Luot chay: ": i,
//     "Bien tich tru: ": accumulator,
//     "Gia khoa hoc: ": currentValue.coin,
//     "Tich tru duoc": total,
//   });
//   return total;
// }

// let totalCoin = courses.reduce(coinHandler, 0);

// let totalCoin = courses.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.coin;
// }, 0);

// console.log(totalCoin);

// let totalCoin = courses.reduce(function (total, course) {
//   return total + course.coin;
// }, 0); // inital value:

// console.log(totalCoin);

// ----------------------- Bài tập -----------------------
//Bài 1: Flat - Làm phẳng mảng từ Depth array
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// c2: dùng hàm
// function flatArray(array) {
//   let flatOutput = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       flatOutput = flatOutput.concat(flatArray(array[i]));
//     } else {
//       flatOutput.push(array[i]);
//     }
//   }
//   return flatOutput;
// }
// console.log(flatArray(depthArray));

//------ Bài 2: Lấy ra khóa học đưa vào 1 mảng mới
let topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS",
            },
            {
                id: 2,
                title: "Javascript",
            },
        ],
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS",
            },
        ],
    },
];

let newTopics = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newTopics);

// let htmls = newCourse.map(function (course) {
//   return `
//     <div>
//       <h2>${course.title}</h2>
//       <p>ID: ${course.id}</p>
//     </div>
//   `;
// });

// console.log(htmls.join(""));
// -------------------------------------------------------
