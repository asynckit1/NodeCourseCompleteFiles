const express = require('express');
const router = express.Router()
// const router = require('express').Router();
// const apiMiddleware = require('../middleware/apikey.js')

// router.use(apiMiddleware)

router.get('/', (req, res) =>{
    res.render('index', {
        title:'Express and node crash course '
    })
})

router.get('/cricket', (req, res) =>{
    res.render('cricket', {
        title:'Cricket Page and Scores'
    })
})

router.get('/badminton', (req, res) =>{
    res.render('badminton', {
        title:'Badminton stats and data'
    })
})
router.get('/carrace', (req, res) =>{
    res.render('carrace', {
        title:'car race stats'
    })
})
router.get('/download', (req, res)=>{
    res.download(path.resolve(__dirname + '/cricket.html'))
})
router.get('/api/products', (req, res)=>{
    res.json([
        {
            id:1,
            name:'Cricket bat'
        },
        {
            id:2,
            name:'Racket'
        }
    ])
})


module.exports = router;