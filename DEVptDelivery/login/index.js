"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaults_css_1 = __importDefault(require("../modules/css/defaults.css"));
const nav_css_1 = __importDefault(require("../modules/css/nav.css"));
const footer_css_1 = __importDefault(require("./modules/css/footer.css"));
const Polyakov_2_svg_1 = __importDefault(require("../modules/images/Polyakov.2.svg"));
const settingsHat_svg_1 = __importDefault(require("../modules/images/settingsHat.svg"));
//"activate the style"
console.log(defaults_css_1.default);
console.log(nav_css_1.default);
console.log(footer_css_1.default);
//attach the images to the html
document.getElementById("navLogo").src = Polyakov_2_svg_1.default;
document.getElementById("settingsImg").src = settingsHat_svg_1.default;
