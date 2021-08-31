const express = require('express')
const app = express()
const http = require('http')
const morgan = require('morgan')
const orderRoutes = require('./routes/orders')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use('/orders', orderRoutes)

mongoose.connect("mongodb://localhost:27017/orders",{
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow','*')
    // res.header('Access-Control-Allow-Header','Origin,x-')
})

// app.use((req,res,next)=>{
//     const error = new Error('not found')
//     error.status = 404
//     next(error)
// })

// app.use((error, req,res,next)=>{
//     res.status(error.status)
//     res.json({
//         error:{
//             message: error.message
//         }
//     })
// })
app.listen(3000,()=>{
    console.log('listening')
})