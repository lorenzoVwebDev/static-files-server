const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.port || 3500;

app.use(cors());

app.use(express.json());

app.use(express.static('./public'))

app.post('/image', (req, res) => {
  const {arrayLength, quantity } = req.body
  if (!arrayLength || !quantity ) return res.status(401).json({'message': 'bad-request'});

  if (arrayLength == 1 || quantity == 1) {
    res.status(200).json({'url': 'https://i.ibb.co/syWTKJt/salad1.jpg'})
  } else if (arrayLength == 2 || quantity == 2) {
    res.status(200).json({'url': 'https://i.ibb.co/DVD3Lk2/salad2.jpg'})
  } else if (arrayLength == 3 || quantity == 3) {
    res.status(200).json({'url': 'https://i.ibb.co/4jsYNN0/salad3.jpg'})
  } else if (arrayLength == 4 || quantity == 4) {
    res.status(200).json({'url': 'https://i.ibb.co/2jMfRJV/salad4.webp'})
  } else if (arrayLength == 5 || quantity == 5) {
    res.status(200).json({'url': 'https://i.ibb.co/1zcqsdw/salad5.jpg'})
  } else if (arrayLength == 6 || quantity == 6) {
    res.status(200).json({'url': 'https://i.ibb.co/QkZDDYs/salad6.jpg'})
  }
  }
)

app.listen(PORT, (bo) => {
  console.log(`server is running on ${PORT}`)
} )