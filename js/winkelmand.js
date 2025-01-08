
'use strict';

const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');

const products = [
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


export { products };

//Adds or removes units of choosen food

for(let i = 0; i < incrementBtn.length; i++){
    incrementBtn[i].addEventListener('click', function() {
        let increment = Number(this.previousElementSibling.textContent);
        increment++;
        this.previousElementSibling.textContent = increment;

        totalCalc();
    })

    decrementBtn[i].addEventListener('click', function () {
        let decrement = Number(this.nextElementSibling.textContent);
        decrement <= 1 ? 1 : decrement--;
        this.nextElementSibling.textContent = decrement;

        totalCalc();
    })
}


const totalCalc = function(){
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    for(let i = 0; i < quantityElem.length; i++){
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);

        subtotalElem.textContent = subtotal.toFixed(2);

        totalTax = subtotal * tax;

        taxElem.textContent = totalTax.toFixed(2);

        total = subtotal + totalTax;

        totalElem.textContent =  total.toFixed(2);
        payAmountBtn.textContent = total.toFixed(2);
    }
}