const express = require('express');
const dotenv = require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();

//Need to receive / send data. If We havent got these lines, we only see some undefined stuff.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));

//Overwrite the default express error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))


