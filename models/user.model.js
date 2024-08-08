import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `name is a required field`]
  },
  email: {
    type: String,
    required: [true, `name is a required field`],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, `email format is wrong `]
  },
  photo: String,

  password: {
    type: String,
    required: [true, `Password  is a required field`],
    minlength: 8,
    maxlength: 15
  },
  ConfirmPassword: {
    type: String,
    required: [true, `Password  is a required field`],
    minlength: 8,
    maxlength: 15,
    validate: {
      validator: function (val) {
        return val == this.password
      },
      message: `password and confirm password must be same`
    }
  }
})

userSchema.pre(`save`, async function (next) {
  if (!this.isModified(`password`)) return next()

  this.password = await bcrypt.hash(this.password, 12)
  this.ConfirmPassword = undefined
})

const User = mongoose.model('User', userSchema)
export { User }
