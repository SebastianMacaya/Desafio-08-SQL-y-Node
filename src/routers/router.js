import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import * as ruta from "./index.routers.js";

const router = Router();

router.use("/api", ruta.prodTest);
router.use("/login", ruta.login);
router.use("/logout", ruta.logout);
router.use("/", ruta.home);
router.use("/restringida", auth, ruta.restringida);
router.use("*", function (req, res) {
  res.status(404).redirect("/");
});
export { router };
