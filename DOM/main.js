/*------------------------------------------------------
- HTML DOM (Document Object Model)
- Có 3 thành phần: (mỗi thành phần là 1 node)
     1. Element: là các thẻ html
     2. Attribute: id, title, href...
     3. Text
------------------------------------------------------*/
// Javascript: Browser | Server (NodeJS)

// Browser: HTML -> DOM -> WEB API

// Document Object: đại diện cho toàn bộ website (truy xuất đến các ptu trong html đều thông qua documen)
// console.log(document);

// document.write("Hi Guys!");

//----------------------------------------------------------------------------------
/* Lấy element trong DOM - Get element methods
- lấy qua: ID, Class, Tag, CSS Selector, HTML collection
1. getElementById: lấy id từ 1 thẻ nào đó
2. getElementsByClassName: lấy class từ 1 thẻ nào đó
3. getElementsByTagName: lấy tag từ 1 thẻ nào đó
4. querySelector: chỉ select 1 ptu, select tương tự như bên css
5. querySelectorAll: select đến tất cả các phần tử
6. HTML collection
7. document.write

=> chỉ có số 1 và số 4 mới trả về element
*/

// ID
// var headingNode = document.getElementById("heading"); // getElementById(): lấy id từ thẻ h1

// console.log({
//   element: headingNode,
// }); // đưa vào object để nó không hiểu thành thẻ h1

// Class
// var headingNodes = document.getElementsByClassName("heading2"); //getElementsByClassName(): lấy id từ thẻ h1
// console.log(headingNodes);

// Tag
// var tagName = document.getElementsByTagName("p"); // getElementsByTagName(): lấy tag từ thẻ p
// console.log(tagName);

// CSS Selector
// querySelector(): chỉ select 1 ptu, select tương tự như bên css
// var cssSelector = document.querySelector(".box .heading-2"); // querySelector(): select đến thẻ heading
// console.log(cssSelector);

// querySelectorAll(): select đến tất cả các phần tử
// var cssSelectorAll = document.querySelectorAll(".box .heading-2");
// console.log(cssSelectorAll);

// HTML collection
// console.log(document.forms["form-1"]); // truy xuất đến form-1

// console.log(document.anchors); // lấy thẻ a

//------ Nang cao
// var boxNode = document.querySelector(".box-1");
// var listItemNodes = document.querySelectorAll(".box-1 li");

// công việc 1: sử dụng tới boxNode
// console.log(boxNode);

// công việc 2: sử dụng tới các li elements là con của box-1
// console.log(boxNode.getElementsByTagName("li")); // từ boxNode truy xuất đến li
// console.log(boxNode.querySelector("p"));
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// === DOME Attribute | Thêm, xóa, sửa ===
// let headingElement = document.querySelector("h1");

// == Thêm attribute - setAttribute ==
// - cách 1
// headingElement.title = "heading";
// headingElement.id = "id";
// headingElement.className = "className";

// - cách 2
// headingElement.setAttribute("class", "text-danger");
// headingElement.setAttribute("href", "#");
// headingElement.setAttribute("id", "h1");
// headingElement.setAttribute("data-1", "test-data");

// == Trả về giá trị attribute ==
// var getHeadingElementID = headingElement.getAttribute("id"); // lấy id
// var getHeadingElementData = headingElement.getAttribute("data-1"); // lấy data
// console.log(getHeadingElementData);
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// === Text node in Dom - giúp chúng ta lấy nội dụng trong 1 thẻ ===
var headingElement = document.querySelector(".heading");

// + innerText
// console.log(headingElement.innerText); // lấy text trong thẻ tag
// headingElement.innerText = "New heading"; // thay đổi text của thẻ tag
// console.log(headingElement.innerText);

// + textContent
// console.log(headingElement.textContent);
// headingElement.textContent = "New heading"; // thay đổi text của thẻ tag
// console.log(headingElement.textContent);

// === sự khác nhau của innerText và textContent ===
// - innerText: nội dung lấy đc sẽ giống trên nội dung trình duyệt.
// - textContent: nội dung lấy dc là text thật của thẻ nằm trong DOM (có 1 số TH trả về cả nội dung code),
// Nếu có nội dung trong script hoặc style thì lấy luôn.
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// === Thêm element vào element trong DOM ===
// let boxElement = document.querySelector(".box"); // get element

// console.log(boxElement);

// innerHTML
// boxElement.innerHTML = '<h1 title="Heading">New heading</h1>';

// console.log(document.querySelector("h1").innerText);

// outerHTML: ghi đè

// Node properties
// console.log([boxElement]);
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// DOM style
// let boxElement = document.querySelector(".box"); // get element

// Cách để style trong DOM
// Cach 1:
// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "red";

