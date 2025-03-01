// khai báo chuỗi
var fullName1 = new String("Minh Thuan"); // cach 1
var fullName2 = 'Minh Thuan la "Sieu Nhan"'; // cach 2

// console.log("Do dai cua fullName1 la: ", fullName1.length);
// console.log("fullName: ", fullName1);
// console.log("fullName: ", fullName2);

/* Các hàm trong chuỗi
     1. Lenght
     2. Find index
     3. Cut string
     4. Replace
     5. Convert to upper case
     6. Convert to lower case
     7. Trim
     8. Split
     9. Get a character by index
 */

var myString = "  Thuan JS lap trinh trinh trinh!  ";

console.log("Chuỗi ban đầu: ", myString);

// ------------------ Tính độ dài ------------------
// console.log("Do dai cua chuoi myString:", myString.length);

// ------------------ Tìm kiếm ------------------
// console.log("Vi tri 'trinh' la:", myString.indexOf("trinh")); // -1: khong tim thay, ! -1: tim thay
// console.log("Vi tri 'trinh' thu 2 la:", myString.indexOf("trfinh", 17)); // tim tu trinh xuat hien thu 2
// console.log("Vi tri 'trinh' cuoi cung la:", myString.lastIndexOf("trinh"));

// ------------------ Cắt chuỗi ------------------
// console.log("Chuoi sau khi cat la: ", myString.slice(4, 10)); // cat tu trai sang phai
// console.log("Chuoi sau khi cat la: ", myString.slice(-3, -1)); // cat tu phai sang trai

// ------------------ ghi de ------------------
// console.log("Chuoi sau khi ghi de: ", myString.replace("JS", "Javascript"));
// console.log("Chuoi sau khi ghi de: ", myString.replace("/JS/g", "Javascript")); // tìm tất cả chuỗi JS ở trong chuỗi myString

// ------------------ chuyen duoi thanh hoa, thuong ------------------
// console.log("Chuoi sau khi chuyen thanh hoa: ", myString.toUpperCase());
// console.log("Chuoi sau khi chuyen thanh thuong: ", myString.toLowerCase());

// ------------------ Trim - xóa khoảng trắng thừa ------------------
// console.log("Chuỗi sau khi xóa khoảng trắng:", myString.trim());

// ------------------ Split - cat 1 chuoi thanh Array ------------------
// var languages = "Javascript, PHP, Ruby";

// console.log(languages.split(", ")); // cắt từ sau dấu phẩy trong chuỗi languages

// var tu = "Javascript";
// console.log(tu.split("")); // cắt từng kí tự trong chuỗi tu

// ------------------ Get a character by index ------------------
// const myString2 = "Minh Thuan";
// console.log(myString2.charAt(1)); // Lấy kí tự theo vị trí
