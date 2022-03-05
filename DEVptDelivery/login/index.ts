import * as defaultsImage from "../modules/js/defaults.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css"

import login from "../modules/html/login.html";
import animationDivC from "../modules/html/animationScreen.html"

import * as THREE from "three";

//activate styles for the page
console.log(defaultStyle, navStyle, footerStyle, mainStyle);
//load default images + logos
defaultsImage.defaults();
navfuncs.setActive("login");
const main:HTMLElement = document.getElementById("main");
//customize templates for spesific page
//add all templates to the page
main.innerHTML = login + animationDivC;
//cutomize animation overlay
const animationOvelay:HTMLDivElement = (document.getElementById("animationOverlay")as HTMLDivElement);
animationOvelay.innerHTML = `
    <p>
    Often students on college campuses seek out employment opportunities that do not interfere with a busy
                class schedule. Some students appreciate the convenience of ordering food and having it delivered. The
                campus delivery system gives busy students an opportunity to gain flexible employment while also
                providing cheap and easy delivery for on campus stores. 
    </p>
    <button id="signupButton">SignUp</button>
    <button id="LoginButton">Login</button>
`

