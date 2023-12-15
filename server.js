const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/products', function (req, res) {
    const products = [
        {
            img: "1 kopi gayo.jpg",
            name: "Aceh Gayo",
            price: 10
        },
        {
            img: "2 arabica kelangi.jpg",
            name: "Arabica Kelangi",
            price: 11
        },
        {
            img: "3 toraja coffe.jpg",
            name: "Toraja Mountain",
            price: 14
        },
        {
            img: "4 robusta malang.jpg",
            name: "Robusta Malang",
            price: 12
        },
    ]
  res.json(products);
});

app.listen(PORT, () => {
    console.log(`App is listening on port: http://localhost:${PORT}/`);
});