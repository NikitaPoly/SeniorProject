import * as defaults from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/settings.css";
import cardStyle from "../modules/css/card.css";

import settings from "../modules/html/settings.html";
import userDataDisplayC from "../modules/html/userDataDisplay.html";
import card from "../modules/html/e-card.html";

console.log(defaultStyle, navStyle, footerStyle, mainStyle,cardStyle);
defaults.defaults();
navfuncs.default.setActive("settings");
navfuncs.default.attachMobNav();
const main: HTMLElement = document.getElementById("main");
main.innerHTML += card;
main.innerHTML += settings + userDataDisplayC;
//customize the user display component
const settingsScreen: HTMLDivElement = (document.getElementById("settingsScreen") as HTMLDivElement);
let options: string[] = [
    "Usage_Data",
    "Security",
    "Delete_Account",
    "Connect_Payment"
]
//set all labels
for (let i = 0; i < options.length; i++) {
    const pLabel: HTMLParagraphElement = document.createElement("p");
    pLabel.id = `${options[i]}`;
    pLabel.innerHTML = options[i].replace(/_/, " ");
    pLabel.addEventListener("click", displayCorrectUserData);
    settingsScreen.querySelector("#settingsLables").appendChild(pLabel);
}
//display the user settings based on what lable is clicked
function displayCorrectUserData(event: MouseEvent) {
    //clear the settings display
    const left: HTMLDivElement = settingsScreen.querySelector("#left");
    const right: HTMLDivElement = settingsScreen.querySelector("#right");
    left.innerHTML = "";
    right.innerHTML = "";
    left.style.flexDirection = "row";
    //update the stats in the left div
    function populateStatLables() {
        const statsDiv: HTMLDivElement = document.createElement("div");
        statsDiv.id = "statsDiv";
        stats.forEach((statName: string) => {
            const tempPStatLable: HTMLParagraphElement = document.createElement("p")
            tempPStatLable.innerHTML = statName;
            statsDiv.appendChild(tempPStatLable);
        });
        left.appendChild(statsDiv);
    }
    //uodate the stat values on the left div
    function populateStatValues() {
        const valueDiv: HTMLDivElement = document.createElement("div");
        valueDiv.id = "valueDiv";
        results.forEach((statvalue: string) => {
            const tempPStatValue: HTMLParagraphElement = document.createElement("p")
            tempPStatValue.innerHTML = statvalue;
            valueDiv.appendChild(tempPStatValue);
        });
        left.appendChild(valueDiv);
    }
    //reset color of all
    options.forEach((id: string) => {
        (document.querySelector(`#${id}`) as HTMLParagraphElement).style.color = "white";
    });
    //set color of selected option to yellow
    (event.target as HTMLDivElement).style.color = "var(--depauwYellow--)";
    let stats: string[] = [];
    let results: string[] = [];
    //depending on what button was pressed populate with spesific 
    switch ((event.target as HTMLParagraphElement).id) {
        case options[0]:
            stats = [
                "Available Ballance",
                "Total Earned",
                "Orders Completed",
                "Orders Made"
            ]
            populateStatLables();
            results = [
                "$00.00",
                "$00.00",
                "0",
                "0"
            ]
            populateStatValues();
            //finish building the result of the option clicked with the right div
            let optionsHTML: string = "";
            for(let i = 0; i <= 10; i++){
                optionsHTML += `<option>$${i*10}</option>`;
            }
            right.innerHTML = `
                <p>Can only withdraw in increments of $10</p>
                <select>
                ${optionsHTML}
                </select>
                <button>Whithdraw</button>
            `
            break
        case options[1]:
            stats = [
                "DePauw Email Connected",
                "Username",
                "Show Passoword",
                "Due to you graduating and no longer being a student at DePauw account scheduled for deletion on : AUG 0000"
            ]
            populateStatLables();
            
            results = [
                "NikitaPolyakov_2022",
                "Example Username",
                "***********"
            ]
            populateStatValues();
            //add custom css to accoutn deletion p
            left.querySelector("#statsDiv p:last-child").id = "countdownP";
            //finish building the result of the option clicked with the right div
            right.innerHTML = `
            <button>Change Password</button>
            <input type="text" placeholder="NewPassword">
            `
            break
        case options[2]:
            settingsScreen.querySelector("#left").innerHTML = `
            <h1>Why would you like to delete your account?(Optional)</h1>
            <textarea placeholder="Start typing here."></textarea>
            `;
            settingsScreen.querySelector("#right").innerHTML = `
            <button>Delete Account</button>
            `;
            left.style.flexDirection = "column";
            break
        case options[3]:
            settingsScreen.querySelector("#left").innerHTML = `
            <h1 id="paymentStatus">Payment is Good</h1>
            `;
            settingsScreen.querySelector("#right").innerHTML = `
            <button>Connect Venmo</button>
            <button>Disconnect Venmo</button>
            `;
            break
    }
}
//make first element defaultly show up
(settingsScreen.querySelector(`p#${options[0]}`) as HTMLParagraphElement).click()


