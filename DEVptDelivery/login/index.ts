import * as defaultsImage from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";
import * as myThree from "../modules/ts/animation.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainStyle from "../modules/css/login.css";
import cardStyle from "../modules/css/card.css";

import animationDivC from "../modules/html/animationScreen.html"
import card from "../modules/html/e-card.html";

import {WebGLRenderer} from "three";
//this part of the code is responsible for creating the html and css of the page
{
    //activate styles for the page
    console.log(defaultStyle, navStyle, footerStyle, mainStyle, cardStyle);
    //load default images + logos
    defaultsImage.defaults();
    navfuncs.default.attachMobNav();
    navfuncs.default.setActive("login");
    const main: HTMLElement = document.getElementById("main");
    //customize templates for spesific page
    //add all templates to the page
    main.innerHTML += card;
    main.innerHTML += `
<div class="add" id="leftAdd">Google Add</div>
<h1>Student Only Delivery System</h1>
<div class="add" id="rightAdd">Google Add</div>
<span>
    <h2>Order campus favorites<br>to any campus location</h2>
    <h2>Affordable<br>Safe<br>Fast</h2>
    <h2>Earn straight to venmo<br>by completing orders</h2>
</span>

</div>
` + animationDivC;
    //cutomize animation overlay
    const animationOvelay: HTMLDivElement = (document.getElementById("animationOverlay") as HTMLDivElement);
    animationOvelay.innerHTML = `
    <p>
    Often students on college campuses seek out employment opportunities that do not interfere with a busy
                class schedule. Some students appreciate the convenience of ordering food and having it delivered. The
                campus delivery system gives busy students an opportunity to gain flexible employment while also
                providing cheap and easy delivery for on campus stores. 
    </p>
    <button id="signupButton">SignUp</button>
    <button id="LoginButton">Login</button>
`
}
//this part of the code is reponsible for doing the three.js animation
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
    //signup animation
    document.getElementById("signupButton").addEventListener("click",()=>{
        requestAnimationFrame(doRender);
        document.getElementById("animationOverlay").style.display = "none";
    });
    //login animation
    document.getElementById("LoginButton").addEventListener("click",()=>{
        requestAnimationFrame(doRender);
        document.getElementById("animationOverlay").style.display = "none";
    });
    //get the canvas for three.js
    const {
        canvas,
        scene,
        renderer,
        camera,
        cube
    } = myThree.default.setupScene();
    //render the picture
}