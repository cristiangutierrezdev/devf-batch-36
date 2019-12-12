const {
  getSingleUser,
  newUser,
  getAllUser,
  modifyThisUser,
  deleteThisUser,
  findUserEmail,
  validatePassword,
  generateToken
} = require("./resolvers/userResolver");

module.exports = {
  getUser: (req, res) => {
    const userid = req.params.userid;
    getSingleUser(userid)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  createUser: (req, res) => {
    newUser(req.body)
      .then(user => {
        res.status(201).send(user);
      })
      .catch(err => {
        res.status(409).send(err);
      });
  },
  loginUser: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    findUserEmail(email)
      .then(user => {
        return validatePassword(user, password);
      })
      .then(user => {
        const token = generateToken(user);
        res.status(200).send({ user: user, token: token });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
};
