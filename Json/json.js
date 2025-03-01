//-----------------------------------------------------------------------------
// JSON - Javascript Object Notation
// - Là định dạng dữ liệu (chuỗi)
// - Có thể sử dụng json để định dạng: Number, String, Boolean, Null, Array, Object...
// - Mã hóa / Giải mã
// - Encode / Decode
// - stringify: Từ Javascript --> JSON
// - parse: Từ JSON --> Javascript

// var json = '["Javascript", "Java"]';
// var json = '{"name":"Minh Thuan", "age":18}';
// var object = JSON.parse(json);

// console.log(
//     JSON.stringify({
//         name: "Minh Thuan",
//         age: 20,
//     }),
// );
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// - Promise: là khái niệm sinh ra để xử lý thao tác bất đồng bộ và trước khi có promise
// thì chúng ta thường sử dụng callback và callback nó sẽ xảy ra vấn đề là callback hell
// nó khó nhìn thế nên là promise nó sẽ giúp chúng ta khắc phục được tình trạng callback hell
// để giúp chúng ta viết code không bị sâu, dễ đọc dễ hiểu.
// - Để tạo ra được promise thì ta sử dụng từ khóa new Promise và trong constructor ta truyền vào hàm
// - Sync (đồng bộ)
// - Async (bất đồng bộ)
// - setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame => là bất đồng bộ: tức là viết trước nó sẽ không chạy xong trước

// Nếu không có promise thì sử dụng callback rắc rối như thế này:
// setTimeout(function () {
//     console.log(1); // Việc 1
//     setTimeout(function () {
//         console.log(2); // Việc 2
//         setTimeout(function () {
//             console.log(3); // Việc 3
//             setTimeout(function () {
//                 console.log(4); // Việc 4
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// b1. Khởi tạo promise
// b2. tạo executor
// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // Logic xử lý
//         // Thành công: resolve()
//         // Thất bại: reject()

//         // Fake call API
//         resolve([
//             {
//                 id: 1,
//                 name: "Java core",
//             },
//         ]);

//         // reject("Có lỗi!");
//     },
// );

// promise
//     .then(function (courses) {
//         console.log("Course 1: " + courses);
//         return courses;
//     })
//     .then(function (courses) {
//         console.log("Course 2: " + courses);
//         return courses;
//     })
//     .then(function (courses) {
//         console.log("Course 3: " + courses);
//         return courses;
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log("Done");
//     });

// === Promise example ===
var users = [
    {
        id: 1,
        name: "Minh Thuan",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Son Tung",
    },
    //...
];

var comments = [
    {
        id: 1,
        content: "Khóa học này ok quá",
        user_id: 3,
    },
    {
        id: 2,
        content: "Cảm ơn bạn.",
        user_id: 1,
    },
];

// 1. Gọi API lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy thông tin của user

// Fake API - Tạo ra 1 hàm lấy comments
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        // Lọc ra những user nằm trong ds
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    }, 1000);
}

getComments()
    .then(function (comments) {
        // Danh sách các user lấy được
        var userIds = comments.map(function (comments) {
            return comments.user_id;
        });
        // console.log(userIds);

        return getUsersByIds(userIds).then(function (users) {
            // console.log(users);
            return {
                users: users,
                comments: comments,
            };
        });
    })
    .then(function (data) {
        // console.log(data);
        var commentBlock = document.getElementById("comment-block");
        var html = "";

        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });

            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;
    });
//-----------------------------------------------------------------------------
