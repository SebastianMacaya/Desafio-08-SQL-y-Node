import { Router } from "express";

const restringida = Router();

restringida.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({ error: false, msg: `Esta informacion es restringida` });
  } catch (error) {
    res
      .status(401)
      .json({ error: true, msg: `Hubo un error con su autentificación.` });
  }
});

export { restringida };
