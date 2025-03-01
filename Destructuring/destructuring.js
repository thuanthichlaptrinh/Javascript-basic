// Phân rã, giúp lấy trực tiếp alement bên trong mà không càn dùng vs a[i]
var array = ["Javascript", "Typescript", "Ruby"];

// var [a, b, c] = array; // lấy 3 ptu

// var [a, , c] = array; // lấy 2 ptu đầu và cuối trừ ts
var [a, ...rest] = array; // lấy ptu js và mảng ts

var course = {
    name: "Javascript",
    price: 1000,
    image: "image-address",
    children: {
        name: "ReactJS",
    },
};

// var { name, ...rest } = course;

// Ví dụ xóa object
// var { name, ...newObject } = course;

// Lấy children
// var { name: parentName, children: { name: childrenName }, } = course;

// var { name, description = "Khóa học javascript cơ bản" } = course;

// console.log(a);
// console.log(rest);

// console.log(newObject);

// console.log(parentName, childrenName);

// console.log(description);

// ...params nó là toán tử rest (sẽ trở thành mảng) còn trường hợp khác là spread
// function logger(...params) {
//     console.log(params);
// }

// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));

// Nối 2 chuỗi a1 với a2
// var array1 = ["Js", "java", "Ruby"];
// var array2 = ["ReactJS", "Spring"];

// var array3 = [...array1, ...array2];

// console.log(array3);

var array = ["javacript", "PHP", "Ruby"];

// function logger(...rest) {
//     for (let i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }
// logger(...array);
