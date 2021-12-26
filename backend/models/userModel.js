import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }

}, {
  timestamps: true //This will enable the schema to be created authomatically
})

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
  if (!this.isModified('password')){
    next()
  }
  this.password = await bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('User', userSchema)

export default User