const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#c-password");
const etext = document.querySelector(".error-text");

function myFunc() {
    if ((pwd1.value === pwd2.value && pwd1.value === "") || (pwd1.value !== pwd2.value)) {
        if (!pwd1.classList.contains("error")) {
            pwd1.classList.add("error");
            pwd2.classList.add("error");
            etext.textContent = "* Passwords do not match";
            if (pwd1.classList.contains("correct")) {
                pwd1.classList.remove("correct");
                pwd2.classList.remove("correct");
            }
        }
    }
    else if (pwd1.value === pwd2.value) {
        if (pwd1.classList.contains("error")) {
            pwd1.classList.remove("error");
            pwd2.classList.remove("error");
            etext.textContent = "";
            pwd1.classList.add("correct");
            pwd2.classList.add("correct");
        }
    }
};

pwd1.addEventListener("keyup", myFunc);
pwd2.addEventListener("keyup", myFunc);