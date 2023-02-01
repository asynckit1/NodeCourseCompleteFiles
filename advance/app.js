const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === "/cricket"){
        res.end('<h2>Hi i am the cricket page</h2>')
    }else if(pathName === '/badminton'){
        res.end('I am the badminton page')
    }else if(pathName ==='/car'){
        res.end('I am the car page')
    }else{
        res.end('No routes specified')
    }
})

server.listen(3000, ()=>{
    console.log('listening on port 3000')
})


