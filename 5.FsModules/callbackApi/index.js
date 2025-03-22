import * as fs from 'fs'

fs.mkdir("D:\\node",(error) => {
    if(error) throw error
    console.log("Directory Created")
})
