const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const api_routes = require('./controllers/api_routes');
const view_routes = require('./controllers/view_routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.engine('hbs', engine({
    extname: '.hbs'
  }));
  app.set('view engine', 'hbs');
  app.set('views', './views');

app.use('/api', api_routes)
app.use('/', view_routes)

app.listen(PORT, () => {
    console.log('Server is running on localhost:%s', PORT)
})