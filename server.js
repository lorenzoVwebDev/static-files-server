const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.port || 3500;
app.use(express.json());

app.use(express.static('./public'))

app.listen(PORT, (bo) => {
  console.log(`server is running on ${PORT} and \n ${bo}`)
} )