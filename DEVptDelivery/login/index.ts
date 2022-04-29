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

import axios from "axios";

import { WebGLRenderer } from "three";
//delcare global functions 
let MyCube :any = ""
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
                providing cheap and easy delivery for on campus stores.
    </p>
   <button id="login"class="btn">Login</button>
   <button id="signup"class="btn">Signup</button>
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
                animationOverLay.innerHTML = `
                <input type="text" id="email" placeholder="DePauw Email"><br>
                <label for="password">password</label>
                <input type="password" id="password" name="password">
                <button id="ok">OK</button>
                <p>(passwords are not secure, do not use passwords that protect other accounts)</p>
                `
                const buttonOK :HTMLElement = document.getElementById("ok")
                buttonOK.addEventListener("click",()=>{
                    const email = (document.getElementById("email")as any).value
                    const password = (document.getElementById("password") as any).value
                    if(email && password){
                        axios.put("./login",{"email":email,"password":password}).then(res=>{
                            if(res.status == 201){
                                alert("account can not be found")
                                MyCube.material.color.setHex(0xDC143C)
                                return
                            }
                            localStorage.setItem("DeliveryLogIn",email)
                            alert("you have been logged in")
                            MyCube.material.color.setHex(0x007500)
                            console.log(res)
                        })
                        return
                    }
                    alert("Enter password and email")
                    MyCube.material.color.setHex(0xDC143C)
                })
                requestAnimationFrame(doRenderLogin)
            } else {//sign up
                animationOverLay.innerHTML = `
                <input id="inputE" type="email" placeholder="DePauw Email"><br>
                <label for="password">password</label>
                <input type="password" id="password" name="password">
                <button id="sendsignup"class="btn">Signup</button>
                <p>(passwords are not secure, do not use passwords that protect other accounts)</p>
                `

                let sendBTN : HTMLElement = document.getElementById("sendsignup")
                let input : HTMLInputElement = (document.getElementById("inputE") as HTMLInputElement)
                let password: HTMLInputElement = (document.getElementById("password")as HTMLInputElement)
                sendBTN.addEventListener("click",()=>{
                    const email = input.value
                    const passwordv = password.value
                    if((email.includes("@depauw.edu") || email.includes("@DePauw.edu") || email.includes("@Depauw.edu")) && passwordv.length > 0){
                        localStorage.setItem("DeliveryLogIn",email)
                        const DataTosend = {
                            "email" : email,
                            "password" : passwordv
                        }
                        let requestTest = axios.post("./login",DataTosend).then(()=>{
                            animationOverLay.innerHTML = `
                        <h1>User created/ logged in</h1>
                        `
                        MyCube.material.color.setHex(0x007500)
                         }).catch(err=>{
                            animationOverLay.innerHTML = `
                            <h1>Error Occured, try again</h1>
                            `
                            MyCube.material.color.setHex(0xDC143C)
                            console.log(err)
                         })
                    }
                    else{
                        alert("not a DePauw Account  use @depauw.edu format")
                        MyCube.material.color.setHex(0xDC143C)
                    }
                });
                requestAnimationFrame(doRenderSign)
            }
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
    MyCube = cube
    //render the picture
}