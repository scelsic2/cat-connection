require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3000;

const accessToken = process.env.accessToken

const api_routes = require('./controllers/api_routes')
// const auth_routes = require('./controllers/auth_routes')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "localhost:3000");
  res.header(
    `Authorization: Bearer ${accessToken}`,
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/api', api_routes)
// app.use('/auth', auth_routes)

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log('Server started on port %s', PORT))