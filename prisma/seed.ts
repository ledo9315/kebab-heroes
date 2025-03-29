import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { PRODUCTS } from "./constants";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Alice",
        email: "alice@test.com",
        password: hashSync("qweqwe", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Bob",
        email: "bob@test.com",
        password: hashSync("12345", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        name: "Döner Kebab",
      },
      {
        name: "Pizza",
      },
      {
        name: "Pizzabrötchen",
      },
      {
        name: "Pide",
      },
      {
        name: "Kids Menü",
      },
      {
        name: "Snacks",
      },
      {
        name: "Suppe",
      },
      {
        name: "Dessert",
      },
      {
        name: "Pita Spezialitäten",
      },
      {
        name: "Pommes und Chicken",
      },
      {
        name: "Salate",
      },
      {
        name: "Getränke",
      },
    ],
  });

  await prisma.ingredient.createMany({
    data: [
      {
        name: "Zwiebeln",
        price: 0.5,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
      },
      {
        name: "Hirtenkäse",
        price: 1,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
      },
      {
        name: "Brokkoli",
        price: 0.5,
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fbroccoli%2Fbroccoli_PNG72955.png&f=1&nofb=1&ipt=33e9c85d1f1d9ce25eea1700220413935f0e26965cda1299cb55ff4a8b5d1bdd&ipo=images",
      },
      {
        name: "Champignons",
        price: 0.5,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
      },
      {
        name: "Peperoni",
        price: 0.5,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
      },
      {
        name: "Hähnchenbrust",
        price: 1,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
      },
      {
        name: "Sauce Hollandaise",
        price: 0.5,
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fd%2Fsauce_PNG138.png&f=1&nofb=1&ipt=473e3efefef5848ba8c14df41750c5cfbabed031da2069256cc8cbf61e258204&ipo=images",
      },
      {
        name: "Jalapenos",
        price: 0.5,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
      },
      {
        name: "Sucuk",
        price: 1,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
      },
      {
        name: "Dönerfleisch",
        price: 1,
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F335%2F487%2Fpng-clipart-doner-kebab-%25C4%25B0skender-kebap-meat-shawarma-meat-food-recipe.png&f=1&nofb=1&ipt=5cc555f2170df2e808895cee18f3f99cfe14b53b036610f89051df9bad9cf3dc&ipo=images",
      },
      {
        name: "Tomate",
        price: 0.5,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
      },
      {
        name: "Gurke",
        price: 0.5,
        imageUrl:
          "https://www.pngarts.com/files/3/Sliced-Cucumber-PNG-Download-Image.png",
      },
      {
        name: "Eisbergsalat",
        price: 0.5,
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Filg-cdn.qonqord.cloud%2Fpreview%2FE3wFP3nC4Oc8XguuPdXiPe%2Fpreviews%2FmaxWidth_700_maxHeight_700.png&f=1&nofb=1&ipt=df57887d8838fced58c21b4ba9e135fc767b5d1450744e8867a9e80c321eacb3&ipo=images",
      },
      // ].map((ingredient, index) => ({
      //   id: index + 1,
      //   ...ingredient,
      // })),
    ],
  });

  await prisma.product.createMany({
    data: PRODUCTS,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Pizza Peperoni",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d610a62d78598406363a9a8ad65.avif",
      categoryId: 2,
      ingredients: {
        connect: [
          { id: 1 }, // Zwiebeln
          { id: 2 }, // Hirtenkäse
          { id: 3 }, // Brokkoli
          { id: 4 }, // Champignons
          { id: 5 }, // Peperoni
        ],
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Pizza Margherita",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d6105ef6690b86fbde6150b5b0c.avif",
      categoryId: 2,
      ingredients: {
        connect: [
          { id: 6 }, // Hähnchenbrust
          { id: 7 }, // Sauce Hollandaise
          { id: 8 }, // Jalapenos
          { id: 9 }, // Sucuk
          { id: 10 }, // Dönerfleisch
        ],
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Pizza Pollo",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d6105ef6690b86fbde6150b5b0c.avif",
      categoryId: 2,
      ingredients: {
        connect: [
          { id: 11 }, // Tomate
          { id: 12 }, // Gurke
          { id: 13 }, // Eisbergsalat
        ],
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productItemId: pizza1.id,
        price: 5.99,
      },
      {
        productItemId: pizza2.id,
        price: 6.99,
      },
      {
        productItemId: pizza3.id,
        price: 7.99,
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: "1111",
        totalAmount: 0,
      },
      {
        userId: 2,
        token: "2222",
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [
          { id: 1 }, // Zwiebeln
          { id: 2 }, // Hirtenkäse
          { id: 3 }, // Brokkoli
        ],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

(async () => {
  await main();
})();
