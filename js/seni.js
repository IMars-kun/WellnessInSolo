// Back Button
const back = document.getElementById("back");
back.onclick = () => {
    window.location.href = "index.html";
};

let audio = document.getElementById("myAudio");
const body = document.querySelector("body");
let played = false;
document.addEventListener("click", function(e) {
    if (body.contains(e.target) && !played) {
        audio.play();
        played = true;
    }
});