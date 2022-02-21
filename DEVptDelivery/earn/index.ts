import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";

import logoImg from "../modules/images/Polyakov.2.svg";
import settingsImg from "../modules/images/settingsHat.svg";
import gitHubLogo from "../modules/images/Github.svg";
import instagramLogo from "../modules/images/instagram.svg";
import linkedInLogo from "../modules/images/Linkedin.svg"

//"activate the style"
console.log(defaultStyle);
console.log(navStyle);
console.log(footerStyle);
//attach the images to the html
const PtLogoS:HTMLCollectionOf<Element> = document.getElementsByClassName("PTlogo");
for(let i = 0; i < PtLogoS.length;i++){
    (PtLogoS[i] as any).src = logoImg;
}
(document.getElementById("settingsImg") as any).src = settingsImg;
(document.getElementById("footerGithubLogo") as any).src = gitHubLogo;
(document.getElementById("linkedInLogo") as any).src = linkedInLogo;
(document.getElementById("instagramLogo") as any).src = instagramLogo;
