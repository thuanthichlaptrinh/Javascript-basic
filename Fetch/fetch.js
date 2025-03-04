var postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
    .then(function (response) {
        return response.json(); // response.json() = JSON.parse -> JSON => Javascript type
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.id}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join("");
        document.getElementById("post-block").innerHTML = html;
    })
    .catch(function (err) {
        console.log("Đường link không truy cập được");
    });
