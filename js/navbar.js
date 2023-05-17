const navbar = document.querySelector("[data-navbar]");
const header = document.querySelector("[data-header]");
const navLink = document.querySelectorAll("[data-link]");
const openBtn = document.querySelector("[data-open-icon]");
const closeBtn = document.querySelector("[data-close-icon]");

window.addEventListener("load", (e) => {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 50) {
    header.style.backgroundColor = `hsl(250,45%,30%)`;
  } else {
    header.style.backgroundColor = "transparent";
  }
});

openBtn.addEventListener("click", (e) => {
  e.preventDefault()
  navbar.classList.add("active");
  e.target.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault()
  navbar.classList.remove("active");
  e.target.style.display = "none";
  openBtn.style.display = "block";
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  })
);
