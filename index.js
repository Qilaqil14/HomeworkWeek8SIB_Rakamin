const express = require('express')
const app = express()

app.use('/', require('./routes/dvdrental.js'))
app.use(express.json())
app.listen(3000)

