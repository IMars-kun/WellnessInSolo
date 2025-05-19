// Image Slider
new Swiper(".herowrap", {
    loop: true,

    autoplay: {
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

// Navbar hamburger menu
const navBar = document.querySelector(".navbar");
document.querySelector("#hamburger").onclick = () => {
    navBar.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
        navBar.classList.remove("active");
    }
});

// Modal Forum Diskusi
const displayMenu = document.querySelector(".menudisplay");
document.querySelector("#forum").onclick = () => {
    displayMenu.classList.toggle("active");
};

const displayCard = document.querySelector(".displaycard");
const forum = document.querySelector("#forum");
document.addEventListener("click", function (e) {
    if (!displayCard.contains(e.target) && !forum.contains(e.target)) {
        displayMenu.classList.remove("active");
    }
});

// Notif Belum Selesai
function belumJadi(){
    alert("Website masih dalam perbaikan");
};

// pop up masuk
const popup = document.querySelector(".popup")
const popupCard = document.querySelector(".popupcard");
document.addEventListener("click", function (e) {
    if (!popupCard.contains(e.target)){
        popup.classList.remove("active");
    }
});

(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="jvW5wGJMzohsgCm1UMhfw";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
