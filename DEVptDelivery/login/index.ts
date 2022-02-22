import * as defaults from "../modules/js/defaults.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css"

console.log(defaultStyle, navStyle, footerStyle, mainStyle);
defaults.defaults();

let main: HTMLElement = document.getElementById("main");

let h1: HTMLElement = document.createElement("h1");
h1.innerHTML = "Student Only Delivery System";
main.appendChild(h1);

let googleAddL: HTMLElement = document.createElement("div");
googleAddL.innerHTML = "Google Add";
googleAddL.classList.add("add");
googleAddL.id = "leftAdd";
main.appendChild(googleAddL);

let span: HTMLElement = document.createElement("span");
let h2L: HTMLElement = document.createElement("h2");
h2L.innerHTML = "Order campus favorites to any campus location";
let h2M: HTMLElement = document.createElement("h2");
h2M.innerHTML = "Affordable Safe Fast";
let h2R: HTMLElement = document.createElement("h2");
h2R.innerHTML = "Earn straight to venmo by completing orders";
let h2Ar: HTMLElement[] = [h2L, h2M, h2R];
for (let i = 0; i < h2Ar.length; i++) {
    span.appendChild(h2Ar[i]);
}
main.appendChild(span);

let googleAddR: HTMLElement = document.createElement("div");
googleAddR.innerHTML = "Google Add";
googleAddR.classList.add("add");
googleAddR.id = "leftAdd";
main.appendChild(googleAddR);

let animation:HTMLElement = document.createElement("div");
animation.id = "animationDiv";
let canvas: HTMLElement = document.createElement("canvas");
let p: HTMLElement = document.createElement("p");
p.innerHTML = "Often students on college campuses seek out employment opportunities that do not interfere with a busy class schedule. Some students appreciate the convenience of ordering food and having it delivered. The campus delivery system gives busy students an opportunity to gain flexible employment while also providing cheap and easy delivery for on campus stores. "
let buttonSignup: HTMLElement = document.createElement("button");
buttonSignup.id="signupButton";
buttonSignup.innerHTML = "SignUp";
let buttonLogin:HTMLElement = document.createElement("button");
buttonLogin.id="LoginButton";
buttonLogin.innerHTML = "Login";
let animationLayover: HTMLElement[] = [canvas,p,buttonSignup,buttonLogin];
for( let i = 0; i < animationLayover.length;i++){
    animation.appendChild(animationLayover[i]);
}
main.appendChild(animation);
