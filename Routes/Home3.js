const express = require('express')
const app = express()
const data9 = require('../Controllers/Home')

const dataRouter8 = express.Router()
dataRouter8.route('/home4')
.get(data9.homelateststories)

module.exports = dataRouter8