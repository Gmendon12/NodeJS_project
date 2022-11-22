const express = require('express')
const app = express()
const data8 = require('../Controllers/Home')

const dataRouter7 = express.Router()
dataRouter7.route('/home3')
.get(data8.hometoppost)

module.exports = dataRouter7