import * as defaults from "../modules/js/defaults.ts";
import * as googleAdd from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";

import earn from "../modules/html/earn.html";

import * as THREE from "three";

console.log(defaultStyle,navStyle,footerStyle,earnStyle);//acivate the styles
defaults.defaults();//load defaults
navfuncs.setActive("earn");
const main: HTMLElement = document.getElementById("main");
main.innerHTML = earn;