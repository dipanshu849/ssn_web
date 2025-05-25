function featured__carousel() {
  const slider__items = document.querySelectorAll(".featured__glance-item");

  const forwardButton = document.querySelector(".featured__glance-forward-btn");
  const backwardButton = document.querySelector(
    ".featured__glance-backward-btn"
  );
  let currentIndex = 0;

  const update__slider = () => {
    slider__items.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slider__items.length;
    update__slider();
  };

  const previousSlide = () => {
    currentIndex =
      (currentIndex - 1 + slider__items.length) % slider__items.length;
    update__slider();
  };
  forwardButton.addEventListener("click", nextSlide);
  backwardButton.addEventListener("click", previousSlide);
  update__slider();
}

export default featured__carousel;
