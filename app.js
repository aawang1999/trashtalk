const express = require('express')
const exphbs = require('express-handlebars')
const trashtalkGenerator = require('./models/trashtalkGenerator')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = trashtalkGenerator(options)
  res.render('index', { trashTalk: trashTalk, options: options })
})

app.listen(port, () => {
  console.log(`Express is running on port ${port}.`)
})