import * as fs from 'fs'

// create directory 
fs.mkdirSync("D:\\node\\modules", {recursive : true})
console.log("Directory Created Succesfully")
// Remove Directory
fs.rmdirSync("D:\\node\\modules")
console.log("Directory Removed Successfully")