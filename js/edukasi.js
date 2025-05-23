// Back Button
const back = document.getElementById("back");
back.onclick = () => {
    window.location.href = "index.html";
};

// Modal Forum Diskusi
const displayMenu = document.querySelector(".menudisplay");
document.querySelector("#hamburger").onclick = () => {
    displayMenu.classList.toggle("active");
};

const displayCard = document.querySelector(".displaycard");
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
    if (!displayCard.contains(e.target) && !hamburger.contains(e.target)) {
        displayMenu.classList.remove("active");
    }
});

// Content
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const button1 = document.getElementById("button1");
button1.onclick = () => {
    content1.classList.add("active");
    content2.classList.remove("active");
    content3.classList.remove("active");
};
const button2 = document.getElementById("button2");
button2.onclick = () => {
    content1.classList.remove("active");
    content2.classList.add("active");
    content3.classList.remove("active");
};
const button3 = document.getElementById("button3");
button3.onclick = () => {
    content1.classList.remove("active");
    content2.classList.remove("active");
    content3.classList.add("active");
};

(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="jvW5wGJMzohsgCm1UMhfw";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
