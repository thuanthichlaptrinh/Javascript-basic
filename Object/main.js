//----------------- Object trong JS -----------------
let emailKey = "email";

let myInfo = {
    name: "Minh Thuan",
    age: 18,
    address: "Tp.HCM",
    [emailKey]: "thuanthichlaptrinh@gmail.com",
    // phương thức
    getName: function () {
        return this.name; // this.name == myInfo.name;
    },
};

//myInfo.email = "thuanthichlaptrinh@gmail.com"; // them 1 key

// console.log(myInfo.name);

let myKey = "address";
// console.log(myInfo[myKey]);

// delete myInfo.age;

// console.log(myInfo.getName());
//----------------------------------------------------

//---------------- Object constructor ----------------
// Lưu ý: Object constructor chữ cái đầu tiên sẽ viết hoa, điều này k bắt
// buộc nhưng đây là quy ước chung.

// Hàm tạo: giống như bản thiết kế
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${lastName}`;
    };
}

// let User = function (firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function () {
//     return `${this.firstName} ${lastName}`;
//   };
// };

// Khởi tạo đối tượng
var author = new User("Ngo Minh", "Thuan", "Avatar");
var user = new User("Vu", "Nguyen", "Avatar");

// console.log(author.constructor === User); // so sanh

// them thuoc tinh rieng le cho doi tuong (chỉ đối tượng thêm mới có thuộc tính vừa thêm)
author.title = "Chia se dao tai T4";
user.comment = "Lieu co khoa hoc Springboot khong";

// console.log(author.getName());
// console.log(user.getName());

// console.log(author);
// console.log(user);
//----------------------------------------------------

//----------------- Object prototype -----------------
// những thứ cấu thành lên đối tượng của hàm tạo
User.prototype.className = "T4"; // được kế thừa lại các thuộc tính từ constructor User
User.prototype.getClassName = function () {
    // được kế thừa lại các thuộc tính từ constructor User
    return this.className;
};

let user2 = new User("Thuan", "Minh", "Avatar");
// console.log(user2.getClassName());
//----------------------------------------------------

//------------------ Đối tượng Date ------------------
let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1; // vì hàm sẽ trả về từ 0 -> 11
let day = date.getDate();
let hour = date.getHours();
let secon = date.getSeconds();

console.log(`${day}/${month}/${year} - ${hour}:${secon}`);
//----------------------------------------------------
