const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
  res.render('addUser')
})

app.post('/users/create', (req, res) => {

  const name = req.body.name
  const occupation = req.body.ocupation
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  }

   User.create({name, occupation, newsletter})

  res.redirect('/')
})

app.get('/', function (req, res) {
  res.render('home')
})



conn.sync().then( () =>
 { app.listen(3000)
})
.catch((err) => console.log(err))