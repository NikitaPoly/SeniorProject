import * as defaults from "../modules/js/defaults.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/settings.css";

import settings from "../modules/html/settings.html";

console.log(defaultStyle, navStyle, footerStyle, mainStyle);
defaults.defaults();
navfuncs.setActive("settings");
const main: HTMLElement = document.getElementById("main");
main.innerHTML = settings

//template for the structure of HTML



