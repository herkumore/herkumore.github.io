var button1 = document.querySelector('#wecken');
button1.onclick = endeWecken;

var button2 = document.querySelector('#schlafen');
button2.onclick = endeSchlafen;

var frage = document.querySelector('#was');

function endeWecken () {

  var container = document.getElementById("container");
  container.classList.remove("nacht2");

  var node1 = document.createElement("p");
  node1.setAttribute("id", "p1");
  var text1 = document.createTextNode("Unruhig blinzelnd erwacht der Detektiv");
  node1.appendChild(text1);
  document.getElementById("ende1").appendChild(node1);

  var node2 = document.createElement("p");
  node2.setAttribute("id", "p2");
  var text2 = document.createTextNode("mit dem Gedichtband auf dem Schoß");
  node2.appendChild(text2);
  document.getElementById("ende1").appendChild(node2);

  var node3 = document.createElement("p");
  node3.setAttribute("id", "p3");
  var text3 = document.createTextNode("und Verwesungsgeruch in der Nase.");
  node3.appendChild(text3);
  document.getElementById("ende1").appendChild(node3);

  var node4 = document.createElement("p");
  node4.setAttribute("id", "p4");
  var text4 = document.createTextNode("Ihm wird schlecht");
  node4.appendChild(text4);
  document.getElementById("ende1").appendChild(node4);

  var node5 = document.createElement("p");
  node5.setAttribute("id", "p5");
  var text5 = document.createTextNode("Angewidert schließt er den Gedichtband");
  node5.appendChild(text5);
  document.getElementById("ende1").appendChild(node5);

  var node6 = document.createElement("p");
  node6.setAttribute("id", "p6");
  var text6 = document.createTextNode("und somit den Fall.");
  node6.appendChild(text6);
  document.getElementById("ende1").appendChild(node6);

  var node7 = document.createElement("p");
  node7.setAttribute("id", "p7");
  var text7 = document.createTextNode("ENDE");
  node7.appendChild(text7);
  document.getElementById("ende1").appendChild(node7);

  var button3 = document.createElement("input");
  button3.setAttribute("id", "button3");
  button3.setAttribute("type", "button");
  button3.setAttribute("value", "Neu Starten?");
  document.getElementById("ende1").appendChild(button3);
  button3.addEventListener("click", function() {
    location.href="textverbrechen2.html";
  });

  button1.remove();
  button2.remove();
  frage.remove();
}

function endeSchlafen () {

  var container = document.getElementById("container");
  container.classList.add("nacht3");

  var node1 = document.createElement("p");
  node1.setAttribute("id", "q1");
  node1.setAttribute("class", "green");
  var text1 = document.createTextNode("Du handelst gut, denkst klug und weit");
  node1.appendChild(text1);
  document.getElementById("ende1").appendChild(node1);

  var node2 = document.createElement("p");
  node2.setAttribute("id", "q2");
  node2.setAttribute("class", "green");
  var text2 = document.createTextNode("Schlafende lässt man ruh‘n");
  node2.appendChild(text2);
  document.getElementById("ende1").appendChild(node2);

  var node3 = document.createElement("p");
  node3.setAttribute("id", "q3");
  node3.setAttribute("class", "green");
  var text3 = document.createTextNode("Und du solltest das gleiche tun");
  node3.appendChild(text3);
  document.getElementById("ende1").appendChild(node3);

  var node4 = document.createElement("p");
  node4.setAttribute("id", "q4");
  node4.setAttribute("class", "green");
  var text4 = document.createTextNode("Denn nur wer ruht, kann auf dieser Erde friedlich leben");
  node4.appendChild(text4);
  document.getElementById("ende1").appendChild(node4);

  var node5 = document.createElement("p");
  node5.setAttribute("id", "q5");
  node5.setAttribute("class", "green");
  var text5 = document.createTextNode("und kommt nie in die Verlegenheit");
  node5.appendChild(text5);
  document.getElementById("ende1").appendChild(node5);

  var node6 = document.createElement("p");
  node6.setAttribute("id", "q6");
  node6.setAttribute("class", "green");
  var text6 = document.createTextNode("Leben zu nehmen oder zu geben");
  node6.appendChild(text6);
  document.getElementById("ende1").appendChild(node6);

  var node7 = document.createElement("p");
  node7.setAttribute("id", "q7");
  node7.setAttribute("class", "green");
  var text7 = document.createTextNode("Schlafende lässt man ruh‘n...");
  node7.appendChild(text7);
  document.getElementById("ende1").appendChild(node7);

  var button4 = document.createElement("input");
  button4.setAttribute("id", "button4");
  button4.setAttribute("type", "button");
  button4.setAttribute("value", "Ruhen");
  button4.setAttribute("onclick", "location.href='ruhen.html'");
  document.getElementById("ende1").appendChild(button4);

  var button5 = document.createElement("input");
  button5.setAttribute("id", "button4");
  button5.setAttribute("type", "button");
  button5.setAttribute("value", "Spuren suchen");
  button5.setAttribute("onclick", "location.href='spuren.html'");
  document.getElementById("ende1").appendChild(button5);


  button1.remove();
  button2.remove();
  frage.remove();
}
