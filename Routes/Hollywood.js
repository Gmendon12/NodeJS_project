const express = require('express')
const app = express()
const data2 = require('../Controllers/Hollywood')

const dataRouter2 = express.Router()
dataRouter2.route('/hollywood')
.get(data2.hollywooddata)

module.exports = dataRouter2