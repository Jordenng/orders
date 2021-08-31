const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Order = require('../models/order')

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:'order fetched'
    })
})

router.post('/', (req,res,next)=>{
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        date: req.body.date
    })

    order.save().then(res=>{
        console.log(res)
    }).catch(err=> console.log(err))

    res.status(201).json({
        message:'order was created',
        order:order
    })
})

router.get('/:orderId',(req,res,next)=>{
    const id = req.orderId;
        res.status(200).json({
            message: 'order name',
            orderId: req.params.orderId
        })

})

router.delete('/:orderId',(req,res,next)=>{
    const id = req.orderId;
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    })

})
module.exports = router;