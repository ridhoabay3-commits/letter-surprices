// ================= OPEN LETTER =================

const envelope = document.getElementById("openEnvelope");
const openingPage = document.getElementById("openingPage");
const website = document.getElementById("website");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {

    // buka flap amplop
    document.querySelector(".envelope-top").style.transform =
        "rotateX(180deg)";

    // surat sedikit naik
    document.querySelector(".letter").style.transform =
        "translateY(-40px)";

    // musik
    music.volume = 0;
music.play();

let fade = setInterval(() => {

    if (music.volume < 0.9) {
        music.volume += 0.05;
    } else {
        clearInterval(fade);
    }

}, 200);

    // pindah halaman
    setTimeout(() => {

        openingPage.style.opacity = "0";

        setTimeout(() => {

           const transitionScreen =
document.getElementById("transitionScreen");

setTimeout(() => {

    transitionScreen.classList.add("show");

},1200);


setTimeout(() => {

    openingPage.style.display = "none";

},2500);


setTimeout(() => {

    transitionScreen.classList.remove("show");

    website.classList.remove("hidden");

},4500);

        }, 800);

    }, 1800);

});


// ================= PETALS =================

const petalsContainer =
    document.querySelector(".petals-container");

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.top = "-20px";

    petal.style.opacity = Math.random();

    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;

    petal.style.animation =
        `fall ${5 + Math.random()*5}s linear forwards`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);
}

setInterval(createPetal, 350);


// ================= PETAL ANIMATION =================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall {

0%{
transform:translateY(-20px) rotate(0deg);
}

100%{
transform:translateY(110vh) rotate(360deg);
}

}

`;

document.head.appendChild(style);


// ================= SLIDESHOW =================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);


// ================= REVEAL ANIMATION =================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.classList.add("active");
        }

    });

}

revealSections();


// ================= COUNTDOWN =================

// GANTI TANGGAL INI NANTI
const firstMeet = new Date("2026-04-18");

function updateCountdown(){

    const now = new Date();

    const difference = now - firstMeet;

    const days =
        Math.floor(difference / (1000*60*60*24));

    const hours =
        now.getHours();

    const minutes =
        now.getMinutes();

    const seconds =
        now.getSeconds();

    document.getElementById("days").innerHTML =
        days;

    document.getElementById("hours").innerHTML =
        hours;

    document.getElementById("minutes").innerHTML =
        minutes;

    document.getElementById("seconds").innerHTML =
        seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();


// ================= PARALLAX HERO =================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelector(".hero").style.transform =
        `translateY(${scrollY * 0.05}px)`;

});
