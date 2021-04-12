require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(express.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:farmpassword@cluster0.enxze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
 });

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
});

mongoose.connection.on('error', (err) => {
  console.error('Error connection to mongo', err)
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})
