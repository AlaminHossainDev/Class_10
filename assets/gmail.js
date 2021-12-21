let email = "alamin@lfwf.com";

let ePattern = /^[a-z0-9\._]*@(gmail|yaaho|domain|webmail|[a-z0-9\._-]*\.com)$/;

console.log(ePattern.test(email));