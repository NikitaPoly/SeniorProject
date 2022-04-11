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

import { WebGLRenderer } from "three";
//this part of the code is responsible for creating the html and css of the page
{
    //activate styles for the page
    console.log(defaultStyle, navStyle, footerStyle, mainStyle, cardStyle);
    //load default images + logos
    defaultsImage.defaults();
    navfuncs.default.attachMobNav();
    navfuncs.default.setActive("login");
    //get the google button for credentials
    const main: HTMLElement = document.getElementById("main");
    //customize templates for spesific page
    //add all templates to the page
    main.innerHTML += card;
    main.innerHTML += `
<div class="add" id="leftAdd"></div>
<h1>Student Only Delivery System</h1>
<div class="add" id="rightAdd"></div>
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
                providing cheap and easy delivery for on campus stores.(if sign in button is not visible, refresh page once)
    </p>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <div id="g_id_onload"
        data-client_id="1092722868151-47c132ejhktbrk8n40mp01gq4o9re9uo.apps.googleusercontent.com"
        data-login_uri="https://www.polyakov.tech/delivery/login"
        data-auto_prompt="false">
     </div>
     <div class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
        data-onsuccess="onSignIn">
     </div>
     <script>
    function onSignIn(googleUser) {
      // get user profile information
      console.log(googleUser.getBasicProfile())
    }
  </script>
`
}
//this part of the code is reponsible for doing the three.js animation
{
    //this function helps pic the right render size to match canvas size
    function resizeRendererToDisplaySize(renderer: WebGLRenderer) {
        const width: number = canvas.clientWidth;
        const height: number = canvas.clientHeight;
        const needResize: boolean = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
    }
    function defaults(time: number) {
        time *= 0.001;  // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;

        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        resizeRendererToDisplaySize(renderer)
        renderer.render(scene, camera);
    }
    //set up the render function
    function doRenderLogin(time: number) {
        defaults(time);
        requestAnimationFrame(doRenderLogin);
    }
    function doRenderSign(time: number) {
        defaults(time);
        requestAnimationFrame(doRenderSign);
    }
    //get the canvas for three.js and attach its appearance to the correct button
    //signup animation
    let btns: HTMLCollectionOf<Element> = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e: Event) => {
            //restet the screen
            let animationOverLay: HTMLElement = document.getElementById("animationOverlay")
            animationOverLay.innerHTML = ``
            if ((e.target as HTMLButtonElement).id == "login") {
                requestAnimationFrame(doRenderLogin)
            } else {
                requestAnimationFrame(doRenderLogin)
            }
            requestAnimationFrame(doRenderSign);
        })
    }
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