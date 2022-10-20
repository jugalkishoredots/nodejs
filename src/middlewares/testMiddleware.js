const TestMiddleware = (req, res, next) => {
    console.log("newMId");
    next();
  };

module.exports = TestMiddleware;