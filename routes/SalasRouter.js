const mongoose = require('mongoose');
const Salas = mongoose.model('salas');
module.exports = (app) => {
  app.get(`/api/salas`, async (req, res) => {
    let salas = await Salas.find();
    return res.status(200).send(salas);
  });
  app.get(`/api/salas/:id`, async (req, res) => {
    const {
      id
    } = req.params;
    let sala = await Salas.findById(id, req.body);

    return res.status(200).send(sala);
  });
  app.post(`/api/salas`, async (req, res) => {
    let sala = await Salas.create(req.body);
    return res.status(201).send({
      error: false,
      sala
    })
  })
  app.put(`/api/salas/:id`, async (req, res) => {
    const {
      id
    } = req.params;

    let sala = await Salas.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      sala
    })

  });
}
