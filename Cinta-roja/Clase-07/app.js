const express = require("express");
const app = express();
const { User } = require("./modules");
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/get/user/:userid", (req, res) => {
  const id = req.params.userid;
  User.findById(id, (err, user) => {
    !err ? res.status(200).send(user) : res.status(404).send(err);
  });
});

app.get("/api/v1/get/all/users", (req, res) => {
  User.find({ is_active: true }, (err, users) => {
    !err ? res.status(200).send(users) : res.status(404).send(err);
  });
});

app.post("/api/v1/create/user", (req, res) => {
  const { name, age, last_name, gender, is_active } = req.body;

  const newUser = User({
    name,
    last_name,
    age,
    is_active,
    gender
  });
  newUser.save((err, user) => {
    !err ? res.status(201).send(user) : res.status(409).send(err);
  });
});

app.put("/api/v1/modify/user/:userid", (req, res) => {
  const id = req.params.userid;
  const { name, age, last_name, gender, is_active } = req.body;

  const newData = {
    name,
    last_name,
    age,
    gender
  };

  User.findByIdAndUpdate(id, { $set: newData }, { new: true }, (err, user) => {
    !err ? res.status(200).send(user) : res.status(404).send(err);
  });
});

app.delete("/api/v1/delete/user/:userid", (req, res) => {
  const id = req.params.userid;
  User.findByIdAndUpdate(
    id,
    { $set: { is_active: false } },
    { new: true },
    (err) => {
      !err
        ? res.status(200).send("The User has been exterminated")
        : res.status(404).send(err);
    }
  );
});
app.patch("/api/v1/modify/user/name/:userid", (req, res) => {
  const id = req.params.userid;
  const newUserName = req.body.name
  User.findByIdAndUpdate(
    id,
    { $set: { name: newUserName } },
    { new: true },
    (err, user) => {
      !err
        ? res.status(200).send("The User has been changed")
        : res.status(404).send(err);
    }
  );
});

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`App running on port ${PORT}`);
});
