const aboutListElements = document.querySelectorAll("[data-content-item]");

aboutListElements.forEach((el) => el.addEventListener("click", onClick));

let clicked = false;

function onClick(e) {
  e.preventDefault();
  const more = e.currentTarget.querySelector("[data-content-item-more]");

  if (!clicked) {
    clicked = true;
    more.classList.add("active");
  } else {
    clicked = false;
    more.classList.remove("active");
  }
}
