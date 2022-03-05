//responsible for setting up google adds on the html page
export function createAdd(Pid: string):HTMLElement {
    let googleAdd: HTMLElement = document.createElement("div");
    googleAdd.innerHTML = "Google Add";
    googleAdd.classList.add("add");
    googleAdd.id = Pid;
    return googleAdd;
}
