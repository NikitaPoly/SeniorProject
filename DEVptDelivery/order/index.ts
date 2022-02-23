import * as defaults from "../modules/js/defaults.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";

console.log(defaultStyle,navStyle,footerStyle);
defaults.defaults();
navfuncs.setActive("order");