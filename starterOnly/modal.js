function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    // Couleur burger
    document.querySelector('.icon i').style.color = 'white';
    document.querySelector('.topnav a:hover').style.backgroundColor  = '#ff0000';
  } else {
    x.className = "topnav";
    // Couleur burger
    document.querySelector('.icon i').style.color = '#ff0000';
    document.querySelector('.topnav a:hover').style.backgroundColor  = 'white';
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
  document.getElementById("formSent").style.display = "none";  
  document.getElementById("form").style.display = "block";  
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

  // BONUS A FAIRE :
  // valider seulement si majeur
}

// Valide le champs Nombre de tournois : retourne true si valeur numérique saisie 
function nbContestValid(quantity){
  if (quantity !== "" && quantity >= 0) { // Champs non vide
    document.getElementById("quantityError").style.display = "none";
    return true;
  } else {
    document.getElementById("quantityError").style.display = "block";
    return false;
  }
}

// Valide le champs Quel tournois : retourne true si un bouton radio selectionné
function locationValid(locationList){
  let location = 'aucun tournoi selectionné';
  for (const radioButton of locationList) {
    if(radioButton.checked) {
      location = radioButton.value;
      document.getElementById("locationError").style.display = "none";
      return [true, location];
    }
  }
  document.getElementById("locationError").style.display = "block";
  return [false, location];
}

// Valide le champs CGU : retourne true si case cochée
function cguValid(checkbox){
  if(checkbox.checked) { 
    document.getElementById("cguError").style.display = "none";
    return true;
  } else {
    document.getElementById("cguError").style.display = "block";
    return false;
  }  
}


const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbContest = document.getElementById("quantity"); 
const locationList = document.querySelectorAll('input[name="location"]');
const cgu = document.getElementById("checkbox1");

// Vérifie la validité des champs saisis et renvoi true si formulaire correctement complété
function validateAll(){
  // Vérifie que tous les champs sont valides et retourne un bouléen pour dire si entierté du form valide ou non
  const isFirstValid = firstValid(first.value);
  const isLastValid = lastValid(last.value);
  const isEmailValid = emailValid(email.value);
  const isBirthdateValid = birthdateValid(birthdate.value);
  const isNumberContestValid = nbContestValid(nbContest.value); 
  const isLocationValid = locationValid(locationList)[0];
  const isCguValid = cguValid(cgu);

  if (isFirstValid && isLastValid && isEmailValid && isBirthdateValid && isNumberContestValid && isLocationValid && isCguValid){ 
    return true;
  } 
  return false;
    
}

// Validation finale du formulaire
form.addEventListener("submit", (event)=>{
  event.preventDefault(); // Evite rechargement de la page (comportement par défault)
  if (validateAll()) {
    console.log("prénom: "+first.value+", nom: "+last.value+", e-mail: "+email.value+', date de naissance: '+birthdate.value+', nombre de tournois déjà participé: '+nbContest.value+', localisation: '+locationValid(locationList)[1]);
    form.reset(); // Réinitialise le formulaire
    form.style.display =  "none";
    // Affiche message de confirmation d'envoi du formulaire
    document.getElementById("formSent").style.display = "flex";
  } else {
    // Supprime message de confirmation lorsqu'envoi d'un deuxième formulaire à la suite mais invalide
    document.getElementById("formSent").style.display = "none";  
  }
})