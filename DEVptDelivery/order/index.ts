import * as defaults from "../modules/ts/defaults.ts";
import * as navfuncs from "../modules/ts/nav.ts";

import defaultStyle from "../modules/css/defaults.css";
import navStyle from "../modules/css/nav.css";
import footerStyle from "../modules/css/footer.css";
import mainstyle from "../modules/css/order.css";
import cardStyle from "../modules/css/card.css";

import animationScreen from "../modules/html/animationScreen.html";
import card from "../modules/html/e-card.html";

import { Scene, WebGLRenderer, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh } from "three";

//structure and look of the sight
{
    console.log(defaultStyle, navStyle, footerStyle, mainstyle, cardStyle);
    defaults.defaults();
    navfuncs.default.attachMobNav();
    navfuncs.default.setActive("order");
    const main: HTMLElement = document.getElementById("main");
    //add the store drop down menu options
    let final: string = "";
    for (let i = 0; i <= 10; i++) {
        final += `<option>Store ${i}</option>`;
    }
    //add the simple tags
    main.innerHTML += card;
    main.innerHTML += `
<span id="storeSelectMenu">
    <p>Avaliable Stores</p>
    <select>
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
        <p>deliver too</p><select id="paymentOptions"></select>
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
}
//three.js animation
{
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
}