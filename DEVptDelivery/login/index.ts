console.log("hello");
import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import logoImg from "../modules/images/Polyakov.2.svg";
import settingsImg from "../modules/images/settingsHat.svg"
console.log("here" + defaultStyle);
console.log("here" + navStyle);
(document.getElementById("navLogo") as any).src = logoImg;
(document.getElementById("settingsImg") as any).src = settingsImg;
