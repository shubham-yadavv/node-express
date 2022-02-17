// synchhromnous or blocking
// - line by liine execution

// Asynchronous or non-blocking
// - line by line exection not guaranteed
//- callback will fire



//--------synchronous---------
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read;
console.log("message")



//---------Asynchronous----------
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
})