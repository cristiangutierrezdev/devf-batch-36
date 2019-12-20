const express = require("express");
const app = express();
const {router} = require('./routes')
const cors = require('cors')
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', router)
app.use(cors())

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`App running on port ${PORT}`);
});
