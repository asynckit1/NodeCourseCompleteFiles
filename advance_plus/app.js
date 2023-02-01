const express = require('express')
const path = require('path')
const app = express()
const allRoutes = require('./routes/route.js')
const apiMiddleware = require('./middleware/apikey.js')

app.set('view engine', 'ejs')

// console.log(app.get('views'))
// app.use(express.static('public'))
app.use(apiMiddleware)
app.use(allRoutes)


// Application level
// Router group level
// Individual route

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})

// Templating is when you create code that is pre-built for a specific purpose.

