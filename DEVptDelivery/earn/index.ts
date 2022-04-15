import * as defaultsImage from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";
import * as myThree from "../modules/ts/animation.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";
import cardStyle from "../modules/css/card.css";

import animationDivC from "../modules/html/animationScreen.html";
import statsTableC from "../modules/html/statsTable.html";
import card from "../modules/html/e-card.html";

import axios from "axios";

import {WebGLRenderer} from "three";

//respinsible for the html css
{
    ///activate styles for the page
    console.log(defaultStyle, navStyle, footerStyle, earnStyle, cardStyle);
    //load default images + logos
    defaultsImage.defaults();
    navfuncs.default.attachMobNav();
    navfuncs.default.setActive("earn");
    const main: HTMLElement = document.getElementById("main");
    //customize templates for spesific page
    //add all templates to the page
    main.innerHTML += card;
    main.innerHTML += `
<div class="add" id="onlyAdd">Google Add</div>
` + animationDivC + statsTableC;
    //customize animation overlay
    const animationOverlay: HTMLDivElement = (document.getElementById("animationOverlay") as HTMLDivElement);
    animationOverlay.innerHTML = `
<h1>How to complete deliveries and earn</h1>
<button id="animationStartButton">Learn How</button>
`
    //customize the stats table
    const statsTable: HTMLUListElement = (document.getElementById("statsTable") as HTMLUListElement);
    const statsArr: string[] = [
        "Weekly avg orders completed",
        "Available balance",
        "Total earned",
        "Orders completed",
        "Orders made"
    ]
    //set the first li tage manually
    statsTable.querySelector("p#stat").innerHTML = "Weekly avg earnings";
    statsTable.querySelector("p#result").innerHTML = "00.00";
    //set the rest with this loop
    for (let i = 0; i < statsArr.length; i++) {
        const liContainer: HTMLLIElement = (statsTable.querySelector("li").cloneNode(true) as HTMLLIElement);
        const stat: HTMLParagraphElement = liContainer.querySelector("p#stat");
        stat.innerHTML = statsArr[i];
        statsTable.appendChild(liContainer)
    }
}
//responsible for the three.js
{
    //this function helps pic the right render size to match canvas size
    function resizeRendererToDisplaySize(renderer:WebGLRenderer) {
        const width:number = canvas.clientWidth;
        const height:number = canvas.clientHeight;
        const needResize:boolean = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
    }
    //set up the render function
    function doRender(time:number) {
        time *= 0.001;  // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;

        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        resizeRendererToDisplaySize(renderer)
        renderer.render(scene, camera);
        requestAnimationFrame(doRender);
    }
    //get the canvas for three.js and attach its appearance to the correct button
    function checkIfThereAreOrders(res){
        const overlay:HTMLElement =  document.getElementById("animationOverlay")
        if(res.status == 201){
            overlay.innerHTML = `
            <h2>No Orders at this time, check back soon</h2>
            <p id="tip">(Refresh in 10 mins to check if new orders are submited)</p>
            `
            return
        }
        console.log(res.data)
        overlay.innerHTML = res.data
    }
    document.getElementById("animationStartButton").addEventListener("click",()=>{
        requestAnimationFrame(doRender);
        const overlay:HTMLElement =  document.getElementById("animationOverlay")
        overlay.innerHTML = "<h2>Pick a delivery</h2>";
        overlay.style.color = "white"
        const email :any = localStorage.getItem("DeliveryLogIn")
        const dataTosend : any = {
            email:email
        }
        const response = axios.put("https://www.polyakov.tech/delivery/earn",dataTosend)
        .then(checkIfThereAreOrders).catch(err=>console.log(err))
        
    });
    const {
        canvas,
        scene,
        renderer,
        camera,
        cube
    } = myThree.default.setupScene();
    //render the picture
}