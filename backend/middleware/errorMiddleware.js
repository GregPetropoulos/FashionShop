// ERROR HANDLING THE ERROR OBJECT WITH EXPRESS

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); //go to next piece of middleware
};

//BASED OFF EXPRESS DOCS
const errorHandler = (err, req, res, next) => {
  //Some error status codes will come back with a 200 so we need to set it to 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  res
    .status(statusCode)
    .json({ message: message, stack: process.env.NODE_ENV === 'production' ? null : err.stack });
};
export { errorHandler, notFound };
