import express from "express";
import * as chatController from "../controllers/chat.controller.js";

const router = new express.Router();

router.get("/api/mensajes", chatController.getAllMessages);
router.post("/api/mensajes", chatController.createMessage);
router.delete("/api/mensajes/:chatId", chatController.deleteMessage);

export default router;
