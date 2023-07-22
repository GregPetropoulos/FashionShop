import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
// *Logic for matching plain text password at login against encrypted password in db in userController
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//* ENCRYPT PASSWORD BEFORE IT'S SENT TO DB BY USING THE .pre
userSchema.pre('save', async function (next) {
  //if not changing the user's password then move on
  if (!this.isModified('password')) {
    next();
  }
  //if password is changed then hash it
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model('User', userSchema);
export default User;
