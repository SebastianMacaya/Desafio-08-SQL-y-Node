import { generateProduct } from "../utils/prodTest.utils.js";

class ProdTest {
  constructor() {}

  async getProducts() {
    try {
      const prods = [];
      for (let i = 0; i < 20; i++) {
        const prod = {
          id: i + 1,
          ...generateProduct(),
        };
        prods.push(prod);
      }
      return prods;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProdTest();
