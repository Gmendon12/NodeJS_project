const express = require('express')
const app = express()
const data = require('../Controllers/Bollywood')

const dataRouter = express.Router()
dataRouter.route('/bollywood').get(data.bollywooddata)
// dataRouter.get('/bollywood/:id', (req,res) =>{
//     console.log(req.params.id);
//     res.send(data)
// })

module.exports = dataRouter