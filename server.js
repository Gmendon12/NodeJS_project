const express = require('express')
const app = express()
const data1 = require('./Routes/Bollywood')
const cors = require('cors')


app.use('/home', data1)

app.use(cors)

app.listen(process.env.PORT||8080, ()=>{
    console.log("Server is running")
})