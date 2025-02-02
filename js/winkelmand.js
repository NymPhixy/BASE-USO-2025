"use strict";

var products = [
  {
    name: "AMD Ryzen 7 9800X3D",
    description:
      "AMD Ryzen 7 9800X3D - 4.7 GHz - 8 Cores - 16 Threads - Socket AM5",
    price: 649.0,
    image:
      "https://www.alternate.nl/p/160x160/5/0/AMD_Ryzen_7_9800X3D__4_7_GHz__5_2_GHz_Turbo_Boost__socket_AM5_processor@@100093605.jpg",
  },
  {
    name: "AMD Ryzen 5 5600X",
    description:
      "AMD Ryzen 5 5600X - 4.6 GHz - 6 Cores - 12 Threads - Socket AM4",
    price: 191.0,
    image: "/public/images/ryzen5.webp",
  },
  {
    name: "AMD Ryzen 3 5300G",
    description:
      "AMD Ryzen 3 5300G - 4 GHz - 4 Cores - 8 Threads - 8 MB Cache - Socket AM4",
    price: 129.0,
    image: "/public/images/amd3ryzen.webp",
  },
  {
    name: "Intel Core i9-12900K",
    description:
      "Intel Core i9-12900K - 3.2 GHz - 16 Cores - 24 Threads - Socket LGA1700",
    price: 599.0,
    image: "/public/images/intel i9.webp",
  },
  {
    name: "Intel Core i7-12700K",
    description:
      "Intel Core i7-12700K - 3.6 GHz - 12 Cores - 20 Threads - Socket LGA1700",
    price: 419.0,
    image: "/public/images/i7.webp",
  },
  {
    name: "Intel Core i5-12600K",
    description:
      "Intel Core i5-12600K - 3.7 GHz - 10 Cores - 16 Threads - Socket LGA1700",
    price: 289.0,
    image: "/public/images/i5.webp",
  },
  {
    name: "NVIDIA GeForce RTX 3080",
    description: "NVIDIA GeForce RTX 3080 - 10 GB GDDR6X - PCI Express 4.0",
    price: 699.0,
    image: "/public/images/ng3080.webp",
  },
  {
    name: "AMD Radeon RX 6800",
    description: "AMD Radeon RX 6800 - 16 GB GDDR6 - PCI Express 4.0",
    price: 579.0,
    image: "/public/images/rx6800.webp",
  },
  {
    name: "Intel Arc A770",
    description: "Intel Arc A770 - 16 GB GDDR6 - PCI Express 4.0",
    price: 399.0,
    image: "/public/images/intelvideokaart.webp",
  },
  {
    name: "ASUS ROG Strix B550-F Gaming",
    description: "ASUS ROG Strix B550-F Gaming - ATX - Socket AM4",
    price: 189.0,
    image: "/public/images/moboasus.webp",
  },
  {
    name: "MSI MPG Z490 Gaming Edge WiFi",
    description: "MSI MPG Z490 Gaming Edge WiFi - ATX - Socket LGA1200",
    price: 229.0,
    image: "/public/images/msimobo.webp",
  },
  {
    name: "Gigabyte Z590 AORUS Elite AX",
    description: "Gigabyte Z590 AORUS Elite AX - ATX - Socket LGA1200",
    price: 249.0,
    image: "/public/images/gigamobo.webp",
  },
];

function renderProducts() {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product-item";
    productElement.setAttribute("data-price", product.price);

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: €${product.price.toFixed(2)}</p>
    `;

    productsContainer.appendChild(productElement);
  });

  calculateTotal();
}

function calculateTotal() {
  const totalAmountElement = document.getElementById("total-amount");
  let total = 0;

  const productItems = document
    .getElementById("products-container")
    .getElementsByClassName("product-item");
  for (let item of productItems) {
    const price = parseFloat(item.getAttribute("data-price"));
    total += price;
  }

  console.log("Total calculated:", total); // Log the total amount
  totalAmountElement.textContent = `€${total.toFixed(2)}`;
}

// Call renderProducts to display the products and calculate the total
renderProducts();