import "./db.js";
import express from "express";
import routerChat from "./routers/chat.router.js";
import morgan from "morgan";
import emoji from "node-emoji";
import * as chatController from "./controllers/chat.controller.js";
import * as ecommerceController from "./controllers/ecommerce.controller.js";

const PORT = 8080;

/* -------------------------------- socket io ------------------------------- */

import { createServer } from "http";
import { Server } from "socket.io";
import { getAllMessages, saveMessage } from "./services/chat.service.js";
import { getAllProducts, saveProduct } from "./services/ecommerce.service.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  // ...
});
const mensajes = await chatController.getAllMessages(); //traigo todos los mensajes
const contProductos = await ecommerceController.getAllProducts(); //traigo todos los productos

io.on("connection", (socket) => {
  console.log(
    emoji.get("white_check_mark"),
    "Nuevo usuario conectado",
    socket.id
  );
  socket.on("disconnect", () => {
    console.log(emoji.get("poop"), "usuario desconectado", socket.id);
  });
  //Enviar desde el back end al front
  socket.emit("mensajes", mensajes);

  //recibo nuevo mensaje desde el front
  socket.on("nuevoMensaje", async (msg) => {
    msg.fyh = new Date().toLocaleString();

    await saveMessage(msg); //Guardo los nuevos mensajes
    const mensajes = await chatController.getAllMessages(); //vuelvo a traer mensajes de la base de datos

    io.sockets.emit("mensajes", mensajes); //envio al front
  });

  /* -------------------------------- ecommerce ------------------------------- */
  socket.emit("productos", contProductos);

  // Leer desde el cliente la carga de un nuevo producto:

  socket.on("nuevoProducto", async (producto) => {
    await saveProduct(producto); //guardo los productos que vienen del front
    const contProductos = await ecommerceController.getAllProducts(); //traigo todos los productos

    io.emit("productos", contProductos); //envio los productos actualizados al front
  });
});

/* ------------------------------- middleware ------------------------------- */

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(import.meta.url + "/public"));
app.use(express.static("public"));

/* --------------------------------- Routes --------------------------------- */
app.use("/", routerChat);
/* --------------------------------- server --------------------------------- */
httpServer.listen(PORT, () =>
  console.log(emoji.get("computer"), `Server on port ${PORT}`)
);
