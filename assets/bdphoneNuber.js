//Note:--BD Nuber Pattern: +8801 or 880 or 01  

let number = "01716910369";

let pattern = /^(01|\+8801|8801)[0-9]{9}$/;

console.log(pattern.test(number));