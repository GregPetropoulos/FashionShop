import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

  //* SET JWT AS HTTP-only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', //if not in dev env then false, use http in prod use https
    sameSite: 'strict', //prevent attacks
    maxAge: 30 * 24 * 60 * 1000, //30 days
  });
};
export default generateToken;
