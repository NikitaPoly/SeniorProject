import * as defaults from "../modules/js/defaults.ts";
import * as googleadfunc from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

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
