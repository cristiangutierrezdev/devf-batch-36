const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://root:root@cluster0-07urh.mongodb.net/cinta-roja-b36?retryWrites=true&w=majority"
const User = require("./User")

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    !err ? console.log("DB connection successfully") : console.log(err)
})

module.exports = {
    User
}