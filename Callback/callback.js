// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)
// function myFunction(param) {
//     if (typeof param == "function") {
//         param("Học lập trình");
//     }
// }

// function myCallback(value) {
//     console.log("Value: ", value);
// }

// myFunction(myCallback);

//====================== Xây dựng lại phương thức ======================
// ---------------------- map ----------------------
Array.prototype.map2 = function (callback) {
    let output = [];
    let arrayLenght = this.length; // this lúc này chính là course

    for (let i = 0; i < arrayLenght; i++) {
        let result = callback(this[i], i); // lấy ra item và chỉ mục của mảng
        output.push(result); // Đẩy từng phần tử vào mảng
    }

    return output;
};

let courses = ["Javascript", "PHP", "Ruby", "Python"];

// map: lặp qua tất cả phần tử của array và mỗi lần lặp qua
// nó sẽ gọi phương thức được truyền vào qua đối số chính là callback
let htmls = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));

//---------------------- foreach ----------------------
Array.prototype.forEach2 = function (callback) {
    for (let index in this) {
        // kiểm tra để loại trừ forEach2 trong prototype
        if (this.hasOwnProperty(index) == true) {
            callback(this[index], index, this);
        }
    }
};

console.log("----------- forEach2 -----------");
courses.forEach2(function (course, index, array) {
    console.log("Index: " + index + " -> " + course, array);
});

//---------------------- reduce ----------------------

//---------------------- find ----------------------

//---------------------- filter ----------------------
// - lọc ra được các phần tử thỏa mãn điều kiện cho trước
let khoaHoc = [
    {
        name: "Javascript",
        coin: 680,
        isFinish: true,
    },
    {
        name: "PHP",
        coin: 860,
        isFinish: false,
    },
    {
        name: "Ruby",
        coin: 980,
        isFinish: false,
    },
];

Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        // kiểm tra để loại trừ filter2 trong prototype
        if (this.hasOwnProperty(index) == true) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
};

var filterCourses = khoaHoc.filter2(function (course, index, array) {
    return course.coin > 700;
});

console.log("----------- filter2 -----------");
console.log(filterCourses);

// ---------------------- some ----------------------
// - tối thiểu có 1 phần tử trong mảng thõa mản điều kiện gì đó
// - Nếu tìm thấy thì trả về true, ngược lại trả về false
Array.prototype.some2 = function (callback) {
    var output = false; // đặt cờ hiệu
    for (var index in this) {
        if (this.hasOwnProperty(index) == true) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
};

var isResult = khoaHoc.some2(function (course, index, array) {
    return course.isFinish;
});

console.log("----------- some2 -----------");
console.log(isResult);

// ---------------------- every ----------------------
// - trả về kết quả true hoặc false (ktra tất cả ptu trong mảng phải
// thỏa mãn điều kiện đưa ra, nếu có 1 thằng không thõa mản thì sai.)
Array.prototype.every2 = function (callback) {
    var output = true;
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result == false) {
                output = false;
                break;
            }
        }
    }
    return output;
};

var result = khoaHoc.every2(function (course, index, array) {
    return course.coin > 680;
});

console.log("----------- every2 -----------");
console.log(result);
