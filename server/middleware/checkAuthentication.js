// Is the user logged in?
// Not specific user, just ANY user
const checkAuthentication = (req, res, next) => {
  if (!req.session.userId) return res.sendStatus(401);
  return next();
};

module.exports = checkAuthentication;
