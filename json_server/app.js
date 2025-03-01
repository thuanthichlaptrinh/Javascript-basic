var courseApi = "http://localhost:3000/courses";

function start() {
    getCouses(renderCourses);
    handleCreateForm();
}

start(); // start ứng dụng web lên

// Functions
// Lấy tất cả  khóa học
function getCouses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <div>
                    <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                    <button onclick="">Sửa</button>
                </div>                
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join("");
}

// Tạo 1 khóa học
function createCourse(data, callback) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(courseApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

// Xóa 1 khóa học
function handleDeleteCourse(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    fetch(courseApi + "/" + id, options)
        .then(function (response) {
            response.json();
        })
        .then(function () {
            var courseItem = document.querySelector(".course-item-" + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function handleCreateForm() {
    var createBtn = document.querySelector("#btn-create");

    createBtn.onclick = function () {
        // Lấy giá trị của 2 input
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = { name: name, description: description };
        createCourse(formData, function () {
            getCouses(renderCourses);
        });
    };
}
