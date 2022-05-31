'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Fernando Mardi Nurzaman Dicoding !\n')
})
//menggunakan webserver Nginx dengan config yang sudah ada
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)