window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const hero = document.getElementById("home");

  if (!header || !hero) {
    console.error("Header or Hero section not found!");
    return;
  }

  const heroHeight = hero.clientHeight;

  window.addEventListener("scroll", () => {
    const y = window.scrollY || window.pageYOffset;

    if (y > heroHeight / 2) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});