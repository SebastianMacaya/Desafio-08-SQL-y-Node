import "./db.js";
import express from "express";
import routerUsuarios from "./routers/users.router.js";
import routerChat from "./routers/chat.router.js";
import morgan from "morgan";
import emoji from "node-emoji";

const PORT = 8080;

/* -------------------------------- socket io ------------------------------- */

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  // ...
});

io.on("connection", (socket) => {
  console.log(
    emoji.get("white_check_mark"),
    "Nuevo usuario conectado",
    socket.id
  );
  socket.on("disconnect", () => {
    console.log(emoji.get("poop"), "usuario desconectado", socket.id);
  });
});

/* ------------------------------- middleware ------------------------------- */

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(import.meta.url + "/public"));
app.use(express.static("public"));

/* --------------------------------- Routes --------------------------------- */
app.use("/users", routerUsuarios);
app.use("/", routerChat);

/* --------------------------------- server --------------------------------- */
httpServer.listen(PORT, () =>
  console.log(emoji.get("computer"), `Server on port ${PORT}`)
);
