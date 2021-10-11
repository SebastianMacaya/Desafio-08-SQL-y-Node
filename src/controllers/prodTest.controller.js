import ProdTest from "../services/prodTest.service.js";

class Controller {
  constructor() {}

  async getProducts(req, res, next) {
    try {
      const response = await ProdTest.getProducts();
      res.status(200).json({ prods: response });
    } catch (error) {
      next(error);
    }
  }
}

export default new Controller();
