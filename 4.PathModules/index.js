import path from "path"

console.log(path.basename("c:\\nodejs\\index.js"))
// removing the extension
console.log(path.basename("c:\\nodejs\\index.js",".js"))

console.log(path.dirname("c:\\nodejs\\index.js"))

console.log(path.extname("c:\\nodejs\\index.js"))

console.log(path.join("c:\\nodejs\\index.js","sujit","saran"))

console.log(path.join("c:\\nodejs\\index.js","sujit","saran",".."))

console.log(path.join("c:\\nodejs\\index.js","sujit","saran","..",".."))

console.log(path.normalize("c:\\\\nodejs\\\sujit\\\saran\\\index.js"))

console.log(path.parse("c:\\nodejs\\index.js"))