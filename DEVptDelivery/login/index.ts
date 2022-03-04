import * as defaults from "../modules/js/defaults.ts";
import * as googleAdd from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css"

import login from "../modules/html/login.html";

import * as THREE from "three";

console.log(defaultStyle, navStyle, footerStyle, mainStyle);//activate styles for page
defaults.defaults();
navfuncs.setActive("login");
const main:HTMLElement = document.getElementById("main");
main.innerHTML = login;
//this part of the code is responsible for the animation for sign up
