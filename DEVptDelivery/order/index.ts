import * as defaults from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainstyle from "../modules/css/order.css";
import cardStyle from "../modules/css/card.css";

import animationScreen from "../modules/html/animationScreen.html";
import card from "../modules/html/e-card.html";

console.log(defaultStyle, navStyle, footerStyle,mainstyle,cardStyle);
defaults.defaults();
navfuncs.default.attachMobNav();
navfuncs.default.setActive("order");
const main: HTMLElement = document.getElementById("main");
//add the store drop down menu options
let final: string = "";
            for(let i = 0; i <= 10; i++){
                final += `<option>Store ${i}</option>`;
            }
//add the simple tags
main.innerHTML += card;
main.innerHTML += `
<span id="storeSelectMenu">
    <p>Avaliable Stores</p>
    <select>
    ${final}
    </select>
</span>
<div class="add" id="onlyAdd">Google Add</div>
`;
//add the animation div
main.innerHTML += animationScreen;
const animationDiv: HTMLDivElement = (document.getElementById("animationDiv") as HTMLDivElement);
main.innerHTML +=`
<div id="deliveryDetDiv">
    <span id="deliveryOptionSpan">
        <p>deliver too</p><select id="paymentOptions"></select>
    </span>
    <span id="paymentOptionSpan">
        <p>Payment option</p><select id="paymentOptions"></select>
    </span>
</div>
<ul>
    <li>
        <p id="info1">Total of Goods</p>
        <p>$00.00</p>
    </li>
    <li>
        <p id="info2">Delivery Fee</p>
        <p>$00.00</p>
    </li>
    <li>
        <p id="info3">Total</p>
        <p>$00.00</p>
    </li>
</ul>
<button>Order</button>
`