const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use('/', (req, res) => {
  return res.status(200).send({
    message: 'Hello express deployment',
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
