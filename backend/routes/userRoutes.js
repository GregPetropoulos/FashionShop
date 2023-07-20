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

//routes are prefixed with /api/users/
// if its a post request register the user and if it's get request get the users
router.route('/').post(registerUser).get(getUsers);

// Use router.post since there is only one post method needed
router.post('/logout', logoutUser);
router.post('/login', authUser);

router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUsers).get(getUserById).put(updateUser)


//*Admin Routes include:  
// * getUsers,
// * getUserById,
// * updateUser,
// * deleteUsers,


export default router;
