var gegenwart = document.getElementById("gegenwart");
var button = document.getElementById("button1");

function changeColors1() {
  gegenwart.setAttribute("class", "gegenwart2");
  button.setAttribute('onclick','changeColors2()');
}

function changeColors2() {
  gegenwart.setAttribute("class", "gegenwart3");
  button.setAttribute('onclick','changeColors3()');
}

function changeColors3() {
  gegenwart.setAttribute("class", "gegenwart4");
  button.setAttribute('onclick','changeColors4()');

}

function changeColors4() {
  gegenwart.setAttribute("class", "gegenwart1");
  button.setAttribute('onclick','changeColors1()');
}


button.addEventListener("click", startTimer);

function startTimer(){
  var counter = 3;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }


    if (counter === 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
        alert('Schade');
        clearInterval(counter);
    }
  }, 1000);
}


/*
function changeColors() {

  if (gegenwart.class = "gegenwart1") {
    gegenwart.setAttribute("class", "gegenwart2");
  }

  else if (gegenwart.class = "gegenwart2") {
    gegenwart.setAttribute("class", "gegenwart3");
  }
}

function changeClass () {



}


function selectGegenwart(mode) {

  var color;
  var background;

  if (mode === "gegenwart1") {
    color = "gray";
    background = "blue";
    mode = "gegenwart2";
  }

  else if (mode === "gegenwart2") {
    color = "green";
    background = "black";
  }

  document.getElementById("gegenwart").style.color = color;
  document.getElementById("gegenwart").style.backgroundColor = background;

}
*/
