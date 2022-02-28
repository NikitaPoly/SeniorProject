import * as defaults from "../modules/js/defaults.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/settings.css";
console.log(defaultStyle, navStyle, footerStyle, mainStyle);
defaults.defaults();
navfuncs.setActive("settings");

const main: HTMLElement = document.getElementById("main");

//left google add
const leftAdd: HTMLElement = document.createElement("div")
leftAdd.id = "leftAdd"
leftAdd.classList.add("add");
leftAdd.innerHTML = "google Add";
main.appendChild(leftAdd);
//right add
const rightAdd: HTMLElement = document.createElement("div")
rightAdd.id = "rightAdd"
rightAdd.classList.add("add");
rightAdd.innerHTML = "google Add";
main.appendChild(rightAdd);
//div for graduation and name
const nameInfoDiv: HTMLElement = document.createElement("div");
nameInfoDiv.id = "nameInfoDiv";
const h1: HTMLElement = document.createElement("h1");
h1.innerHTML = "Full Name: ";
const graduationP: HTMLElement = document.createElement("p");
graduationP.innerHTML = "Graduation Date";
nameInfoDiv.appendChild(h1);
nameInfoDiv.appendChild(graduationP);
main.appendChild(nameInfoDiv);
//Settings screen
const settingsScreen :HTMLElement = document.createElement("div");
settingsScreen.id = "settingsScreen";
//menu div
const menudiv:HTMLElement = document.createElement("div");
menudiv.id ="settingsDiv";
const settingsList:(string)[] = [
    "Usage Data",
    "Security",
    "Delete Account",
    "Connect Payment"
];
//create all options for settings and append to the settings menu div
for(let i = 0; i < settingsList.length;i++){
    const temp:HTMLElement = document.createElement("p");
    temp.id = `Settings-${settingsList[i]}`
    temp.innerHTML = settingsList[i];
    menudiv.appendChild(temp);
}
//add the menu settings div to the screen
settingsScreen.appendChild(menudiv);
//actual div where options will change
const selectedOptionScreen:HTMLElement = document.createElement("div");
selectedOptionScreen.id="selectedOptionScreen";
selectedOptionScreen.innerHTML = "testing the screen";
settingsScreen.appendChild(selectedOptionScreen);
//finally add whole thing to the maij tag
main.appendChild(settingsScreen);
