let password = "HElloworld12*#";

let pattern = /^[a-ZA-Z][a-zA-Z0-9]{4,15}[~!@#$%^&*\(\)_+]{1,3}$/;

console.log(pattern.test(password));