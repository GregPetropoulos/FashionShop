// REPLACING THE ASYNCHANDLER LIB WITH MY OWN BUILT IN HANDLER

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
export default asyncHandler;
