const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const words = ["code", "data", "ideas", "technology"];
const rotatingText = document.getElementById("rotatingText");
let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  rotatingText.textContent = words[wordIndex];
}, 2200);

document.getElementById("year").textContent = new Date().getFullYear();

