$(function () {
  foodMenu();
});

function foodMenu() {
  $.getJSON("./json/foodMenu.json", function (data) {
    for (let i = 0; i < data.food.length; i++) {
      $("#foods").append(
        '<div class="' +
          data.food[i].foodTag +
          '">' +
          '<img src="' +
          data.food[i].image +
          '">' +
          "<h1>" +
          data.food[i].name +
          "</h1>" +
          "<p>" +
          data.food[i].info +
          "</p>" +
          "<p>" +
          data.food[i].price +
          "</p>" + '<a class="foodButton" href="#">' + 
          '<button  type="button" ' +
          data.food[i].button +
          '>' + 
          "</button>"
          + "</a>" + 
          "</div>"
      );
    }
  });
}


