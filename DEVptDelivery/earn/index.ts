import * as defaults from "../modules/js/defaults.ts";
import * as googleAdd from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";

console.log(defaultStyle,navStyle,footerStyle,earnStyle);//acivate the styles
defaults.defaults();//load defaults
navfuncs.setActive("earn");
let main: HTMLElement = document.getElementById("main");
//create overall div that will hold threejs and html
let animationScreen:HTMLElement = document.createElement("div")
animationScreen.id = "animationScreen";
//hold only the html
let animationOverlay:HTMLElement = document.createElement("div")
animationOverlay.id = "animationOverlay";
//three js canvas element
let canvas:HTMLElement = document.createElement("canvas");
canvas.id= "three.js";
//h1 inside the animation
let h1:HTMLElement = document.createElement("h1");
h1.innerHTML = "How to complete deliveries and earn";
let button = document.createElement("button");
button.innerHTML = "Learn How";
button.id = "animationStartButton";
//build the overlay
let thingstoadd: HTMLElement[] =[h1,button];
for(let i = 0; i < thingstoadd.length;i++){
    animationOverlay.appendChild(thingstoadd[i]);
} 
//add things to the over all animation div
thingstoadd = [animationOverlay,canvas];
for(let i = 0; i < thingstoadd.length;i++){
    animationScreen.appendChild(thingstoadd[i]);
}
main.appendChild(animationScreen);
//create stats ul
let statsTable:HTMLElement =  document.createElement("ul");
statsTable.id ="statsTable";
//all the stat options
const stats: string[] = [
    "<p id='stat1'>Weekly avg earnings</p>",
    "<p id='stat2'>Weekly avg orders completed</p>",
    "<p id='stat3'>Available balance</p>",
    "<p id='stat4'>Total earned</p>",
    "<p id='stat6'>Orders completed</p>",
    "<p id='stat7'>Orders made</p>"
]
//make each entree in the list
for(let i = 0; i < stats.length; i++){
    //temp = final li
    let temp:HTMLElement =  document.createElement("li");
    temp.innerHTML = stats[i];
    //temp2 is the yellow line
    let temp2:HTMLElement = document.createElement("div");
    temp2.id = "line";
    temp.appendChild(temp2);
    //reuse temp2 and make it the final stat result at the end of the yellow line
    temp2 = document.createElement("p");
    temp2.id = `result${i}`;
    temp2.innerHTML = "00.00";
    temp.appendChild(temp2);
    //add final li to ul
    statsTable.appendChild(temp);
}
//attach final stats table
main.appendChild(statsTable);
//google add
let googleAdd1:HTMLElement = googleAdd.createAdd("onlyAdd");
main.appendChild(googleAdd1);
