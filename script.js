document.addEventListener("DOMContentLoaded", function () {
  //verifica se esiste un nome gia salvato all'avvio della pagina
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("savedName").textContent = savedName;
    //se c'è gia un nome nella localStorage, lo visualizza nel "savedNmae"
  }

  //creiamo una funzione per salvare il nome inserito nella localStorage
  document.getElementById("saveButton").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("name", name);
    document.getElementById("savedName").textContent = "Your name is: " + name;
    //il nome inserito viene salvato in localStorage e mostrato nel savedName
  });

  //funzione per rimuovere il nome salvto con il bottone reset
  document.getElementById("resetButton").addEventListener("click", function () {
    localStorage.removeItem("name");
    document.getElementById("savedName").textContent = "Please insert your name..";
    //il nome viene rimosso dalla localStorage quando si clicca il bottone "reset"
  });
});

// funzione per creare il contatore
// verifichiamo all'inizio se è gia presente un valore nel contatore, altrimenti parte da 0
const counterDisplay = document.getElementById("counter");
let counter = parseInt(sessionStorage.getItem("counter")) || 0;

function updateCounter() {
  counter++;
  sessionStorage.setItem("counter", counter);
  counterDisplay.textContent = counter;
  //il contatore incrementa di 1 e lo salva in sessionStorage, aggiornando il display sul browser
}

//il contatore si aggiorna ogni secondo
setInterval(updateCounter, 1000);
