const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(new HttpError("Authentication failed.", 401));
    }

    const decodedToken = jwt.verify(token, "superSecret");
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (ex) {
    return next(new HttpError("Authentication failed.", 401));
  }
};
