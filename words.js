const button = document.getElementById("clear");
const textArea = document.querySelector("textarea");
const contor = document.querySelector("p");

button.addEventListener("click", ()=>{
    location.reload();
});

window.onclick=()=>{
    contor.classList.remove("shadow");
}

textArea.addEventListener("keyup",()=>{
    let newTexteArea = textArea.value.split("");
    let neew = newTexteArea.join("").trim();
        contor.innerHTML = neew.length;
        contor.classList.add("shadow");
}, 1);
