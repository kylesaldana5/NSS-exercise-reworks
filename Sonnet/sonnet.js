// Take the contents of the sonnet div and place it in a variable.

let sonnet = document.getElementById("sonnet").innerHTML;
// Find and output the starting position of the word "orphans".

let orphans = sonnet.indexOf("orphans");
// Output the number of characters in the sonnet.
let outPut = sonnet.length;
// Replace the first occurance of the string "winter" with "yuletide".
let replace = sonnet.replace("winter","yuletide");
// Replace all occurances of the string "the" with "a large".
let replaceAll = {
    the: "a large",
    with: "a large",
};
let newSonnet = sonnet.replace(/the|with/gi, match => replaceAll[match])
// Set the content of the sonnet div with the new string.

let create = document.createElement("div")
    create.innerHTML = newSonnet
let body = document.getElementById("body");
    body.appendChild(create)



