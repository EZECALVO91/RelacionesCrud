require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override')
const path = require('path');

const logger = require('morgan');


const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
//Para utilizar PUT y DELETE.
app.use(methodOverride('_method'))


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
    });

  // error handler
    app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;

// app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
