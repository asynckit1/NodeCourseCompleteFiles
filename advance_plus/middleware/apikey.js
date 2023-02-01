function apikey(req, res, next){

    const apiKey = '12345'
    console.log(req.query.api_key)
    if(req.query.api_key && (req.query.api_key === apiKey)){
        next()
    }else{
        res.json({
            msg:'Invalid Authentication'
        })
    }

}


module.exports = apikey