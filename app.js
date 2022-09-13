const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const categoryRoutes = require('./routes/category')


const app = express()

//без этого нельзя было отправить body в calle
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/auth', authRoutes)
app.use('/analytics', analyticsRoutes)
app.use('/order', orderRoutes)
app.use('/position', positionRoutes)
app.use('/category', categoryRoutes)




module.exports = app