import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUsers,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//routes are prefixed with /api/users/
// if its a post request register the user and if it's get request get the users
router.route('/').post(registerUser).get(protect, admin, getUsers);

// Use router.post since there is only one post method needed
router.post('/logout', logoutUser);
router.post('/auth', authUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

//*Admin Routes include:
// * getUsers,
// * getUserById,
// * updateUser,
// * deleteUsers,

export default router;
