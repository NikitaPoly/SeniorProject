import * as defaultsImage from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css"

import animationDivC from "../modules/html/animationScreen.html"

import * as THREE from "three";

//activate styles for the page
console.log(defaultStyle, navStyle, footerStyle, mainStyle);
//load default images + logos
defaultsImage.defaults();
navfuncs.default.setActive("login");
navfuncs.default.attachMobNav();
const main:HTMLElement = document.getElementById("main");
//customize templates for spesific page
//add all templates to the page
main.innerHTML  += `
<div class="add" id="leftAdd">Google Add</div>
<h1>Student Only Delivery System</h1>
<div class="add" id="rightAdd">Google Add</div>
<span>
    <h2>Order campus favorites<br>to any campus location</h2>
    <h2>Affordable<br>Safe<br>Fast</h2>
    <h2>Earn straight to venmo<br>by completing orders</h2>
</span>

</div>
` + animationDivC;
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

