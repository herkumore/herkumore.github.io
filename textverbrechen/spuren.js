function frage() {
  var form = document.getElementById("input").value;
  if (form == "Rand") {
    document.getElementById('richtig').style.opacity = "1";
    document.getElementById('falsch').innerHTML= '';

  }
    else {
      document.getElementById('falsch').innerHTML= 'Leider falsch';
  }
}


// var hidden = getElementsByClassName("hide");
// hidden.addEventListener("click", "reveal()");
//
// function reveal() {
//   for (var i = 0; i < hidden.length; i++) {
//     hidden[i].classList.toggle("hide");
//   }
// }

//
// var indizien = document.querySelector(".indizien");
// indizien[0].addEventListener("click", "klick()");
//
// function klick() {
//   indizien[0].classList.toggle(".indizien2");
// }
