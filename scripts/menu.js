$(function () {
  exibirCompras();
});

function exibirCompras() {
  $.getJSON("./json/foodMenu.json", function (data) {
    x = data.food.length;
    for (var i = 0; i < x; i++) {
      $("#foods").append(
        '<div class="' +
          data.food[i].foodTag +
          '">' + '<img src="' + data.food[i].image + '">' +
          "<h1>" +
          data.food[i].name +
          "</h1>" +
          "<p>" +
          data.food[i].info +
          "</p>" +
          "<p>" +
          data.food[i].price +
          "</p>" +
          "</div>"
      );
    }
  });
}
