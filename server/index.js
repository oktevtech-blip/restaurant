const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'heritage',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.post('/order', (req, res) => {
  const { name, phone, cart } = req.body;
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace('Shs.', '').replace(',', '')), 0);
  const order = { name, phone, cart: JSON.stringify(cart), totalPrice };

  const query = 'INSERT INTO orders SET ?';

  db.query(query, order, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error placing order');
    } else {
      res.status(200).send('Order placed successfully');
    }
  });
});

app.get('/orders', (req, res) => {
  const query = 'SELECT * FROM orders';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching orders');
    } else {
      res.status(200).json(results.map(order => ({
        ...order,
        cart: JSON.parse(order.cart)
      })));
    }
  });
});

app.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM orders WHERE id = ?';

  db.query(query, id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error removing order');
    } else {
      res.status(200).send('Order removed successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

