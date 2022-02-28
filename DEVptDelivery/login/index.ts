import * as defaults from "../modules/js/defaults.ts";
import * as googleAdd from "../modules/js/googleAdd.ts";
import * as navfuncs from "../modules/js/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css"

import * as THREE from "three";

console.log(defaultStyle, navStyle, footerStyle, mainStyle);//activate styles for page
defaults.defaults();
navfuncs.setActive("login");
let main: HTMLElement = document.getElementById("main");
//left add
let googleAddL: HTMLElement = googleAdd.createAdd("leftAdd")
main.appendChild(googleAddL);
//main h1
let h1: HTMLElement = document.createElement("h1");
h1.innerHTML = "Student Only Delivery System";
main.appendChild(h1);
//right google add
let googleAddR: HTMLElement = googleAdd.createAdd("rightAdd");
main.appendChild(googleAddR);
//span with the tag lines
let span: HTMLElement = document.createElement("span");
let h2L: HTMLElement = document.createElement("h2");
h2L.innerHTML = "Order campus favorites<br>to any campus location";
let h2M: HTMLElement = document.createElement("h2");
h2M.innerHTML = "Affordable<br>Safe<br>Fast";
let h2R: HTMLElement = document.createElement("h2");
h2R.innerHTML = "Earn straight to venmo<br>by completing orders";
//put all h2s into the span and append to main
let h2Ar: HTMLElement[] = [h2L, h2M, h2R];
for (let i = 0; i < h2Ar.length; i++) {
    span.appendChild(h2Ar[i]);
}
main.appendChild(span);
//over all div that holds the three.js animation and the initial text overlay with buttons
let animationDiv: HTMLElement = document.createElement("div");
animationDiv.id = "animationDiv";
//three.js canvas elements
let canvas: HTMLCanvasElement = document.createElement("canvas");
//the content of animation overlay
let p: HTMLElement = document.createElement("p");
p.innerHTML = "Often students on college campuses seek out employment opportunities that do not interfere with a busy class schedule. Some students appreciate the convenience of ordering food and having it delivered. The campus delivery system gives busy students an opportunity to gain flexible employment while also providing cheap and easy delivery for on campus stores. "
let buttonSignup: HTMLElement = document.createElement("button");
buttonSignup.id = "signupButton";
buttonSignup.innerHTML = "SignUp";
let buttonLogin: HTMLElement = document.createElement("button");
buttonLogin.id = "LoginButton";
buttonLogin.innerHTML = "Login";
//put all animation overlay into the over only div
let animationLayover: HTMLElement[] = [p, buttonSignup, buttonLogin];
let overLayDiv: HTMLElement = document.createElement("div");
overLayDiv.id = "animatioOverlay";
for (let i = 0; i < animationLayover.length; i++) {
    overLayDiv.appendChild(animationLayover[i]);
}
//add canvas and animation overlay to the over all div and append to main
animationDiv.appendChild(canvas)
animationDiv.appendChild(overLayDiv);
main.appendChild(animationDiv)
//structure set up is done here
//this part of the code is responsible for the animation for sign up
function signUpAnimation() {// responsible to run the user thru the account creation steps
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
    p.style.display = "none";
    buttonLogin.style.display = "none";
    buttonSignup.style.display = "none"
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    function myRender(time: number) {//custome render function for animations
        time *= 0.001;
        let widthAnimationDiv: string = animationDiv.style.width;
        let heightAnimationDiv: string = animationDiv.style.height;
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
function loginAnimation(){//login animation
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
p.style.display = "none";
buttonLogin.style.display = "none";
buttonSignup.style.display = "none"
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
function myRender(time: number) {//custome render function for animations
    time *= 0.001;
    let widthAnimationDiv: string = animationDiv.style.width;
    let heightAnimationDiv: string = animationDiv.style.height;
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
buttonLogin.addEventListener("click",loginAnimation);
buttonSignup.addEventListener("click", signUpAnimation);