const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.json(products);
    // res.json([{'name': 'product1'}, {'name': 'product2'}]);
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});