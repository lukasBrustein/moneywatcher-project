const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

    const spendings = [];

    app.use(bodyParser.json());

    app.get('/api/spendings', (req, res) => {
        console.log('api/spendings called') 
        res.json(spendings)  
    });

    app.post('/api/spendings', (req, res) => {
        const spending = req.body.spending;
        console.log('Adding spending::::', spending);
        spanedings.push(spending);
        res.json("Spending added");
    });

    app.get('/', (req, res) => {
        res.send('App works !!!')
    });

    app.listen(port, () => {
        console.log('Server listening on the port ::${port}');
    });