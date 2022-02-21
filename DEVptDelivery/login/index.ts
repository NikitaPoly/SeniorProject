import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";

import logoImg from "../modules/images/Polyakov.2.svg";
import settingsImg from "../modules/images/settingsHat.svg"

//"activate the style"
console.log(defaultStyle);
console.log(navStyle);
console.log(footerStyle);
//attach the images to the html
const PtLogoS:HTMLCollectionOf<Element> = document.getElementsByClassName("PTlogo");
console.log(PtLogoS)
for(let i = 0; i < PtLogoS.length;i++){
    (PtLogoS[i] as any).src = logoImg;
}
(document.getElementById("settingsImg") as any).src = settingsImg;
