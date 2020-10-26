window.onload = function () {
  menuFunction();
};

var xmlDoc;
function menuFunction() {
  loadXML();
  opc = xmlDoc.getElementsByTagName("link");

  const menu = document.getElementById("menu");

  for (i = 0; i < opc.length; i++) {
    menu.innerHTML +=
      '<a href="' +
      opc[i].getAttribute("id") +
      '">' +
      opc[i].firstChild.nodeValue +
      "</a> <br>";
  }
}

function loadXML() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "./xml/menu.xml", false);
  xmlHttp.send(null);
  xmlDoc = xmlHttp.responseXML;
}
