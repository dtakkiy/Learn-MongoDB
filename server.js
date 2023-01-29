const express = require('express');
const app = express();
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes');
app.use(foodRouter);
require('dotenv').config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log(`DB接続に成功しました！`))
  .catch((err) => console.log(`error ${err}`));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port ${PORT} を監視中...`);
});
