function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



// Ferme la modale au click sur la X
function closeModal() {
  modalbg.style.display = 'none';
}

// Valide le formulaire
form.addEventListener("submit", (event)=>{
  event.preventDefault(); // Evite rechargement de la page (comportement par défault)
  if (validate() === true) {
    // Affiche message de confirmation d'envoi du formulaire
    document.getElementById("formSent").style.display = "block";
  } else {
    document.getElementById("formSent").style.display = "none";  
  }
})

// Vérifie la validité des champs saisis et renvoi true si formulaire correctement complété
function validate(){
  // Validation champs prénom et affichage du message d'erreur si saisie incorrecte
  const first = document.getElementById("first").value;
  if (first.length >= 2) { // Saisie prénom minimum deux caractères, n'est pas vide
    var firstValid = true;
    document.getElementById("firstError").style.display = "none";
  } else {
    var firstValid = false;
    document.getElementById("firstError").style.display = "block";
  }

  // Validation champs nom et affichage du message d'erreur si saisie incorrecte
  const last = document.getElementById("last").value;
  if (last.length >= 2) {
    var lastValid = true;
    document.getElementById("lastError").style.display = "none";
  } else {
    var lastValid = false;
    document.getElementById("lastError").style.display = "block";
  }

  // Validation champs e-mail et affichage du message d'erreur si saisie incorrecte
  const email = document.getElementById("email").value;
  const emailMatchPattern = email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z0-9._%+-]/); // accepte les formats aa@aa.aa / aa.aa@aa.aa / etc
  if (emailMatchPattern !== null) { // emailMatchPattern = null lorsque la saisie ne respecte pas le pattern
    console.log(emailMatchPattern);
    var emailValid = true;
    document.getElementById("emailError").style.display = "none";
  } else {
    console.log(emailMatchPattern)
    var emailValid = false;
    document.getElementById("emailError").style.display = "block";
  }

  // Vérifie que tous les champs sont valides et retourne un bouléen pour dire si entierté du form valide ou non
  if (firstValid === true  && lastValid === true && emailValid === true) { 
    // Tous les champs sont vidés
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("email").value = "";

    return true;
  } else {
    return false;
  }  
}
