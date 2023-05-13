const navbar = document.querySelector("[data-navbar]");
const openBtn = document.querySelector("[data-open-btn]");
const closeBtn = document.querySelector("[data-close-btn]");

window.addEventListener("load", (e) => {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});

openBtn.addEventListener("click", (e) => {
  navbar.classList.add("active");
  e.target.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  navbar.classList.remove("active");
  e.target.style.display = "none";
  openBtn.style.display = "block";
});
