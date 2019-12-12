const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: Number,
    is_active: {
        type: Boolean,
        default: true
    },
    gender: {
        type: String,
        enum: ["M", "m", "F", "f", "O", "o"]
    }
}, { timestamps: true })

userSchema.pre("save", function(next) {
    let user = this;
    if (!user.isModified("password")) {
      return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });
  
  userSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return next(err);
      next(null, isMatch);
    });
  };



const User = mongoose.model("User", userSchema)

module.exports = User