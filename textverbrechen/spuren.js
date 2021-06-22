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

var el1 = document.getElementById("1");
el1.addEventListener("click", reveal);

function reveal() {
  el1.classList.toggle("hide");
  el1.removeEventListener("click", reveal);
}


// var hidden = getElementsByClassName("hide");
// hidden[0].addEventListener("click", reveal);
//
// function reveal() {
//     hidden[0].classList.toggle("hide");
// }

// var hidden = getElementsByClassName("hide");
// hidden.addEventListener("click", reveal);
//
// function reveal() {
//   for (var i = 0; i < hidden.length; i++) {
//     hidden[i].classList.toggle("hide");
//   }
// }

// var indizien = document.querySelector(".indizien");
// indizien[0].addEventListener("click", "klick()");
//
// function klick() {
//   indizien[0].classList.toggle(".indizien2");
// }
