import { Router } from "express";
const home = Router();

home.get("/", (req, res) => {
  try {
    if (req.session.contador) {
      req.session.contador++;
    } else {
      req.session.contador = 1;
    }

    if (req.session.usuario) {
      res.render("logeado", {
        title: "LOGEADO",
        user: req.session.user,
      });
    } else {
      res.render("home", {
        title: "Home",
        user: req.session.user || "invitado",
      });
    }
  } catch (error) {}
});

export { home };
