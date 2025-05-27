const mobile__nav = () => {
  const mobileNavOpenBtn = document.querySelector(".header__bars");
  const mobileNavCloseBtn = document.querySelector(".mobile-nav__close");

  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  mobileNavLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });

  mobileNavOpenBtn.addEventListener("click", () => {
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
  });
  mobileNavCloseBtn.addEventListener("click", () => {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });
};

export default mobile__nav;
