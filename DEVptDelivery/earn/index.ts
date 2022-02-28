import * as defaults from "../modules/js/defaults.ts";
import * as googleAdd from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import earnStyle from "../modules/css/earn.css";

import * as THREE from "three";

console.log(defaultStyle,navStyle,footerStyle,earnStyle);//acivate the styles
defaults.defaults();//load defaults
navfuncs.setActive("earn");
let main: HTMLElement = document.getElementById("main");
//create overall div that will hold threejs and html
let animationScreen:HTMLElement = document.createElement("div")
animationScreen.id = "animationScreen";
//hold only the html
let animationOverlay:HTMLElement = document.createElement("div")
animationOverlay.id = "animationOverlay";
//three js canvas element
let canvas:HTMLElement = document.createElement("canvas");
//h1 inside the animation
let h1:HTMLElement = document.createElement("h1");
h1.innerHTML = "How to complete deliveries and earn";
let button = document.createElement("button");
button.innerHTML = "Learn How";
button.id = "animationStartButton";
//build the overlay
let thingstoadd: HTMLElement[] =[h1,button];
for(let i = 0; i < thingstoadd.length;i++){
    animationOverlay.appendChild(thingstoadd[i]);
} 
//add things to the over all animation div
thingstoadd = [animationOverlay,canvas];
for(let i = 0; i < thingstoadd.length;i++){
    animationScreen.appendChild(thingstoadd[i]);
}
main.appendChild(animationScreen);
//create stats ul
let statsTable:HTMLElement =  document.createElement("ul");
statsTable.id ="statsTable";
//all the stat options
const stats: string[] = [
    "<p id='stat1'>Weekly avg earnings</p>",
    "<p id='stat2'>Weekly avg orders completed</p>",
    "<p id='stat3'>Available balance</p>",
    "<p id='stat4'>Total earned</p>",
    "<p id='stat6'>Orders completed</p>",
    "<p id='stat7'>Orders made</p>"
]
//make each entree in the list
for(let i = 0; i < stats.length; i++){
    //temp = final li
    let temp:HTMLElement =  document.createElement("li");
    temp.innerHTML = stats[i];
    //temp2 is the yellow line
    let temp2:HTMLElement = document.createElement("div");
    temp2.id = "line";
    temp.appendChild(temp2);
    //reuse temp2 and make it the final stat result at the end of the yellow line
    temp2 = document.createElement("p");
    temp2.id = `result${i}`;
    temp2.innerHTML = "00.00";
    temp.appendChild(temp2);
    //add final li to ul
    statsTable.appendChild(temp);
}
//attach final stats table
main.appendChild(statsTable);
//google add
let googleAdd1:HTMLElement = googleAdd.createAdd("onlyAdd");
main.appendChild(googleAdd1);
function learnAnimatio() {// responsible to run the user thru how to make deliveries
    //basic three.js setup
    const scene: THREE.Scene = new THREE.Scene();
    const fov: number = 75;
    const aspect: number = 2;  // the canvas default
    const near: number = 0.1;
    const far: number = 5;
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //move camera back
    camera.position.z = 2;
    //connect our canvs to the three.js engine
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    //make the menu and description disappear
    animationOverlay.style.display = "none";
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    function myRender(time: number) {//custome render function for animations
        time *= 0.001;
        let widthAnimationDiv: string = animationScreen.style.width;
        let heightAnimationDiv: string = animationScreen.style.height;
        //get the three.js representation of the canvas and
        const test = renderer.domElement;
        camera.aspect = test.clientWidth / test.clientHeight;
        camera.updateProjectionMatrix();
        canvas.style.width = widthAnimationDiv;
        canvas.style.height = heightAnimationDiv;

        //update the aspect ratio
        cube.rotation.x = -time;
        cube.rotation.y = time;
        renderer.render(scene, camera);
        requestAnimationFrame(myRender);
    }
    requestAnimationFrame(myRender);
}
button.addEventListener("click",learnAnimatio);