
let topElt = document.querySelector(".persuasive");
let logo = document.querySelector(".logo-container");

let topdistance = topElt.getBoundingClientRect().bottom; 
let logodistance = logo.getBoundingClientRect().bottom; 
logo.style.transform = `translateY(${topdistance-logodistance}px)`; 



