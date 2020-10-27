// $(document).ready(function () { // function page load
//   var elementCount = $("*").css("border", "3px solid red").length;
//   $("body").prepend("<h3>" + elementCount + " elements found</h3>");

//   let carts = document.querySelectorAll(".addFood");

//   for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         console.log("Adicionado");
//     });
//   }
// });

setTimeout(function () {
  var elementCount = $("*").css("border", "3px solid red").length;
  $("body").prepend("<h3>" + elementCount + " elements found</h3>");

  let carts = document.querySelectorAll(".addFood");

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
      cartNumbers();
    });
  }

  function cartNumbers() {
    let foodNumbers = localStorage.getItem("cartNumbers");

    foodNumbers = parseInt(foodNumbers);

    if (foodNumbers) {
      localStorage.setItem('cartNumbers', foodNumbers + 1);
      document.querySelector('.topbar span').textContent = foodNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector('.topbar span').textContent = 1;
    }
  }
}, 150); // countdown to make sure page loads 100% before running
