const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(__dirname + '/images')); // optional, if you place images

// Endpoints
app.get('/api/categories', (req, res) => {
  res.json(data.categories);
});

app.get('/api/items', (req, res) => {
  const cat = req.query.category;
  if (cat && cat !== 'all') {
    return res.json(data.items.filter(it => it.cat === cat));
  }
  res.json(data.items);
});

app.get('/api/promo', (req, res) => {
  res.json(data.promo);
});

// simple health
app.get('/api/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Mock API running at http://localhost:${port}/api`));
