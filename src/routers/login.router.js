import { Router } from "express";
const login = Router();

login.get("/", (req, res) => {
  const { user, password } = req.query;
  try {
    if (user !== "admin" || password !== "admin") {
      throw "Login failed!";
    }
    req.session.user = user;
    req.session.usuario = true;
    req.session.admin = false;
    res.render("logeado", {
      user: req.session.user,
    });
  } catch (error) {
    res.status(400).json({ error: true, msg: error });
  }
});

export { login };
