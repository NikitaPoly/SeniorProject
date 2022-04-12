import * as defaults from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";
import * as myThree from "../modules/ts/animation.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainstyle from "../modules/css/order.css";
import cardStyle from "../modules/css/card.css";

import animationScreen from "../modules/html/animationScreen.html";
import card from "../modules/html/e-card.html";

import { WebGLRenderer } from "three";

//structure and look of the sight
{
    console.log(defaultStyle, navStyle, footerStyle, mainstyle, cardStyle);
    defaults.defaults();
    navfuncs.default.attachMobNav();
    navfuncs.default.setActive("order");
    const main: HTMLElement = document.getElementById("main");
    //add the store drop down menu options
    const storeList: string[] = [
        "Select Store",
        "C-Store",
        "Taco Wapo",
        "Hoover"
    ] 
    let final: string = "";
    for (let i = 0; i < storeList.length; i++) {
        final += `<option>Store ${storeList[i]}</option>`;
    }
    //add the simple tags
    main.innerHTML += card;
    main.innerHTML += `
<span id="storeSelectMenu">
    <p>Avaliable Stores</p>
    <select id="storeOptions">
    ${final}
    </select>
</span>
<div class="add" id="onlyAdd">Google Add</div>
`;
    //add the animation div
    main.innerHTML += animationScreen;
    const animationDiv: HTMLDivElement = (document.getElementById("animationDiv") as HTMLDivElement);
    main.innerHTML += `
<div id="deliveryDetDiv">
    <span id="deliveryOptionSpan">
        <p>deliver too</p>
        <select id="paymentOptions">
            <option>Julian</option>
            <option>Phi Gamma Delta</option>
        </select>
    </span>
    <span id="paymentOptionSpan">
        <p>Payment option</p><select id="paymentOptions"></select>
    </span>
</div>
<ul>
    <li>
        <p id="info1">Total of Goods</p>
        <p>$00.00</p>
    </li>
    <li>
        <p id="info2">Delivery Fee</p>
        <p>$00.00</p>
    </li>
    <li>
        <p id="info3">Total</p>
        <p>$00.00</p>
    </li>
</ul>
<button>Order</button>
`
let foodDisplays :any = []
foodDisplays = [
    `
    <h1>Choose Items</h1>
    <input type="checkbox" id="Burger" name="Burger" value="10">
    <label for="Burger">$5 - Burger</label>
    `,
    `<p>othere menu<p>`
]
const animationOverlay :any = document.getElementById("animationOverlay");
//make the store select display correct food items
const SelectStoreInput: HTMLSelectElement = (document.getElementById("storeOptions") as HTMLSelectElement);
SelectStoreInput.onchange = (e)=>{
    let value : string = (e.target as any).value
    animationOverlay.innerHTML = foodDisplays[0]
}
}
//three.js animation
{
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
        //set up the render function
        function doRender(time: number) {
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
        const {
            canvas,
            scene,
            renderer,
            camera,
            cube
        } = myThree.default.setupScene();
        //render the picture
        requestAnimationFrame(doRender);
    }
}