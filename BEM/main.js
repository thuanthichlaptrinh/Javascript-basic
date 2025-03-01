// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");

    if (main) {
        const toast = document.createElement("div"); // Tạo ra thẻ div
        const icons = {
            success: "fa-solid fa-circle-check",
            info: "fa-solid fa-circle-info",
            warning: "fa-solid fa-circle-exclamation",
            error: "fa-solid fa-circle-exclamation",
        }; // Tạo obj icons
        const icon = icons[type]; // Lấy icon tương ứng với kiểu truyền vào ví dụ info = info
        const delay = (duration / 1000).toFixed(2); // Lấy số giây cần hiển thị

        toast.classList.add("toast", `toast--${type}`); // Thêm class toast cho thẻ div vừa tạo và modifier theo kiểu, ví dụ toast-info
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`; // Thêm animation
        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    `; // Thêm nội dung của toast vào thẻ div vừa tạo

        main.appendChild(toast);

        // Tự động gỡ toast sau duration + 1 giây
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Nhấn nút close
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
    }
}
