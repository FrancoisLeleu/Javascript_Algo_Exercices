/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here

        for (var x=0; x<=21; x++) {
            if (x % 2 == 0) {
                    alert(Math.sqrt(x));
            }
    }

        /* lui dmander d'afficher tout les pairs PUIS de calculer leurs carrés et de l'affiche dans une alert */
    });
})();
