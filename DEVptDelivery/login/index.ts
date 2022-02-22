import * as defaults from "../modules/js/defaults.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css"

console.log(defaultStyle, navStyle, footerStyle, mainStyle);//activate styles for page
defaults.defaults();
let main: HTMLElement = document.getElementById("main");
//left add
let googleAddL: HTMLElement = document.createElement("div");
googleAddL.innerHTML = "Google Add";
googleAddL.classList.add("add");
googleAddL.id = "leftAdd";
main.appendChild(googleAddL);
//main h1
let h1: HTMLElement = document.createElement("h1");
h1.innerHTML = "Student Only Delivery System";
main.appendChild(h1);
//right google add
let googleAddR: HTMLElement = document.createElement("div");
googleAddR.innerHTML = "Google Add";
googleAddR.classList.add("add");
googleAddR.id = "rightAdd";
main.appendChild(googleAddR);
//span with the tag lines
let span: HTMLElement = document.createElement("span");
let h2L: HTMLElement = document.createElement("h2");
h2L.innerHTML = "Order campus favorites<br>to any campus location";
let h2M: HTMLElement = document.createElement("h2");
h2M.innerHTML = "Affordable<br>Safe<br>Fast";
let h2R: HTMLElement = document.createElement("h2");
h2R.innerHTML = "Earn straight to venmo<br>by completing orders";
//put all h2s into the span and append to main
let h2Ar: HTMLElement[] = [h2L, h2M, h2R];
for (let i = 0; i < h2Ar.length; i++) {
    span.appendChild(h2Ar[i]);
}
main.appendChild(span);
//over all div that holds the three.js animation and the initial text overlay with buttons
let animationDiv: HTMLElement = document.createElement("div");
animationDiv.id = "animationDiv";
//three.js canvas elements
let canvas: HTMLElement = document.createElement("canvas");
//the content of animation overlay
let p: HTMLElement = document.createElement("p");
p.innerHTML = "Often students on college campuses seek out employment opportunities that do not interfere with a busy class schedule. Some students appreciate the convenience of ordering food and having it delivered. The campus delivery system gives busy students an opportunity to gain flexible employment while also providing cheap and easy delivery for on campus stores. "
let buttonSignup: HTMLElement = document.createElement("button");
buttonSignup.id = "signupButton";
buttonSignup.innerHTML = "SignUp";
let buttonLogin: HTMLElement = document.createElement("button");
buttonLogin.id = "LoginButton";
buttonLogin.innerHTML = "Login";
//put all animation overlay into the over only div
let animationLayover: HTMLElement[] = [p, buttonSignup, buttonLogin];
let overLayDiv: HTMLElement = document.createElement("div");
overLayDiv.id = "animatioOverlay";
for (let i = 0; i < animationLayover.length; i++) {
    overLayDiv.appendChild(animationLayover[i]);
}
//add canvas and animation overlay to the over all div and append to main
animationDiv.appendChild(canvas)
animationDiv.appendChild(overLayDiv);
main.appendChild(animationDiv)

