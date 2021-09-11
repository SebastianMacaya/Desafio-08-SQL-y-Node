import * as chatService from "../services/chat.service.js";

//MOSTRAR TODOS LOS MENSAJES
export async function getAllMessages(req, res) {
  try {
    const chat = await chatService.getAllMessages();
    res.status(200).json({ chat });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
//AGREGAR UN NUEVO MENSAJE
export async function createMessage(req, res) {
  const { body } = req;
  try {
    await chatService.createMessage(body);
    res.status(200).send("Mensaje Creado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//BORRAR UN MENSAJE POR ID

export async function deleteMessage(req, res) {
  const { chatId } = req.params;
  try {
    await chatService.deleteMessage(chatId);
    res.status(200).send("Mensaje borrado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
