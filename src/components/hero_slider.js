const hero__img__slider = () => {
  const navigator__btns = document.querySelectorAll(".hero__img-navigator-btn");
  const hero__imgs = document.querySelectorAll(".hero__img");

  let current__index = 0;
  let prev__index = 0;

  let intervalID = null;

  const update__slider__prev = () => {
    hero__imgs.forEach((img, index) => {
      if (index == prev__index && current__index != prev__index) {
        img.classList.add("inactive");
        prev__index = current__index;
        setTimeout(update__slider, 1500);
      } else {
        img.classList.remove("inactive");
      }
    });
  };

  const update__slider = () => {
    hero__imgs.forEach((img, index) => {
      // img.classList.toggle("active", index === current__index);
      if (index == current__index) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });

    navigator__btns.forEach((btn, index) => {
      // btn.classList.toggle("active", index === current__index);
      // btn.classList.add("active", index == current__index);
      // btn.classList.remove("active", index != current__index);
      if (index == current__index) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  const next__slide = () => {
    current__index = (current__index + 1) % hero__imgs.length;
    update__slider__prev();
  };

  const auto__slide = () => {
    intervalID = setInterval(() => {
      next__slide();
    }, 7000);
  };

  navigator__btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      clearInterval(intervalID);

      current__index = index;
      update__slider__prev();
      auto__slide();
    });
  });
  update__slider();
  auto__slide();
};

export default hero__img__slider;
