window.addEventListener("load", function() {
    console.log('Page is loaded');
  });
function test() {
const button = document.querySelectorAll(".foodButton");
console.log(button.length);
}
// let carts = button;
function test2() {
const button = document.querySelectorAll(".foodButton");
for (let i = 0; i < button.length; i++) {
  console.log("loop");
};
}
// function cartValue() {
//   let cartSize = localStorage.getItem("cartValue");

//   cartSize = parseFloat(cartSize); // changes string to Float

//   if (cartSize) {
//     localStorage.setItem("cartValue", cartSize + 1);
//   } else {
//     localStorage.setItem("cartValue", 1);
//   }
// }
