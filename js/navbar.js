const navbar = document.querySelector("[data-navbar]");
const header = document.querySelector('[data-header]')
const openBtn = document.querySelector("[data-open-icon]");
const closeBtn = document.querySelector("[data-close-icon]");

window.addEventListener("load", (e) => {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});

window.addEventListener('scroll',(e)=>{
  if(window.scrollY >= 50){
    header.style.backgroundColor = `hsl(240, 57%, 54%)`
  } else{
    header.style.backgroundColor = 'transparent'
  }
})

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
