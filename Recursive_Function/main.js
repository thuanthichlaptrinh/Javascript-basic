function loop(start, end, callback) {
    if (start <= end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}
var a = ["Javascript", "PHP", "Ruby"];
loop(0, a.length - 1, function (index) {
    console.log(`arr[${index}] = ${a[index]}`);
});

function giaiThua(number) {
    if (number <= 0) {
        return 1;
    }
    return number * giaiThua(number - 1);
}

// 5 = 5 * 4 = 5 * 4 * 3 * 2 * 1 * 1
// 4 = 4 * 3 = 4 * 3 * 2 * 1 * 1
// 3 = 3 * 2 = 3 * 2 * 1 * 1
// 2 = 2 * 1 = 2 * 1 * 1
// 1 = 1 * 0 = 1 * 1
// 0 = 1

console.log(giaiThua(5));

// // Lấy phần tử trùng trong mảng (không sử dụng các hàm có sẵn trong js)
// // array = ["a", "b", "c", "a", "b", "c"] => array = ["a", "b", "c"]
// var array = ["a", "b", "c", "a", "b", "c"];
// // Không lấy các ptu trùng giá trị
// // [...] nghĩa là đang giải cái set đó bên trong các mảng ví dụ {a, b, c} => a, b, c
// console.log([...new Set(array)]);
