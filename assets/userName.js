
let userName = "Alamin_12&";

let namePattern = /^[a-zA-Z][a-zA-Z0-9\.-_]{6,25}[a-zA-Z0-9]$/;

console.log(namePattern.test(userName));