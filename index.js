const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
// IMPORT MODELS
require('./models/Product');
require('./models/User');
require('./models/Notes');
require('./models/Day');
require('./models/Salas');
const app = express();
require('dotenv').config();
mongoose.Promise = global.Promise;
const dbPath = process.env.MONGODB_URI;
mongoose
  .connect(dbPath)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.backURl,
  })
);
//IMPORT ROUTES
require('./routes/productRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/notesRouter')(app);
require('./routes/auth')(app);
require('./routes/dayRouter')(app);
require('./routes/SalasRouter')(app);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});