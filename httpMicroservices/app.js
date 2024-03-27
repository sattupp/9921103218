const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/averageCalculator', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
   console.log('Connected to MongoDB');
});

const numberSchema = new mongoose.Schema({
  name:String,
  description:String,
  value: Number,
});

const Number = mongoose.model('Number', numberSchema);
app.post('/addNumber', async (req, res) => {
  const number = new Number({ value: req.body.value });
  await number.save();
  const numbers = await Number.find();
  const average = numbers.reduce((acc, cur) => acc + cur.value, 0) / numbers.length;
  res.json({ average });
});






