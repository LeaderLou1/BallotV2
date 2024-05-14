const postAuthorization = (req, res, next) => {
  if (req.user && req.user.is_rep) {
    next();
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
};

module.exports = postAuthorization;
