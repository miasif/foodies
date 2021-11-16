import axios from "axios";

let addToCart = document.querySelectorAll(".add-to-cart");

function updateCart(food) {
  axios.post("/update-cart", food).then((res) => {
    console.log(res);
  });
}

addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    let food = JSON.parse(btn.dataset.food);
    updateCart(food);
  });
});
