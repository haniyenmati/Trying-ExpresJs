const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students');
const errorController = require('./controller/404');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/students', studentsRouter);

app.use(errorController.notFound);


app.listen(3000);