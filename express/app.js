const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.end('<h1>i am from home page</h1>')
})
app.get('/cricket', (req, res) =>{
    res.end('i am the cricket page')
})
app.get('/race', (req, res)=>{
    res.end(' i am the race page')
})


app.listen(3000, ()=>{
    console.log('Server is listening on port 3000')
})

// 1.) Create a new folder called advance_plus
// 2.) Navigate to that folder
// 3.) initialise npm with default settings
// 4.) create a new app.js file
// 5.) And start a new express server and listen it on port 3000