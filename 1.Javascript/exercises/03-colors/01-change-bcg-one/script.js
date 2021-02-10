/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

   document.getElementById("red").onclick = changered;
   function changered() {
    document.body.style.background = "red";
    return false;
}   

document.getElementById("green").onclick = changegreen;
   function changegreen() {
    document.body.style.background = "green";
    return false;
}   

document.getElementById("yellow").onclick = changeyellow;
   function changeyellow() {
    document.body.style.background = "yellow";
    return false;
}   

document.getElementById("blue").onclick = changeblue;
   function changeblue() {
    document.body.style.background = "blue";
    return false;
}   
})();
