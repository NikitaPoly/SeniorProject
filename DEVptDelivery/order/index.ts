import * as defaults from "../modules/js/defaults.ts";
import * as googleadfunc from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainstyle from "../modules/css/order.css";

console.log(defaultStyle, navStyle, footerStyle,mainstyle);
defaults.defaults();
navfuncs.setActive("order");
const main: HTMLElement = document.getElementById("main");
//Avaiabale stores drop down
//drop down label p tag
const dropdownLabel: HTMLElement = document.createElement("p");
dropdownLabel.innerHTML = "Avaliable Stores";
//drop down select
const inputBox: HTMLElement = document.createElement("select");
//span to hold all of it
const span: HTMLElement = document.createElement("span")
span.id = "storeSelectMenu";
span.appendChild(dropdownLabel);
span.appendChild(inputBox);
main.appendChild(span);
//add google add
const onlyadd: HTMLElement = googleadfunc.createAdd("onlyAdd");
main.appendChild(onlyadd);
//animation box
const menuLabel :HTMLElement = document.createElement("p");
menuLabel.innerHTML = "Menu";
main.appendChild(menuLabel);
//three.js canvas
const canvas:HTMLElement = document.createElement("canvas");
main.appendChild(canvas);
//payemnt optin select
//span for it
const paymentSpan:HTMLElement = document.createElement("span")
span.id = "paymentOptionSpan";
//label for it
const paymentLabel :HTMLElement = document.createElement("p")
paymentLabel.innerHTML = "Payment option";
paymentSpan.appendChild(paymentLabel);
//input
const dropdownOptions: HTMLElement = document.createElement("select");
dropdownOptions.id = "paymentOptions";
paymentSpan.appendChild(dropdownOptions);
main.appendChild(paymentSpan);
//ul list of the order info
//overall ul
const orderInfoUl:HTMLElement = document.createElement("ul");
//info for each li
const info: string[] = [
    "<p id='info1'>Total of Goods</p><p>$00.00</p>",
    "<p id='info2'>Delivery Fee</p><p>$00.00</p>",
    "<p id='info3'>Total</p><p>$00.00</p>"
]
//add each il to the ul
for(let i = 0; i< info.length;i++){
    const temp: HTMLElement = document.createElement("li");
    temp.innerHTML = info[i];
    orderInfoUl.appendChild(temp);
}
main.appendChild(orderInfoUl);
//order button
const orderButton:HTMLElement = document.createElement("button");
orderButton.innerHTML = "Order";
main.appendChild(orderButton);