// Cach 2: lưu ý sẽ sinh ra css inline
// Object.assign(boxElement.style, {
//   width: "200px",
//   height: "100px",
//   backgroundColor: "green",
// });

// console.log(boxElement.style.backgroundColor); // get ra giá trị của thuộc tính css
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// ClassList Property
// add: thêm class vào element
// contains: kiểm tra 1 class có nằm trong element hay ko
// remove: xóa 1 class khỏi element
// toggle: nếu đg có class ở element thì gọi nó sẽ xóa, còn chưa có thì nó thêm vào

// let boxElement = document.querySelector(".box");

// console.log(boxElement.classList.add("red", "blue", "green")); // them class
// console.log(boxElement.classList.contains("red")); // kiem tra xem co class red ko
// console.log(boxElement.classList.remove("red")); // xoa class red

// setTimeout(() => {
//   boxElement.classList.remove("red");
// }, 3000);

// khi code này chạy, nó sẽ ktra xem code có class 'red' hay không nếu có nó sẽ gỡ bỏ
// còn nếu k có nó sẽ thêm vào
// setInterval(() => {
//   boxElement.classList.toggle("red");
// }, 1000);
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// === DOM events ===
// 1. Attribute
// 2. Assign event using the element node - gán event

// let h1Element = document.querySelectorAll("h1");
// let n = h1Element.length;

// for (let i = 0; i < n; i++) {
//   h1Element[i].onclick = function (e) {
//     console.log(e.target);
//   };
// }

// DOM events phần 2
// 1. Input / select
// 2. key up / down

// lay ra value cua the input
// let inputElement = document.querySelector('input[type="text"]');
// let checkboxElement = document.querySelector('input[type="checkbox"]');
// let selectElement = document.querySelector("select");

// let inputValue;

// lắng nghe sự kiện (input s)
// onchange: sẽ chạy khi blur ra ngoài
// oninput: gõ đến đâu lấy đến đó

// inputElement.oninput = function (e) {
//   inputValue = e.target.value; // lay giá tri value của thẻ input
// };

// lắng nghe sự kiện (checkbox)
// checkboxElement.onchange = function (e) {
//   console.log(e.target.checked);
// };

// lắng nghe sự kiện (selection)
// selectElement.onchange = function (e) {
//   console.log(e.target.value); // lấy value của 1 thẻ select
// };

// Phan 2.
// keyup (khi bấm phím xuống và khi nhấc phím lên mới thực thi)
// keydown (khi nhấn phím xuống nó sẽ thực thi liền)
// keypress (khi nhấn xuống nó sẽ thực thi và giữ phím thì nó sẽ chạy auto; lưu ý nó sẽ k nhận phím esc)

// inputElement.onkeydown = function (e) {
//   console.log(e);
// };

// inputElement.onkeyup = function (e) {
//   console.log(e.which);

//   switch (e.which) {
//     case 27:
//       console.log("Exit");
//       break;
//   }
// };

// khi bấm esc bên ngoài thì cũng sẽ thoát
// document.onkeydown = function (e) {
//   switch (e.which) {
//     case 27:
//       console.log("Exit");
//       break;
//     case 13:
//       console.log("Send chat");
//       break;
//   }
// };

// inputElement.onkeypress = function (e) {
//   switch (e.which) {
//     // 27: là phím esc trên bàn phím
//     case 27:
//       console.log("Exit");
//       break;
//      // 13: la phim enter
//     case 13:
//       console.log("Send chat");
//       break;
//   }
// };

// 1. preventDefault: loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ html
// 2. stopPropagation: loại bỏ sự kiện nổi bọt

// VD: nếu link click vào chứa chữ f8 thì mới chuyển trang còn các link ko có chữ f8 thì ko làm gì cả
// anchors: lấy ra những thẻ a
// let aElements = document.links; // lấy ra những thẻ a

// for (var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function (e) {
//         // khi click vào thẻ a có href là f8 thì sẽ không chuyển trang
//         if (!e.target.href.startsWith("https://f8.edu.vn")) {
//             e.preventDefault();
//         }
//     };
// }
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// === Event listener ===
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe.
var btn = document.getElementById("btn");

// Xử lý các công việc
function Viec1() {
    console.log("Event 1");
}
function Viec2() {
    console.log("Event 2");
}
function Viec3() {
    console.log("Event 3");
}

// Thêm nhiều công việc
btn.addEventListener("click", Viec1());
btn.addEventListener("click", Viec2());
btn.addEventListener("click", Viec3());

// Hủy bỏ Viec1 sau 3 giây
setTimeout(function () {
    btn.removeEventListener("click", Viec1());
}, 3000);
//----------------------------------------------------------------------------------
