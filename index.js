const express = require('express')

const homeRoute = require('./routes/home')

const app = express()

app.use(homeRoute)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000)