const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

app.use(cors());

//environment constants but im not using anywhere for simplicity 
//usable cases mongoconnection string and jwt secrate etc
env.config();
app.use(morgan('dev'));

//routes
//const userRoutes  = require('./routes/user');
const adminOnBoardingRoutes = require('./routes/admin/onBoarding/onBoardingRoute');
const userOnBoardingRoutes = require('./routes/user/onBoarding/onBoardingRoute');

mongoose.connect(
    'mongodb+srv://akshay:akshaymongodb@task.3nr94ni.mongodb.net/wysp_task',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('Database connected')
})

app.use(bodyParser());
//app.use('/api', userRoutes);
app.use('/api',adminOnBoardingRoutes);
app.use('/api',userOnBoardingRoutes);

app.use((req, res, next) => {
    next(createError.NotFound());
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
  });

app.listen(2022,() => {
    console.log(`server is running at PORT 2022`)
});