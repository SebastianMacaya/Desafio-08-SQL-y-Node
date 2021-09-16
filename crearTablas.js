import { db } from "./src/db.js";
(async function () {
  try {
    /* ------------------------------ tabla existe ------------------------------ */
    const exist = await db.schema.hasTable("chat");

    /* ------------------------------- crear tabla ------------------------------ */
    if (!exist) {
      await db.schema.createTable("chat", (table) => {
        table.increments("id").primary().notNullable();
        table.string("author", 30).notNullable();
        table.string("text", 1000).notNullable();
        table.string("fyh", 100).notNullable();
      });

      console.log("Tabla  chat creada");
    }
  } catch (error) {
    console.log(error);
  }
})();

(async function () {
  try {
    /* ------------------------------ tabla existe ------------------------------ */
    const existEcommerce = await db.schema.hasTable("ecommerce");

    /* ------------------------------- crear tabla ------------------------------ */
    if (!existEcommerce) {
      await db.schema.createTable("ecommerce", (table) => {
        table.increments("id").primary().notNullable();
        table.string("title", 30).notNullable();
        table.string("price ", 1000).notNullable();
        table.string("url", 200).notNullable();
      });

      console.log("Tabla eccomerce creada");
    }
  } catch (error) {
    console.log(error);
  } finally {
    db.destroy();
  }
})();
