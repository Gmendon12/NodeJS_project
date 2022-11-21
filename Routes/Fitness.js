const express = require('express')
const app = express()
const data3 = require('../Controllers/Fitness')

const dataRouter3 = express.Router()
dataRouter3.route('/fitness')
.get(data3.fitnessdata)

module.exports = dataRouter3