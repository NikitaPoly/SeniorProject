import * as defaultsImage from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";
import cardStyle from "../modules/css/card.css";

import animationDivC from "../modules/html/animationScreen.html";
import statsTableC from "../modules/html/statsTable.html";
import card from "../modules/html/e-card.html";

import { Scene, WebGLRenderer, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh } from "three";

import * as THREE from "three";
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
    //get the canvas for three.js
    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    const scene = new Scene();
    const renderer: WebGLRenderer = new WebGLRenderer({ canvas });
    //camera settings
    const fov: number = 75;
    const aspect: number = 2;
    const near: number = .01;
    const far: number = 5;
    const camera: PerspectiveCamera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2;
    //box settings
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);
    //material for box
    const material = new MeshBasicMaterial({ color: 0x44aa88 });
    //make the box
    const cube = new Mesh(geometry, material);
    //add box to scene
    scene.add(cube);
    //render the picture
    requestAnimationFrame(doRender);
}