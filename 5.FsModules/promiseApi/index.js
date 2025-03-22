import * as fs from 'fs/promises'

try {
    // Creating Directory / Folder
    // await fs.mkdir('D:\\nodejs')
    // console.log("Folder Created....")
    await fs.mkdir('D:\\nodejs\\modules',{ recursive : true })
    console.log("Folder Created....")

    // Read The Content
    // const files = await fs.readdir('D:\\nodejs\\modules')
    // for (const element of files) {
    //     console.log(element)
    // }

    // Remove the directory 
    // const deleteFolder = fs.rmdir('D:\\nodejs\\modules')
    // console.log(deleteFolder)

    // Create and Write Files
    await fs.writeFile('README.md','Hello NodeJs')
    console.log("Success")

    // Read From a File
    const data = await fs.readFile('README.md','utf-8')
    console.log(data)

    // Append the data
    await fs.appendFile('README.md','Node JS is best')
    console.log("Append Successfully")

    // Copy the file
    await fs.copyFile('README.md',"info.txt")
    console.log("Copied Successfully")

    // Get File Information
    const info = await fs.stat('info.txt')
    console.log(info)
    console.log(info.isFile())
    console.log(info.isDirectory())
} catch (error) {
    console.log(error)
}