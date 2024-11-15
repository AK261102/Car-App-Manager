const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log("User ID from token:", req.user._id);  // Log user ID
    next();
  } catch (ex) {
    console.error("Invalid token:", ex.message);
    res.status(400).send("Invalid token.");
  }
};

module.exports = auth;
