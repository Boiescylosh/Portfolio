function dummyEffect() { console.log("Deploy OK"); }
dummyEffect();}

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
