import * as defaults from "../modules/js/defaults.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";

console.log(defaultStyle,navStyle,footerStyle,earnStyle);//acivate the styles
defaults.defaults();//load defaults
let main: HTMLElement = document.getElementById("main");
