// import path from 'path';

// file system - promise api 

import * as fs from 'fs/promises';

// try {
//     await fs.rmdir('c:\\Nodejs\\ch-3\\test\\demo.js');
//     console.log("removed...")
// } catch (error) {
//     console.log(error)
    
// }

// creating and reading file 

try {
   await fs.appendFile('readme.txt','whatspp bro');
    console.log("File created....")

} catch(error) {
    console.log(error)
}
