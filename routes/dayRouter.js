const mongoose = require('mongoose');
const Day = mongoose.model('day');

module.exports = (app) => {
  app.get(`/api/day`, async (req, res) => {
    let day = await Day.find();
    return res.status(200).send(day);
  });
  app.post(`/api/day`, async (req, res) => {
    let newday = await Day.create(req.body);
    return res.status(201).send({
      newday
    })
  })
}