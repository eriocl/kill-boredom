function redirectLoginedUser(req, res, next) {
  if (req.session.user) {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = redirectLoginedUser;
