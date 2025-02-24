const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*{}[]+=()";
const allchar = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.contentEditable("copy");
}