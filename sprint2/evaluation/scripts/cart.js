let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = document.getElementById("count");
count.append(cart.length);

showcart(cart);

function showcart(arr) {
  arr.map(function (elem) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem[0].img;
    img.setAttribute("height", "200px");
    img.setAttribute("width", "100px");

    let price = document.createElement("p");
    price.innerText = elem[0].price;

    let button = document.createElement("button");
    button.innerText = "remove from cart";
    button.setAttribute("id", "btn");
    button.addEventListener("click", function () {
      removeCart(elem[0].name);
    });

    div.append(img, price, button);
    document.getElementById("cart").append(div);
  });
}

function removeCart() {}
