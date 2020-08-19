"use strict";

class Product {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.description = description;
  }

  showCard(product) {
    let card = document.createElement("div");
    let board = document.querySelector(".board");
    card.className = `card ${product.name.substring(2, 4)}`;
    board.append(card);
    this.showImg(product);
    this.showTitle(product);
    this.showDesscription(product);
    this.showBtn(product);
    this.showPrice(product);
  }

  showImg(product) {
    let img = document.createElement("img");
    img.classList.add("imgStyle");
    img.src = this.img;
    let card = document.querySelector(`.${product.name.substring(2, 4)}`);
    card.appendChild(img);
  }

  showTitle(product) {
    let title = document.createElement("h3");
    title.className = `title ${product.name.substring(2, 4)}`;
    let titleName = document.createTextNode(this.name);
    let card = document.querySelector(`.${product.name.substring(2, 4)}`);
    title.appendChild(titleName);
    card.appendChild(title);
  }

  showDesscription(product) {
    let desc = document.createElement("p");
    desc.className = `desc ${product.name.substring(2, 4)}`;
    let descContent = document.createTextNode(this.description);
    let card = document.querySelector(`.${product.name.substring(2, 4)}`);
    desc.appendChild(descContent);
    card.appendChild(desc);
  }

  showBtn(product) {
    let btn = document.createElement("button");
    btn.className = "btn";
    let btnText = document.createTextNode("Ajouter au panier");
    let card = document.querySelector(`.${product.name.substring(2, 4)}`);
    btn.appendChild(btnText);
    card.appendChild(btn);
  }

  showPrice(product) {
    let priceContainer = document.createElement("div");
    let priceHT = document.createElement("p");
    let priceTTC = document.createElement("p");
    priceContainer.className = "price";
    priceHT.className = "priceHT";
    priceTTC.className = "priceTTC";
    let priceHTText = document.createTextNode(`${this.price} € HT `);
    let priceTTCText = document.createTextNode(`${this.price+(this.price*20/100)} € TTC `);
    let card = document.querySelector(`.${product.name.substring(2, 4)}`);
    priceHT.appendChild(priceHTText);
    priceTTC.appendChild(priceTTCText);
    priceContainer.append(priceHT, priceTTC);
    card.appendChild(priceContainer);
  }
}

const product1 = new Product(
  "Vase en terre cuiste",
  "images/vase.jpg",
  23.2,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product2 = new Product(
  "Lampe de chevet",
  "images/lampe.jpg",
  34.1,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product3 = new Product(
  "Lot de bracelet",
  "images/bracelet.jpg",
  13.2,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product4 = new Product(
  "Style bic",
  "images/stylo.jpg",
  2.05,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product5 = new Product(
  "Mug à thé",
  "images/tasse.jpg",
  7.1,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product6 = new Product(
  "Minitel",
  "images/minitel.jpg",
  17.25,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product7 = new Product(
  "1 Chaussure",
  "images/chaussure.jpg",
  94.33,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product8 = new Product(
  "Smartphone Huawei",
  "images/smartphone.jpg",
  61.21,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product9 = new Product(
  "Souris sans fil",
  "images/souris.jpg",
  1.1,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product10 = new Product(
  "Déodorant toilette",
  "images/airwicks.jpg",
  11.33,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);

let productList = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];
let board = document.createElement("div");
board.classList.add("board");
document.body.appendChild(board);
let i = 0;

productList.forEach((product) => {
  i++;
  product.showCard(product, i);
});
