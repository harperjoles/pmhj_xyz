
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('views/index'))
  .get('/about', (req, res) => res.send(about()))
  .get('/cruise', (req, res) => res.send(cruise()))
  .get('/fresh', (req, res) => res.send(fresh()))
  .get('/mobile', (req, res) => res.send(mobile()))
  .get('/porfolio', (req, res) => res.send(porfolio()))
  .get('/retro', (req, res) => res.send(retro()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
