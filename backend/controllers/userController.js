import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Auth the user and get token
// @route   POST /api/users/login
// @access  PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a user
// @route   POST /api/users
// @access  PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update user profile');
});

// *ADMIN CONTROLLER LOGIC
//* ==========================
//* ==========================
// @desc    Get all users for as an admin action
// @route   GET /api/users
// @access  PRIVATE/ADMIN
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get all users, by admin action only');
});

// @desc    Get a user by id for as an admin action
// @route   GET /api/users/:id
// @access  PRIVATE/ADMIN
const getUserById = asyncHandler(async (req, res) => {
  res.send('Get a user by id, by admin action only');
});

// @desc    Update a user, for as an admin action
// @route   PUT /api/users/:id
// @access  PRIVATE/ADMIN
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user, by admin action only');
});
// @desc    Delete users for as an admin action
// @route   DELETE /api/users/:id
// @access  PRIVATE/ADMIN
const deleteUsers = asyncHandler(async (req, res) => {
  res.send('Delete user, by admin action only');
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUsers,
};
