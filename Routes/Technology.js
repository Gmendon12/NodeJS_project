const express = require('express')
const app = express()
const data1 = require('../Controllers/Technology')

const dataRouter1 = express.Router()
dataRouter1.route('/technology')
.get(data1.technologydata)

module.exports = dataRouter1