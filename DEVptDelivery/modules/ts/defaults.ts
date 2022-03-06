import logoImg from "../images/Polyakov.2.svg";
import settingsImg from "../images/settingsHat.svg";
import gitHubLogo from "../images/Github.svg";
import instagramLogo from "../images/instagram.svg";
import linkedInLogo from "../images/Linkedin.svg";
import mobileIcon from "../images/hamberger.svg";
export function defaults() {
    //set all refference to the ptlogo to have this as src
    const PtLogoS: HTMLCollectionOf<Element> = document.getElementsByClassName("PTlogo");
    for (let i = 0; i < PtLogoS.length; i++) {
        (PtLogoS[i] as HTMLImageElement).src = logoImg;
    }
    //set all othere svg
    (document.getElementById("settingsImg") as HTMLImageElement).src = settingsImg;
    (document.getElementById("footerGithubLogo") as HTMLImageElement).src = gitHubLogo;
    (document.getElementById("linkedInLogo") as HTMLImageElement).src = linkedInLogo;
    (document.getElementById("instagramLogo") as HTMLImageElement).src = instagramLogo;
    (document.getElementById("hamberger") as HTMLImageElement).src = mobileIcon;
}