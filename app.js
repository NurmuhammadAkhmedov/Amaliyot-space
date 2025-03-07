const users = {
    "111111": { name: "Akromxo'ja", surname: "Akmalov", coin: 286, xp: 1050, group: "F2-2054 | Azamat Ortiqov", password: "011110" },
    "1119339": { name: "Nurmuhammad", surname: "Ahmedov", coin: 205, xp: 540, group: "F2-2054 | Azamat Ortiqov", password: "64932" },
    "750575":{ name: "Shuhrat", surname: "Zoirov", coin: 1171, xp: 180, group: "F2-2054 | Azamat Ortiqov", password: "100001"}
};


const form = document.querySelector(".form");
const idInput = document.querySelector(".inpu1");
const passwordInput = document.querySelector(".input2");
const loginButton = document.querySelector(".btn2");


function checkInputs() {
    if (idInput.value && passwordInput.value) {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "red";
    } else {
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "rgb(241, 89, 89)";
    }
}


idInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = idInput.value;
    const userPassword = passwordInput.value;

    if (users[userId] && users[userId].password === userPassword) {
        localStorage.setItem("user", JSON.stringify(users[userId]));
        window.location.href = "home.html";
    } else {
        alert("ID yoki parol noto'g'ri!");
    }
});
