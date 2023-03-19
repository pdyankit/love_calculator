const button = document.querySelector(".btn")

function play() {
var ran = Math.floor((Math.random()*100))+1;
var h4 = "Your Love Score is " + ran + "%";
document.querySelector("h4").textContent = h4;
var h5 = document.querySelector("h5")
if(ran > 80) {
    h5.innerHTML = "Your Crush Loves you 😍"
}
else {
    h5.innerHTML = "Hard Luck 🤧"
}
}
button.addEventListener("click",play);
