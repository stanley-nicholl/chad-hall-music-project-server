const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')
app.disable('etag')

// const { 
//     authRouter,
//     musicRouter,
//     userRouter,
// } = require('./routes')

// app.use('/api/auth', authRouter)
// app.use('/api/music', musicRouter)
// app.use('api/user', userRouter)

app.use((req, res) => {
    const status = 404
    const message = `Could not ${req.method} ${req.path}`
    res.status(status).json({ status, message })
})

app.use((err, _req, res, _next) => {
    console.log(err)
    const status = err.status || 500
    const message = err.message || 'Something went wrong!'
    res.status(status).json({ status, message })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})