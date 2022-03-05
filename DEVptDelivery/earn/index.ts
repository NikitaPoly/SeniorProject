import * as defaultsImage from "../modules/js/defaults.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";

import earn from "../modules/html/earn.html";
import animationDivC from "../modules/html/animationScreen.html";
import statsTableC from "../modules/html/statsTable.html";

import * as THREE from "three";

///activate styles for the page
console.log(defaultStyle, navStyle, footerStyle, earnStyle);
//load default images + logos
defaultsImage.defaults();
navfuncs.setActive("earn");
const main:HTMLElement = document.getElementById("main");
//customize templates for spesific page
//add all templates to the page
main.innerHTML = earn + animationDivC + statsTableC;
//customize animation overlay
const animationOverlay:HTMLDivElement = (document.getElementById("animationOverlay")as HTMLDivElement);
animationOverlay.innerHTML = `
<h1>How to complete deliveries and earn</h1>
<button id="animationStartButton">Learn How</button>
`
//customize the stats table
const statsTable:HTMLUListElement = (document.getElementById("statsTable") as HTMLUListElement);
const statsArr :string[] = [
    "Weekly avg orders completed",
    "Available balance",
    "Total earned",
    "Orders completed",
    "Orders made"
]
//set the first li tage manually
statsTable.querySelector("p#stat").innerHTML = "Weekly avg earnings";
statsTable.querySelector("p#result").innerHTML = "00.00";
//set the rest with this loop
for(let i = 0; i < statsArr.length; i++){
    const liContainer:HTMLLIElement = (statsTable.querySelector("li").cloneNode(true) as HTMLLIElement);
    const stat:HTMLParagraphElement= liContainer.querySelector("p#stat");
    stat.innerHTML = statsArr[i];
    statsTable.appendChild(liContainer)
}