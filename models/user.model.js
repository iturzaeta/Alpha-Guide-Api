const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10

const {countryList} = require('../const/countryList');

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const tokenRandomGenerate = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}



const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [EMAIL_PATTERN, 'Email is invalid']
  },

  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name needs at last 8 chars'],
    trim: true
  },
  username: {
    type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: [true, 'This username already exists']
  },
  image: {
    type: String,
    default: ""
  },
  country: { //aqui ponerlo como objeto
    type: String,
    required: true,
    enum: countryList
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password needs at last 8 chars']
  },
  validateToken: {
    type: String,
    unique: true,
    default: tokenRandomGenerate,
},

  validated: {
    type: Boolean,
    default: false
  }
}, 

{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
})

userSchema.pre('save', function(next) {
  const user = this;
  
  if (!user.isModified('password')) {
    next();
  } else {
    bcrypt.genSalt(SALT_WORK_FACTOR)
      .then(salt => {
        return bcrypt.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
            next();
          })
      })
      .catch(error => next(error))
  }
});

userSchema.virtual('trips', {
  ref: 'Trip',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});


userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}


const User = mongoose.model('User', userSchema);
module.exports = User;