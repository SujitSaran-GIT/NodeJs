import fs from "fs"

for (let index = 0; index < 1000; index++) {
    fs.writeFileSync("./data.txt",`${index}\n`,{flag:"a"})
}