"use strict";

// Create Product class
class Product {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.description = description;
  }

  // Display the product card
  showCard(product) {
    // Create card containers
    let card = document.createElement("div");
    let imgTitle = document.createElement("div");
    let descBtn = document.createElement("div");
    // Add className
    imgTitle.classList.add(`imgTitle-${product.name.substring(2, 3)}`);
    descBtn.classList.add(`descBtn-${product.name.substring(2, 3)}`);
    descBtn.classList.add("descBtnGrid");
    card.className = `card ${product.name.substring(2, 3)}`;

    let board = document.querySelector(".grid");

    // Add (image and title) container and (description and button) container to card
    card.appendChild(imgTitle);
    card.appendChild(descBtn);
    board.append(card);

    // Execute functions
    this.showImg(product);
    this.showTitle(product);
    this.showPrice(product);
    this.showDescription(product);
    this.showBtn(product);
  }

  // Function showImg display the image inside the imgTitle container
  showImg(product) {
    let img = document.createElement("img");
    img.classList.add("imgStyle");
    img.src = this.img;
    let imgTitle = document.querySelector(
      `.imgTitle-${product.name.substring(2, 3)}`
    );
    imgTitle.appendChild(img);
  }

  // Function showTitle display the title inside the imgTitle container
  showTitle(product) {
    let title = document.createElement("h3");
    title.className = `title ${product.name.substring(2, 3)}`;
    let titleName = document.createTextNode(this.name);
    let imgTitle = document.querySelector(
      `.imgTitle-${product.name.substring(2, 3)}`
    );
    title.appendChild(titleName);
    imgTitle.appendChild(title);
  }

  // Function showDescription display the description inside the descBtn container
  showDescription(product) {
    let desc = document.createElement("p");
    desc.className = `desc ${product.name.substring(2, 3)}`;
    let descContent = document.createTextNode(this.description);
    let descBtn = document.querySelector(
      `.descBtn-${product.name.substring(2, 3)}`
    );
    desc.appendChild(descContent);
    descBtn.appendChild(desc);
  }

  // Function showBtn display the button inside the descBtn container
  showBtn(product) {
    let btn = document.createElement("button");
    btn.className = "btn";
    let btnText = document.createTextNode("Ajouter au panier");
    let descBtn = document.querySelector(
      `.descBtn-${product.name.substring(2, 3)}`
    );
    btn.appendChild(btnText);
    descBtn.appendChild(btn);
  }

  // Function showPrice display the price inside the descBtn container
  showPrice(product) {
    // Create prices' containers
    let priceContainer = document.createElement("div");
    let priceHT = document.createElement("p");
    let priceTTC = document.createElement("p");
    // Add className
    priceContainer.className = "priceGrid";
    priceHT.className = "priceHTGrid";
    priceTTC.className = "priceTTCGrid";
    // Create text node
    let priceHTText = document.createTextNode(`${this.price} € HT `);
    let priceTTCText = document.createTextNode(
      `${this.price + (this.price * 20) / 100} € TTC `
    );
    // Call previous containers
    let descBtn = document.querySelector(`.descBtn-${product.name.substring(2, 3)}`);
    priceHT.appendChild(priceHTText);
    priceTTC.appendChild(priceTTCText);
    priceContainer.append(priceHT, priceTTC);
    descBtn.appendChild(priceContainer);
  }
}

// Create new products
const product1 = new Product(
  "Vase en terre cuite",
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

// Create array with the products
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

// Create the board
let board = document.createElement("div");
board.classList.add("grid");
document.body.appendChild(board);
let i = 0;

// For each product, dispay its card
productList.forEach((product) => {
  i++;
  product.showCard(product, i);
});

// Buttons

const cardDisplay = document.querySelectorAll(".card");
const prices = document.querySelectorAll('.priceGrid');
const pricesHT = document.querySelectorAll('.priceHTGrid');
const pricesTTC = document.querySelectorAll('.priceTTCGrid');
const descBtns = document.querySelectorAll('.descBtnGrid');

// Line button
let displayLine = () => {
  board.classList.add("line");
  board.classList.remove("grid");

  cardDisplay.forEach((card) => {
    card.classList.add("cardList");
    card.classList.remove("card");
  });

  prices.forEach((price) => {
    price.classList.remove("priceGrid");
    price.classList.add("priceLine");
  });
  
  pricesHT.forEach((priceHT) => {
    priceHT.classList.remove("priceHTGrid");
    priceHT.classList.add("priceHTLine");
  });

  pricesTTC.forEach((priceTTC) => {
    priceTTC.classList.remove("priceTTCGrid");
    priceTTC.classList.add("priceTTCLine");
  });

  descBtns.forEach((descBtn) => {
    descBtn.classList.remove("descBtnGrid");
    descBtn.classList.add("descBtnLine");
  });
};

const line = document.querySelector(".lineBtn");
line.addEventListener("click", displayLine);


// Grid button
let displayGrid = () => {
  board.classList.add("grid");
  board.classList.remove("line");

  cardDisplay.forEach((card) => {
    card.classList.remove("cardList");
    card.classList.add("card");
  });

  prices.forEach((price) => {
    price.classList.remove("priceLine");
    price.classList.add("priceGrid");
  });
    
  pricesHT.forEach((priceHT) => {
    priceHT.classList.add("priceHTGrid");
    priceHT.classList.remove("priceHTLine");
  });

  pricesTTC.forEach((priceTTC) => {
    priceTTC.classList.add("priceTTCGrid");
    priceTTC.classList.remove("priceTTCLine");
  });

  descBtns.forEach((descBtn) => {
    descBtn.classList.add("descBtnGrid");
    descBtn.classList.remove("descBtnLine");
  });
};

const grid = document.querySelector(".gridBtn");
grid.addEventListener("click", displayGrid);
