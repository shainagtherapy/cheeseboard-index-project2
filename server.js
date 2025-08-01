const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');


const menuController = require('./controllers/menu.js');
const ordersController = require('./controllers/orders.js');

const port = process.env.PORT ? process.env.PORT : '3000';

const path = require('path');

const authController = require('./controllers/auth.js');
const { rawListeners } = require("./models/user.js");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json()); // missing code for postman to work with raw, json entry!
app.use(express.urlencoded({ extended: true })); // changed to true in order to connect to Postman
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session ({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToView);
app.use('/orders', ordersController)

app.get('/', async (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/menu`)
  } else {
  res.render('index.ejs')
   }
});

app.use('/auth', authController);
app.use(isSignedIn);
app.use('/users/:userId/menu', menuController)


app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
