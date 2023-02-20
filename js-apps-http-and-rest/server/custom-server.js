const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    });

    if (req.headers['custom-header'] == 'Pesho') {
        res.send('<h1>Hello Pesho!</h1>');
    } else {
        res.send('<h1>Hello from the Custom Server!</h1>');
    }
});

app.get('/cats', (req, res) => {
    res.json([
        {
            name: "Bella",
            age: 4
        }
    ]);
});

app.listen(3000);