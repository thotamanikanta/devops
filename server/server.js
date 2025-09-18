const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const taskRoutes = require('./routes/tasks');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

// Example POST route
app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});
// // Database connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Database connection error:', error);
//     process.exit(1);
//   });

// Graceful shutdown
// process.on('SIGINT', async () => {
//   console.log('Changed again to - Shutting down gracefully...');
//   await mongoose.connection.close();
//   process.exit(0);
// });

app.listen(PORT, () => {
  console.log(`"Server is running on" ${PORT}`);
});
