const express = require('express')
const app = express()

app.use('/category', require('./routes/category.js'))
app.use('/films', require('./routes/film.js'))
app.use(express.json())
app.listen(3000)

