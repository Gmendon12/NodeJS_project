const express = require('express')
const app = express()
const data7 = require('../Controllers/Home')

const dataRouter6 = express.Router()
dataRouter6.route('/home2')
.get(data7.homelatestarticles)

module.exports = dataRouter6