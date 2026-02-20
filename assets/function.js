const textElement = document.querySelector(".auto-type");
const phrases = ["Web Developer", "Graphic Designer", "Creative Thinker"];
let phraseIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < phrases[phraseIndex].length) {
        textElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    }
}

if (document.querySelector(".auto-type")) typeEffect();

function changeThemeColor() {
    const randomHue = Math.floor(Math.random() * 360);
    document.documentElement.style.setProperty('--cyan', `hsl(${randomHue}, 100%, 50%)`);
}

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') changeThemeColor();
});

document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "Woi, Balik Sini!" : "Portfolio - Razaqhi";
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

if (circles.length > 0) animateCircles();

const backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.style.cssText = "position:fixed; bottom:20px; right:20px; display:none; z-index:1000; padding:10px 15px; background:var(--cyan); border:none; border-radius:5px; cursor:pointer; color:black; font-weight:bold;";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
