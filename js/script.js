
var printTicket = document.getElementById("ticket");


printTicket.addEventListener("click",
  function() {
    var name = document.getElementById("form__input--name").value;
    console.log(name);
    var km = document.getElementById("form__input--km").value;
    console.log(km);
    var age = document.getElementById("form__input--age").value;
    console.log(age);
  }
);
