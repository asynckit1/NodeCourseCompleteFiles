const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/substract', (req, res) => {
    res.sendFile(__dirname + '/sub.html')
})

app.post('/', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const sum = num1 + num2;
    res.send(`The sum is ${sum}`)
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000')
})