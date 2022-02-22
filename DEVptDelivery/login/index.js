"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaults_css_1 = __importDefault(require("../modules/css/defaults.css"));
const nav_css_1 = __importDefault(require("../modules/css/nav.css"));
const footer_css_1 = __importDefault(require("../modules/css/footer.css"));
const Polyakov_2_svg_1 = __importDefault(require("../modules/images/Polyakov.2.svg"));
const settingsHat_svg_1 = __importDefault(require("../modules/images/settingsHat.svg"));
const Github_svg_1 = __importDefault(require("../modules/images/Github.svg"));
const instagram_svg_1 = __importDefault(require("../modules/images/instagram.svg"));
const Linkedin_svg_1 = __importDefault(require("../modules/images/Linkedin.svg"));
//"activate the style"
console.log(defaults_css_1.default);
console.log(nav_css_1.default);
console.log(footer_css_1.default);
//attach the images to the html
const PtLogoS = document.getElementsByClassName("PTlogo");
for (let i = 0; i < PtLogoS.length; i++) {
    PtLogoS[i].src = Polyakov_2_svg_1.default;
}
document.getElementById("settingsImg").src = settingsHat_svg_1.default;
document.getElementById("footerGithubLogo").src = Github_svg_1.default;
document.getElementById("linkedInLogo").src = Linkedin_svg_1.default;
document.getElementById("instagramLogo").src = instagram_svg_1.default;
