// file system module (fs)
const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');


// writes the file if there is content in in it will replace the content
// writeFileSync(
//     './node/modules/fs module/content/combined.txt',`here is the combined file :\n${first}\n${second}`
//     );


// to append to the file
writeFileSync(
    './content/combined.txt',`here is the combined file :\n${first}\n${second}`,
    // {flag: 'a'}
    );
console.log('done with this task')
console.log('starting the next one')