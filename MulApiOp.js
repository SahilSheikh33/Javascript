const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
app.use(bodyParser.json())

app.post('/add',(req, res) => {
    const {number1 , number2} = req.body;
    const result = number1 +  number2;
    const response = {
        number1,
        number2,
        operation : 'add', 
        result 
    };
    res.json(response);
});

app.post('/sub',(req, res) => {
    const {number1, number2} = req.body;
    const result = number1 - number2;
    const response = { 
        number1, 
        number2,
        operation: 'sub',
        result
    };
    res.json(response);
});

app.post('/mul',(req, res) => {
    const {number1, number2} = req.body;
    const result = number1 * number2;
    const response = { 
        number1, 
        number2,
        operation: 'mul',
        result
    };
    res.json(response);
});

app.post('/div', (req, res) => {
    const {number1, number2} = req.body;
    const result = number1 / number2;
    const response = {
        number1,
        number2,
        operation: 'division',
        result
    };
    res.json(response);
})

app.post('/mod',(req, res) => {
    const {number1, number2} = req.body;
    const result = number1 % number2;
    const response = { 
        number1, 
        number2,
        operation: 'mod',
        result
    };
    res.json(response);
});
app.listen(3000,() => {
    console.log('The server is running on the port number 3000');
});