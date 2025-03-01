// Đối tượng
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }

            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        // console.log(inputElement.value); // inputElement.value: nếu người dùng blur ra ngoài thì sẽ lấy dữ liệu
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector); // Lấy ra thẻ có class .form-message
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector); // Có 1 số trường hợp thẻ input nằm khác chỗ vì tái sử dụng nên viết thêm hàm parent
        var errorMessage;
        var rules = selectorRules[rule.selector]; // Lấy từng rule của thẻ input để validate trong trường hợp custome

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        // VD: có 2 hàm kiểm tra của email nếu hàm 1 lỗi thì dừng việc kiểm tra ở hàm 2
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case "checkbox": {
                }
                case "radio": {
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ":checked"));
                    break;
                }
                default: {
                    errorMessage = rules[i](inputElement.value);
                }
            }

            if (errorMessage) {
                break;
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage; // Hiển thị thông báo lỗi
            getParent(inputElement, options.formGroupSelector).classList.add("invalid");
        } else {
            errorElement.innerText = "";
            getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
        }

        return !errorMessage;
    }

    // Lấy element của form cần validatevalidate
    var formElement = document.querySelector(options.form);

    if (formElement) {
        // Bỏ đi hành vi khi nhấn submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);

                var isValid = validate(inputElement, rule);

                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll("[name]");
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        switch (input.type) {
                            case "radio": {
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked',
                                ).value;
                                break;
                            }
                            case "checkbox": {
                                if (!input.matches(":checked")) {
                                    values[input.name] = "";
                                    return values;
                                }

                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }

                                values[input.name].push(input.value);

                                break;
                            }
                            case "file": {
                                values[input.name] = input.files;
                                break;
                            }
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định => nghĩa là không có hàm onSubmit
                else {
                    formElement.submit();
                }
            }
        };

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input...)
        options.rules.forEach(function (rule) {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            // console.log(rule); // In ra mảng rule

            // Tìm ra các thẻ input trong rule
            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(
                        options.errorSelector,
                    );
                    errorElement.innerText = "";
                    getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
                };
            });

            // console.log(inputElement);

            // Kiểm tra nếu có thì thực hiện...
            // if (inputElement) {

            // }
        });
        // console.log(selectorRules);
    }
}

// Định nghĩa các rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => trả ra message lỗi
// 2. Khi hợp lệ => undefined
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            // trim(): loại bỏ khoảng cách khi người dùng nhập k hợp lệ
            return value ? undefined : message || "Vui lòng nhập trường này";
        },
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || "Trường này phải là email";
        },
    };
};

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        },
    };
};

Validator.isComfirmed = function (selector, getCofirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getCofirmValue() ? undefined : message || "Giá trị nhập vào không chính xác";
        },
    };
};
