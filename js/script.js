const aboutListElements = document.querySelectorAll("[data-content-item]");

aboutListElements.forEach((el) => el.addEventListener("click", onClick));

function onClick(e) {
  e.preventDefault();
  const moreContentElement = e.currentTarget.querySelector(
    "[data-content-item-more]"
  );

  const clicked = moreContentElement.classList.contains("active");

  if (clicked) {
    moreContentElement.classList.remove("active");
  } else {
    moreContentElement.classList.add("active");
  }
}
