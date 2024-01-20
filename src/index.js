const express = require('express')
const userRouter = require('./routes/user.router')
const commonPath = '/expense-control/api/v1'

const app = express()
app.use(express.json())
app.use(commonPath + '/user', userRouter)

app.listen(8087, () => console.log('Server started on 8087 port'))