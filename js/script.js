// Variabili
const priceKm = 0.21;
var printTicket = document.getElementById("ticket");

// Evento al click genera
printTicket.addEventListener("click",
// funzione
  function() {
// Raccolgo le variabili dai campi del form
    var name = document.getElementById("form__input--name").value;
    var km = document.getElementById("form__input--km").value;
    var age = document.getElementById("form__input--age").value;
// Calcolo il coto del biglietto
    var ticket = km * priceKm;
// Valuto lo sconto in base all'età
    if (age === "minorenne") {
      ticket = ticket * 0.80;
    }
    else if (age >= "over65") {
        ticket = ticket * 0.60;
    }
    else {
        ticket = ticket;
      }
// Arrotondo il prezzo
    ticket = (Math.round(ticket * 100) / 100);
// Compilo la tabella con gli input
    document.getElementById('nome-passeggero').innerHTML = name;
    document.getElementById('offerta').innerHTML = age;
    document.getElementById('costo').innerHTML = ticket
// Faccio apparire il box del biglietto
    var boxNo = document.getElementById("ticket-box");
    boxNo.classList.remove("box--no");
  }
);

// Annulla

var annulla = document.getElementById("reset");
annulla.addEventListener("click",
  function() {
    document.getElementById("ticket-box").classList.add("box-no");

    // reset campi
    document.getElementById("form__input--name").value = "";
    document.getElementById("form__input--km").value = "";
    document.getElementById("form__input--age").value = "";

  }
);
