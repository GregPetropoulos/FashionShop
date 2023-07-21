import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';
// TWO FUNCTIONS A PROTECT AND ADMIN CHECK

//* PROTECT ROUTES
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // READ THE JWT ('jwt') FROM THE COOKIE IN THE CONTROLLER
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //ONCE THE TOKEN IS DECODED IT BECOMES AN OBJECT WITH {userId:user._id} from the db
      req.user = await User.findById(decoded.userId).select('-password'); //don need to return the user's password just the data
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error('Not authorized,token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// * ADMIN MIDDLEWARE
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as admin');
  }
};

export { protect, admin };
