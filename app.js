const express = require('express')
const { twig } = require('twig')

const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)
app.get('/news/:id', newsController.show)

app.use('/assets', express.static(__dirname + '/static/assets', { maxAge: 86400000 }))

module.exports = app