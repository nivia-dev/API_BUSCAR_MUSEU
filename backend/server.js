const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();

app.use(cors());

app.get('/api/museus', (req, res) => {
  const { pagina = 1, limite = 20 } = req.query; // Página 1, 20 registros por página por padrão
  const offset = (pagina - 1) * limite;

  db.all(`SELECT * FROM museus LIMIT ? OFFSET ?`, [limite, offset], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
