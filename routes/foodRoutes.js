const express = require('express');
const app = express();
const foodModel = require('../models/Food');

app.use(express.json());

app.get('/foods', async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.send(foods);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post('/foods', async (req, res) => {
  try {
    const food = new foodModel(req.body);
    await food.save();
    res.send(food);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.put('/foods/:id', async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save();
    res.send('更新しました');
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete('/foods/:id', async (req, res) => {
  try {
    await foodModel.findByIdAndRemove(req.params.id);
    res.send('削除しました');
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
