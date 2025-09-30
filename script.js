// Smooth Parallax
const parallax = document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    parallax.style.transform = `translateY(${offset * 0.5}px)`; // 0.5 = kecepatan background
});
