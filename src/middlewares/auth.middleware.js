const auth = (req, res, next) => {
  try {
    if (req.session.user === "user" && req.session.admin) {
      next();
    } else {
      throw "no autorizado";
    }
  } catch (error) {
    res.status(401).json({ error: true, msg: error });
  }
};

export { auth };
