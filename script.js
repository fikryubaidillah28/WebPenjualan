let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");
let cartModal = document.getElementById("cart-modal");
let productList = document.getElementById("product-list");

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${item.productName} - Rp. ${item.price.toLocaleString()}`;
    cartItems.appendChild(listItem);
    total += item.price;
  });
  cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
  cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
}

function checkout() {
  alert("Terima kasih telah membeli produk kami!");
  cart = [];
  updateCart();
  toggleCart();
}

// Fitur pencarian produk
function searchProduct() {
  let searchTerm = document.getElementById("search-input").value.toLowerCase();
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {
    let productName = product.querySelector("h2").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "inline-block";
    } else {
      product.style.display = "none";
    }
  });
}

// Filter produk berdasarkan kategori
function filterByCategory() {
  let category = document.getElementById("category-select").value;
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "inline-block";
    } else {
      product.style.display = "none";
    }
  });
}

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide img");

function moveSlide(step) {
  currentSlide += step;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // Kembali ke gambar pertama
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Kembali ke gambar terakhir
  }

  const carousel = document.querySelector(".carousel-container");
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`; // Geser gambar sesuai index
}
