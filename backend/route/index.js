const router = require('express').Router()
const user = require('../model/user')

let count = 0;
router.get('/', (req,res) =>{
    res.render('index')
})
router.post('/',async(req,res) =>{
    if(count === 50) {
        count = 0
    }
    result = await user.find().limit(10).skip(count)
    count += 10

    return res.json({
            status: 'ok', 
            data: result,
            count
        })
})

module.exports = router