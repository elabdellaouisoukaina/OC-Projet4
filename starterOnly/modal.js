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



//===============================================================================================================



// Ferme la modale au click sur la X
function closeModal() {
  modalbg.style.display = 'none';
}

// Valide le champs Prénom : retourne true si minimum 2 caractères / n'est pas vide
function firstValid(first){ 
  // Validation champs prénom et affichage du message d'erreur si saisie incorrecte
  if (first.length >= 2) { // Saisie prénom minimum deux caractères, n'est pas vide
    document.getElementById("firstError").style.display = "none";
    return true;
  } else { // Affichage du message d'erreur si saisie incorrecte
    document.getElementById("firstError").style.display = "block";
    return false;
  }
}

// Valide le champs Nom : retourne true si minimum 2 caractères / n'est pas vide
function lastValid(last){
  if (last.length >= 2) {
    document.getElementById("lastError").style.display = "none";
    return true;
  } else { // Affichage du message d'erreur si saisie incorrecte
    document.getElementById("lastError").style.display = "block";
    return false;

  }
}

// Valide le champs E-mail : retourne true si suit le format aa@aa.aa ou aa.aa@aa.aa
function emailValid(email){
  const emailMatchPattern = email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z0-9._%+-]/); // accepte les formats aa@aa.aa / aa.aa@aa.aa / etc

  if (emailMatchPattern !== null) { // emailMatchPattern = null lorsque la saisie ne respecte pas le pattern
    document.getElementById("emailError").style.display = "none";
    return true;
  } else { // Affichage du message d'erreur si saisie incorrecte
    document.getElementById("emailError").style.display = "block";
    return false;
  }
}

// Valide le champs Date de naissance : retourne true si n'est pas vide et personne majeur de + de 18 ans (et > 120 ans)
function birthdateValid(birthdate){
  
}

// Valide le champs Nombre de tournois : retourne true si valeur numérique saisie > 100
function nbContestValid(){
  
}

// Valide le champs Quel tournois : retourne true si un bouton radio selectionné
function whichContestValid(){
  
}

// Valide le champs CGU : retourne true si doit être cochée
function cguVaid(){
  
}


// Vérifie la validité des champs saisis et renvoi true si formulaire correctement complété
function validateAll(){

  // // Validation champs date de naissance et affichage du message d'erreur si saisie incorrecte
  // const birthdate = document.getElementById("birthdate").value;
  // const birthdateMatchPattern = birthdate.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/); // Accepte JJ/MM/AAAA ou MM/DD/YYYY
  // if (birthdateMatchPattern !== null) { // Champs non vide
  //   var birthdateValid = true;
  //   document.getElementById("birthdateError").style.display = "none";
  // } else {
  //   var birthdateValid = false;
  //   document.getElementById("birthdateError").style.display = "block";
  // }

  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var email = document.getElementById("email").value;

  // Vérifie que tous les champs sont valides et retourne un bouléen pour dire si entierté du form valide ou non
  if (firstValid(first) === true  && lastValid(last) === true && emailValid(email) === true) { 
    form.reset(); // Réinitialise le formulaire
    return true;
  } else {
    return false;
  }  
}


// Valide le formulaire
form.addEventListener("submit", (event)=>{
  event.preventDefault(); // Evite rechargement de la page (comportement par défault)
  if (validateAll() === true) {
    // Affiche message de confirmation d'envoi du formulaire
    document.getElementById("formSent").style.display = "block";
  } else {
    // Supprime message de confirmation lorsqu'envoi d'un deuxième formulaire à la suite mais invalide
    document.getElementById("formSent").style.display = "none";  
  }
  
  console.log("first: "+first+", last: "+last+", email: " + email)
})

