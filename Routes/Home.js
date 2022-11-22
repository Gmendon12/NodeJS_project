const express = require('express')
const app = express()
const data6 = require('../Controllers/Home')

const dataRouter5 = express.Router()
dataRouter5.route('/home')
.get(data6.home1)

module.exports = dataRouter5