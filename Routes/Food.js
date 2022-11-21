const express = require('express')
const app = express()
const data4 = require('../Controllers/Food')

const dataRouter4 = express.Router()
dataRouter4.route('/food')
.get(data4.fooddata)

module.exports = dataRouter4