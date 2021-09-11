import { db } from "../db.js";
export async function getAllMessages() {
  try {
    const text = await db("chat").select();
    return text;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createMessage(data) {
  try {
    await db("chat").insert(data);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteMessage(chatId) {
  try {
    await db("chat").del().where("id", chatId);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
