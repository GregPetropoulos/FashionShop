import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: { Type: String, required: true },
    email: { Type: String, required: true, unique: true },
    password: { Type: String, required: true },
    isAdmin: { Type: String, required: true, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
