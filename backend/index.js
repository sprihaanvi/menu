const express = require('express');
const app = express();

const connectToMongo = require("./db");
connectToMongo();
const port = process.env.PORT || 5000;

//for cors policy
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());

//app.use is a type of middleware
app.use('/api',require("./Routes/createUser"));
app.use('/api',require("./Routes/loginUser"));
app.use('/api',require("./Routes/displayData"));
app.use('/api',require("./Routes/orderData"));
app.use('/api',require("./Routes/displayOrders"));
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});