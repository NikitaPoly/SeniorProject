export function setActive(linkToActivate:string){
    let a:HTMLElement = document.getElementById(linkToActivate);
    a.classList.add("active");
}