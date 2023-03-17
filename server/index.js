const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); //for post request body as json..parse!
app.use(cors());//to whitelist the api request

const db = require('./models');

//Routers
const productRouter = require('./routes/productRoutes')
app.use('/api/product', productRouter);

const checkoutRouter = require('./routes/checkoutRoutes');
app.use('/api/checkout', checkoutRouter);

const authRouter = require('./routes/authRoutes');
app.use('/api/auth', authRouter);

const { API_PORT } = process.env;
const port = API_PORT || 3001;

//check if every single table exists in the database, if it don't, create it!
db.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
});

//index2
// const http = require("http");
// const application = require("./app");
// const server = http.createServer(application);

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });