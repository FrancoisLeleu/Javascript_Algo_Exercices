/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  /* age = prompt ("Quel est ton âge ?")
   sexe = prompt ("es-tu une fille ou un garçon ?")
   ville = prompt ("Dans quelle ville habites-tu ?")
   var x = confirm (" tu as " + age + " ans\n " + "tu es un(e) " + sexe + "\n et tu vis à " + ville );
   if (x == true ) {
   alert( "Merci!")
} else {
    alert("oigon")
}*/

var max_count = 5;

function showConfirm() {
  var question = ( age = prompt("quel est ton âge?"), sexe =  prompt ("es-tu une fille ou un garçon ?"), ville = prompt ("Dans quelle ville habites-tu ?"));
  response = confirm (" tu as " + age + " ans\n " + "tu es un(e) " + sexe + "\n et tu vis à " + ville );
  if (response == true) {
    alert("correct answer!");
  } else {
    alert("wrong answer");
    // to limit user for limited count
    if (--max_count > 0)
      showConfirm()
  }
}
showConfirm();
})();
