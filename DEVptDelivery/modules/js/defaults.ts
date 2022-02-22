import logoImg from "../images/Polyakov.2.svg";
import settingsImg from "../images/settingsHat.svg";
import gitHubLogo from "../images/Github.svg";
import instagramLogo from "../images/instagram.svg";
import linkedInLogo from "../images/Linkedin.svg";
export function defaults() {
    //set all refference to the ptlogo to have this as src
    const PtLogoS: HTMLCollectionOf<Element> = document.getElementsByClassName("PTlogo");
    for (let i = 0; i < PtLogoS.length; i++) {
        (PtLogoS[i] as any).src = logoImg;
    }
    //set all othere svg
    (document.getElementById("settingsImg") as any).src = settingsImg;
    (document.getElementById("footerGithubLogo") as any).src = gitHubLogo;
    (document.getElementById("linkedInLogo") as any).src = linkedInLogo;
    (document.getElementById("instagramLogo") as any).src = instagramLogo;
}