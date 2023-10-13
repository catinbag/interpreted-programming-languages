const myLogger = function (req, res, next) {
  req.requestTime = Date.now()
  req.requestId = Math.random()
  console.log('LOGGED', req.path, req.requestTime);
  next();
};

module.exports = {
  myLogger
}