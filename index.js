const path = require('path')

const express = require('express')

const mongoose = require('mongoose')

const app = new express()



app.use(require('express-edge'))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/contact', (req, res) => {
    res.render('contact-me')
})

app.listen(3000, () => {
    console.log('App listening on port 3000')
})