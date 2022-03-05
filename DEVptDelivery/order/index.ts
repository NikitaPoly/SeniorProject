import * as defaults from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainstyle from "../modules/css/order.css";

import order from "../modules/html/order.html";

console.log(defaultStyle, navStyle, footerStyle,mainstyle);
defaults.defaults();
navfuncs.setActive("order");
const main: HTMLElement = document.getElementById("main");
main.innerHTML = order;
