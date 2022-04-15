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

import axios from "axios";

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
        "C-Store"
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
        <input id="adress" type="text" placeholder="Type adress of destination location">
    </span>
    <span id="paymentOptionSpan">
        <p>Payment option</p>
        <select>
        <option>Venmo</option>
        </select>
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
<button id="orderBtn">Order</button>
`
let foodDisplays :any = []
foodDisplays = [
    `
    <h1>Choose Items</h1>
    <form id="orderForm">
    <input type="checkbox" id="Burger" name="Burger" value="Burger">
    <label for="Burger">$5 - Burger</label><br>
    <input type="checkbox" id="PBSandwich" name="PBSandwich" value="PBSandwich">
    <label for="PBSandwich">$5 - Penutbutter Sandwich</label><br>
    <input type="checkbox" id="Sandwich" name="Sandwich" value="Sandwich">
    <label for="Sandwich">$5 - Sandwich (varies based on day of week)</label><br>
    <input type="checkbox" id="Pepsi" name="Pepsi" value="Pepsi">
    <label for="Pepsi">$5 - Pepsi</label><br>
    <input type="checkbox" id="DPepsi" name="DPepsi" value="DPepsi">
    <label for="DPepsi">$5 - Diet Pepsi</label><br>
    <input type="checkbox" id="Mtdew" name="Mtdew" value="Mtdew">
    <label for="Mtdew">$5 - Mt.Dew</label><br>
    <input type="checkbox" id="Gatorade" name="Gatorade" value="Gatorade">
    <label for="Gatorade">$5 - Gatorade</label><br>
    <select  id="colorOfG"name="Gatorade">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="lightBlue">light blue</option>
    <option value="white">white</option>
    </select>
    <label for="GatoradeColor">GatoradeColor</label><br>

    <input type="checkbox" id="BagelBites" name="BagelBites" value="BagelBites">
    <label for="BagelBites">$5 - BagelBites</label><br>
    
    <input type="checkbox" id="TotinoPizza" name="TotinoPizza" value="TotinoPizza">
    <label for="TotinoPizza">$5 - TotinoPizza</label><br>

    <input type="checkbox" id="FitKitchen" name="FitKitchen" value="FitKitchen">
    <label for="FitKitchen">$5 - FitKitchen meal</label><br>

    <input type="checkbox" id="TGIFWings" name="TGIFWings" value="TGIFWings">
    <label for="TGIFWings">$5 - TGIF Wings</label><br>

    <input type="checkbox" id="RedBaron" name="RedBaron" value="RedBaron">
    <label for="RedBaron">$5 - RedBaron Pizza</label><br>
    
    <input type="checkbox" id="Milk" name="Milk" value="Milk">
    <label for="Milk">$5 - Milk</label><br>

    <input type="checkbox" id="IcePint" name="IcePint" value="IcePint">
    <label for="IcePint">$5 - ice cream pint</label><br>

    <input type="checkbox" id="IceSandwich" name="IceSandwich" value="IceSandwich">
    <label for="IceSandwich">$5 - Icecream Sandwich</label><br>

    <input type="checkbox" id="IceCone" name="IceCone" value="IceCone">
    <label for="IceCone">$5 - Icecream Cone</label><br>

    <input type="checkbox" id="Tea" name="Tea" value="Tea">
    <label for="Tea">$5 - Yachak Mate Tea</label><br>
    </form>
    `
]
//add the event to handle sending order data to the server
interface order{
    foods: string[],
    GatoradeColor: string,
    adress:string,
    MYid:string,
    userEmail:string
}
function SendOrder(order:order){
    console.log(order)
    const response = axios.post("https://www.polyakov.tech/delivery/order",order).then(res =>{    
                        console.log(res)
                        let timer = setInterval(()=>{
                            axios.put("https://www.polyakov.tech/delivery/order",{
                                orderID : order["MYid"]
                            }).then((res)=>{
                                if (res.status == 201){
                                    const statusDisplay : HTMLElement = document.getElementById("statush2")
                                    statusDisplay.innerHTML = `
                                    <div id="DeliveryStatus">
                                        <h2 id="statush2">Status:Delivery Done</h2>
                                    <p id="tip">(Look outside all doors of your building)</p>
                                </div>
                                    `
                                    clearInterval(timer)
                                }
                                else{
                                    const statusDisplay : HTMLElement = document.getElementById("statush2")
                                    var today = new Date();
                                    const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                                    statusDisplay.innerHTML = `
                                    <div id="DeliveryStatus">
                                        <h2 id="statush2">Status:Delivery Done</h2>
                                    <p id="tip">(Last update at ${currentTime})</p>
                                </div>
                                `
                                    
                                }
                            })
                        },60000)
                        animationOverlay.innerHTML = `
                            <div id="DeliveryStatus">
                                <h2 id="statush2">Status: Delivery in progress</h2>
                                <p id="tip">(Status will be update once your order has been dropped off)</p>
                            </div>
                        `
                        
                        }).catch(err=>{animationOverlay.innerHTML="<h2>Sorry Erro Occurred,Try Again</h2>"})
    
}
function GetFinalDetails(order:order){
    const adress: HTMLElement = document.getElementById("adress")
    if((adress as any).value == ""){
        alert("No delivery destination given")
    }
    order["adress"] = (adress as any).value
    order["payment"] = "Venmo"
    order["MYid"] = '_' + Math.random().toString(36).substr(2, 9)
    order["userEmail"] = localStorage.getItem("DeliveryLogIn")
    SendOrder(order)

}
function CreateOrder(e:Event){
    let form :HTMLElement  = document.getElementById("orderForm")
    let allInputs:HTMLCollectionOf<HTMLInputElement>  = null
    try{
        allInputs= form.getElementsByTagName("input")
    }
    catch(err){
        alert("No food selected")
        return
    }
    let order : order = {
        foods:[],
        GatoradeColor:"",
        adress:"",
        MYid:"",
        userEmail:""
    }
    for(let i = 0; i < allInputs.length; i ++){
        if(allInputs[i].checked){
            if (allInputs[i].id == "Gatorade" ){
                order["GatoradeColor"] = (document.getElementById("colorOfG") as any).value
            }
            order["foods"].push(allInputs[i].value)
        }
    }
    if(order["foods"].length == 0){
        alert("No food selected")
        return
    }
    GetFinalDetails(order)
}
let orderBtn:HTMLElement = document.getElementById("orderBtn")
orderBtn.addEventListener("click",CreateOrder)

const animationOverlay :any = document.getElementById("animationOverlay");
//make the store select display correct food items
const SelectStoreInput: HTMLSelectElement = (document.getElementById("storeOptions") as HTMLSelectElement);
SelectStoreInput.onchange = (e)=>{
    let value : string = (e.target as any).value
    switch(value){
        case "Store C-Store":
            animationOverlay.innerHTML = foodDisplays[0]
            break
    }
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