//   var i = 12;
//   while (i !== 0) {
//     meal();
//     i--;
//   }
//   async function meal() {
//     try {
//       let res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/random.php`
//       );
//       let data = await res.json();
//       mealData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

let data = JSON.parse(localStorage.getItem("meal")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   console.log(data);
function mealData() {
  let random = Math.floor(Math.random() * (500 - 100) + 100);

  let mealObj = [
    {
      img: arr.meals[0].strMealThumb,
      name: arr.meals[0].strMeal,
      price: random,
    },
  ];
  // console.log();
  data.push(mealObj);
  localStorage.setItem("meal", JSON.stringify(data));
}

function appendMenu(data) {
  data.forEach((element, index) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = element[0].img;
    img.setAttribute("height", "200px");
    img.setAttribute("width", "100px");

    let price = document.createElement("p");
    price.innerText = element[0].price;

    let button = document.createElement("button");
    button.innerText = "Add To Cart";
    button.setAttribute("id", "btn");
    button.addEventListener("click", function () {
      addCart(element[0].name);
    });

    div.append(img, price, button);
    document.getElementById("main").append(div);
  });
}
appendMenu(data);

function addCart(nm) {
  data.map(function (elem) {
    if (elem[0].name == nm) {
      cart.push(elem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}
