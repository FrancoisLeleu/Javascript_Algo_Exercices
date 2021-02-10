/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        for (i=1; i <= 100; i++) 
        {
            if (i%5==0 && i%3==0)
            {
                console.log(i + " fizzbuzz");
            }
            else if (i%3==0) 
            {
                console.log(i + " fizz");
            } 
            else if (i%5==0)
            {
                console.log(i + " buzz");
            }
            else
            {
                console.log(i);
            }
        }

    });
})();
