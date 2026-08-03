document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.style.display === "flex";
    navLinks.style.display = open ? "none" : "flex";
    navLinks.style.cssText += open
      ? ""
      : "position:absolute;top:64px;left:0;right:0;background:#0e0e0f;flex-direction:column;padding:20px 32px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.08);";
  });
}

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

let lastScroll = 0;
const header = document.querySelector("header.nav");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.style.background = y > 40 ? "rgba(14,14,15,0.92)" : "rgba(14,14,15,0.72)";
  lastScroll = y;
});
