const resVar = document.getElementById("res");

const change = () => {
    if(resVar.id === "res") resVar.id += "ponsive";
    else resVar.id = "res";
}

const resize = () => {
    if(window.innerWidth > 768) resVar.id = "res";
}
