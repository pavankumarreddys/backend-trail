const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Pavan Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
