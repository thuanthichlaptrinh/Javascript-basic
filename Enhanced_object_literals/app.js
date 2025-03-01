// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = "Javascript";
var price = 100;
var course = {
    // 1. Định nghĩa key: value cho object
    name,
    price,

    // 2. Định nghĩa method cho object
    getName() {
        return this.name;
    },
};

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = "name";
var fieldPrice = "price";
const course2 = {
    [fieldName]: "Java",
    [fieldPrice]: 1000,
};

console.log(course2);
