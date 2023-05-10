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
  const birthdateMatchPattern = birthdate.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/); // Accepte le format JJ/MM/AAAA 

  if (birthdateMatchPattern !== null) { // Champs non vide
    document.getElementById("birthdateError").style.display = "none";
    return true;
  } else {
    document.getElementById("birthdateError").style.display = "block";
    return false;
  }
}

// Valide le champs Nombre de tournois : retourne true si valeur numérique saisie > 100
function nbContestValid(){
  
}

// Valide le champs Quel tournois : retourne true si un bouton radio selectionné
function whichContestValid(){
  
}

// Valide le champs CGU : retourne true si doit être cochée
function cguValid(){
  
}


// Vérifie la validité des champs saisis et renvoi true si formulaire correctement complété
function validateAll(){
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var birthdate = document.getElementById("birthdate").value;

  // Vérifie que tous les champs sont valides et retourne un bouléen pour dire si entierté du form valide ou non
  if (firstValid(first) === true  && lastValid(last) === true && emailValid(email) === true && birthdateValid(birthdate) === true){ 
    form.reset(); // Réinitialise le formulaire
    return true;
  } else {
    return false;
  }  
}


// Validation finale du formulaire
form.addEventListener("submit", (event)=>{
  event.preventDefault(); // Evite rechargement de la page (comportement par défault)
  if (validateAll() === true) {
    // Affiche message de confirmation d'envoi du formulaire
    document.getElementById("formSent").style.display = "block";
  } else {
    // Supprime message de confirmation lorsqu'envoi d'un deuxième formulaire à la suite mais invalide
    document.getElementById("formSent").style.display = "none";  
  }
  
  console.log("first: "+first+", last: "+last+", email: " + email + ', date de naissance: ' + birthdate);
})