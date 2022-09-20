const fs = require("fs");
const data = fs.readFileSync("./notes.txt", "utf-8");
console.log(data);
