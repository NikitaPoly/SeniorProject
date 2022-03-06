//this function sets the correct css for active page
function setActive(linkToActivate: string) {
    //set title of page
    document.title = `CampusDelivery-${linkToActivate}`
    //set the correct css target
    let a: HTMLCollectionOf<Element> = document.getElementsByClassName(linkToActivate);
    for (let i = 0; i < a.length; i++) {
        (a[i] as any).classList.add("active");
    }
}
//attaches an event listener to toggle the nav
function toggleMobilenav() {
    document.getElementById("mobileNav").style.display = (document.getElementById("mobileNav").style.display === "none") ? "flex" : "none";
}
//this function acttaches the mobile nav to mobile screens
function attachMobNav() {
    let mobileNav: any = `
        <div id="mobileNav" style="display:none">
        <a class="order" href="http://localhost:8082/order.html" id="order">Order</a>
        <a class ="login" href="http://localhost:8081/login.html" id="login">LogIn</a>
        <a class = "earn" href="http://localhost:8080/earn.html" id="earn">Earn</a>
        </div>
        `;
    const parser: DOMParser = new DOMParser();
    mobileNav = parser.parseFromString(mobileNav, "text/html").body;
    document.getElementById("hamberger").addEventListener("click", toggleMobilenav);
    document.querySelector("#main").appendChild(mobileNav.querySelector("#mobileNav"));
}
//get all functions into one export
const _ = {
    setActive,
    attachMobNav
}
export default _;