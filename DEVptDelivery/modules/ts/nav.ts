export function setActive(linkToActivate:string){
    //set title of page
    document.title = `CampusDelivery-${linkToActivate}`
    //set the correct css target
    let a:HTMLElement = document.getElementById(linkToActivate);
    a.classList.add("active");
}