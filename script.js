// Tombol Sapa
const tombol = document.getElementById("tombol-sapa");
tombol.addEventListener("click", () => {
    alert("Halo Sobarruddin! Selamat datang di website saya 😊");
});

// Portofolio Card Click
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        alert(`Ini adalah Project ${index + 1}!`);
    });
});

// Scroll Reveal Effect
const scrollElements = document.querySelectorAll(".scroll-reveal");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add("show");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
