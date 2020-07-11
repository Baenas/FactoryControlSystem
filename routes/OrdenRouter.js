const mongoose = require('mongoose');
const Orden = mongoose.model('ordens');

module.exports = (app) => {
  app.get(`/api/orden`, async (req, res) => {
    let orden = await Orden.find();
    return res.status(200).send(orden);
  });
  app.get(`/api/orden/:id`, async (req, res) => {
    const {
      id
    } = req.params;
    let orden = await Orden.getfindById(id, req.body);

    return res.status(200).send(orden);
  });
  app.post(`/api/orden`, async (req, res) => {
    let orden = await Orden.create(req.body);
    return res.status(201).send({
      error: false,
      orden
    })
  })
  app.put(`/api/orden/:id`, async (req, res) => {
    const {
      id
    } = req.params;

    let orden = await Orden.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      orden
    })

  });
}
