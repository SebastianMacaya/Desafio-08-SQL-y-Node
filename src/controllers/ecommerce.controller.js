import * as ecommerceService from "../services/ecommerce.service.js";
//MOSTRAR TODOS LOS Productos
export async function getAllProducts(req, res) {
  try {
    const productos = await ecommerceService.getAllProducts();
    return { productos }.productos;
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function saveProduct(producto) {
  try {
    await ecommerceService.saveProduct(producto);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
