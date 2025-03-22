
// Blocking code i.e synchronous
// console.log("Start")
// alert("Bloking")
// console.log("End")

// Non Blocking code i.e Asynchronous
// console.log("Start")
// setTimeout(()=>{
//     alert("Non-Blocking")
// },2000)
// console.log("End")

// Real-Time Example
// ---------------------
// Without callback
// -------------------
import fs from 'fs'

console.log("First")

fs.readFile('Text.txt',"UTF-8",(err,res) => {
    err ? console.log(err) : console.log(res)
})

console.log("End")

