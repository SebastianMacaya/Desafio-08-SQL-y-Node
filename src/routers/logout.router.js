import { Router } from "express";
const logout = Router();

logout.get("/", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        throw `Error`;
      }
    });

    res.status(200).render("home", {
      title: "Home",
      user: "invitado",
    });
  } catch (error) {
    res.status(400).json({ error: true, msg: error });
  }
});

export { logout };
