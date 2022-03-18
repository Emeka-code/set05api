require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 1111
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('api is ready for use')
})

app.listen(port, ()=>{
    console.log(`listening to port: ${port}`)
})