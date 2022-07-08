// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");
// console.log(first, second);

// writeFileSync(
//   "./content/bat.txt",
//   "HAHAHHA I am BAtman some of us are superhero who can w done I am Very happy to shae"
// );


// readFile , writeFile 

const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8',((err,res) => {
    if(err) {
        console.log(err)
        return
    }
    const first = res;
    readFile('./content/second.txt','utf8',((err,res) => {
        if(err) {
            console.log(err)
            return
        }
        const second = res;
        writeFile('./content/clark.txt',"I am A superman and want to learn",((err,res) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(res)
        }))
    }))
}))