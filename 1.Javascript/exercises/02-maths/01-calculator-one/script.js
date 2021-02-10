/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", () => {
    
    let opone= parseInt(document.getElementById("op-one").value);
    let optwo= parseInt(document.getElementById("op-one").value);
    
    alert (opone + optwo);
    
    
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let opone = document.getElementById("op-one").value;
        let optwo = document.getElementById("op-two").value;
        alert (opone - optwo);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let opone = document.getElementById("op-one").value;
        let optwo = document.getElementById("op-two").value;
        alert (opone * optwo);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let opone = document.getElementById("op-one").value;
        let optwo = document.getElementById("op-two").value;
        alert (opone / optwo);
    });
})();
