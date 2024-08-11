const express = require('express');
const cors = require('cors');  // Import cors
const app = express();

const connectToMongo = require("./db");
connectToMongo();
const port = process.env.PORT || 5000;

// Allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://menu-brnh.onrender.com"  // Add your frontend's Render domain here
];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // If you need to allow cookies or authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
};

// Use CORS middleware
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());

// Routes
app.use('/api', require("./Routes/createUser"));
app.use('/api', require("./Routes/loginUser"));
app.use('/api', require("./Routes/displayData"));
app.use('/api', require("./Routes/orderData"));
app.use('/api', require("./Routes/displayOrders"));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
