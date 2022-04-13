const path = require('path');

// console.log(path);
const extensionName = path.extname("test.js");
console.log(extensionName);

const joinName = path.join(__dirname + "/hello-join")
console.log(joinName);