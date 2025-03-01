// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, let: Assignment

// var: phạm vi hoạt động trên toàn chương trình,
// Let, Const nếu nằm trong code block thì sẽ không sử dụng được bên ngoài
// const: là không thể thay đổi giá trị

{
    var course = "Javascript";
}

console.log(course);

var a = 1; // thằng này sẽ hỗ trợ hosting nghĩa là nó giống như định nghĩa prototype
