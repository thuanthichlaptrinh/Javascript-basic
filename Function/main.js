/*--------------- Lý thuyết ---------------
- Hàm (Function) trong Javascript

1. Hàm
     - Một khối mã
     - Làm 1 việc cụ thể
2. Loại hàm
     - Built-in
     - Tự định nghĩa
3. Tính chất
     - Không thực thi khi định nghĩa
     - Sẽ thực thi khi được gọi
     - Có thể nhận tham số
     - Có thể trả về 1 giá trị
4. Tạo hàm đầu tiên  

* Lưu ý:
     - khi định nghĩa 2 hàm trùng tên thì hàm định nghĩa sau sẽ ghi đè hàm trước 
---------------------------------------------*/

//------------ dinh nghia ham ------------
function showDialog() {
    //   alert("Hi xin chao cac ban");
}

// showDialog();

//------------ truyen tham so ------------
function writeLog(message) {
    // message: la tham so
    //   console.log(message);
}

function writeLog2(message, message2) {
    // message: la tham so
    //   console.log(message, message2);
}

// writeLog("Test message"); // "Test message la đối số"
// writeLog2("java", "PHP");

function Tong(a, b) {
    //   return a + b;
}

// console.log("Tong = " + Tong(2, 10));

//------------ khai bao bien trong ham ------------
function showMessage() {
    let fullName = "MinhThuan";
    console.log(fullName);
}

// showMessage();

//------------ dinh nghia ham trong ham ------------
function showMessage2() {
    function showMessage3() {
        console.log("Message3");
    }
    //   showMessage3();
}

// showMessage2();

//------------ Các loại function ------------
// 1. Declaration function - có thể gọi trước ghi định nghĩa
// thực thi
// Declaration();

// định nghĩa
function Declaration() {
    console.log("Declaration functions");
}
// thực thi
// Declaration();

// 2. Expression function - ko thể gọi trước ghi định nghĩa (được gán cho 1 biến)
// định nghĩa
const Expression = function testName() {
    console.log("Expression functions");
};

// thực thi
// Expression();

// 3. Arrow function
// - Viết ngắn gọn hơn
// - Arrow function không thể làm constructor
const logger = (log) => {
    console.log(log);
};
// var logger = (log) => console.log(log);

// Cách 1:
// var sum = (a, b) => {
//     return a + b;
// };
// Cách 2:
// var sum = (a, b) => a + b;

// var obj = (a, b) => ({ a: a, b: b });
// var obj = (a, b) => {
//     return {
//         a: a,
//         b: b,
//     };
// };

// const Course = (name, price) => {
//     this.name = name;
//     this.price = price;
// };

const Course = function (name, price) {
    this.name = name;
    this.price = price;
};

const jsCourse = new Course("Javascritp", 10000);

// logger("Message...");
// console.log(sum(3, 4));
// console.log(obj(1, 2));

console.log(jsCourse);
