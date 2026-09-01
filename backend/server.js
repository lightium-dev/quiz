const express= require('express');
const cors = require('cors');
const questions = require('./data/questions');
const app = express();

const PORT = 3000;
0app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Quiz Eclair backend is running');
});

app.get('/questions', (req, res) => {
  const { category } = req.query;
  const filtered = category
    ? questions.filter((q) => q.category === category)
    : questions;
  res.json(filtered);
});

app.post('/score', (req, res) => {
  const { score } = req.body;
  console.log('Score received:', score);
  res.json({ received: true, score });
});

app.listen(PORT, () => {
  console.log(`Quiz Eclair backend listening on http://localhost:${PORT}`);
});