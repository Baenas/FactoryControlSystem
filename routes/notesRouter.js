const mongoose = require('mongoose');
const Notes = mongoose.model('notas');
module.exports = (app) => {
  app.get(`/api/notes`, async (req, res) => {
    let notes = await Notes.find();
    return res.status(200).send(notes);
  });
  app.post(`/api/notes`, async (req, res) => {
    let newnotes = await Notes.create(req.body);
    return res.status(201).send({
      error: false,
      newnotes
    })
  })
  app.put(`/api/notes/:id`, async (req, res) => {
    const {
      id
    } = req.params;

    let note = await Notes.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      note
    })

  });
  app.delete(`/api/notes/:id`, async (req, res) => {
    const {
      id
    } = req.params;

    let note = await Notes.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      note
    })

  })
}