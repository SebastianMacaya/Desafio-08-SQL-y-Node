import faker from "faker";
faker.locale = "es";

function generateProduct() {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    pictureURL: faker.image.avatar(),
  };
}

export { generateProduct };
