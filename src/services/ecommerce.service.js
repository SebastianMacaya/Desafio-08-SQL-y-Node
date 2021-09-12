import { db } from "../db.js";
export async function getAllProducts() {
  try {
    const text = await db("ecommerce").select();
    return text;
  } catch (error) {
    throw new Error(error);
  }
}

export async function saveProduct(data) {
  try {
    await db("ecommerce").insert(data);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
