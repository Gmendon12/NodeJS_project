const express = require('express')
const app = express()
const data = require("./Routes/Home")
const datah2 = require("./Routes/Home1")
const datah3 = require("./Routes/Home2")
const datah4 = require("./Routes/Home3")

const data1 = require('./Routes/Bollywood')
const data2 = require('./Routes/Technology')
const data3 = require('./Routes/Hollywood')
const data4 = require('./Routes/Fitness')
const data5 = require('./Routes/Food')
const cors = require('cors')

app.use(cors({
    origin:"*", //most preferred
}))

app.use('/home', data)
app.use('/home', datah2)
app.use('/home', datah3)
app.use('/home', datah4)

app.use('/home', data1)
app.use('/home', data2)
app.use('/home', data3)
app.use('/home', data4)
app.use('/home', data5)

app.get('/', (req,res)=>{
res.write("hello");
    res.end()
})


app.listen(process.env.PORT||8080, ()=>{
    console.log("Server is running")
})
