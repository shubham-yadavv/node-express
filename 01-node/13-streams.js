const fs = require('fs');

const steam = fs.createReadStream('./content/big.txt')

steam.on('data', (result) => {
  console.log(result.toString());
})

steam.on('error', (err) => {
  console.log(err);
});

