const express = require('express');
const https = require('https');
const app = express();

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    
})

app.post('/', (req, res) => {
    // console.log(req.body.cityName)
    const query = req.body.cityName
    const units = "metric" 
    const apiKey = "f55591a2d60a7e74ab38840e087d7979"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&appid="+apiKey
    
    https.get(url, (response)=>{
        
        response.on('data', (data)=>{
            const weatherData = JSON.parse(data)
            const weatherDesc = weatherData.weather[0].description
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0].icon
            const imgUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            
            res.write("<p>The temperature of "+ query+" is "+ temp +" </p>")
            res.write("<h1>The weather decription of "+ query+" is "+ weatherDesc +" </h1>")
            res.write("<img src="+imgUrl+">")
          

            res.send()
            // res.send('<h1>The temperature of mumbai is '+ temp+ ' Weather is '+ weatherDesc+'</h1>')
        })

    })
})



app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})