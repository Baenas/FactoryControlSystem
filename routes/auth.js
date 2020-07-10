const mongoose = require('mongoose');
const User = mongoose.model('users');
module.exports = (app) => {

  app.post('/auth/login', async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ code: 'not-found' });
      }
      if (password == user.password) {
        /*   req.session.currentUser = user; */

        return res.json(user);
      }
      return res.status(404).json({ code: 'not-found' });
    } catch (error) {
      next(error);
    }
  });
}