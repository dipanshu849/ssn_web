const header__dropdown = () => {
  const dropdown = document.querySelectorAll(".header__menu-dropdown");
  const dropdown__btns = document.querySelectorAll(
    ".header__menu-dropdown-btn"
  );
  const header = document.querySelector(".header");

  let current__index = 0;
  let prev__index = 0;
  let left__header__menu = false;

  const update__dropdown = () => {
    dropdown.forEach((menu, index) => {
      menu.style.display = index === current__index ? "block" : "none";
    });

    dropdown__btns.forEach((btn, index) => {
      btn.style.color =
        index === current__index
          ? "var(--color-red-800)"
          : "var(--color-slate-100)";
    });
  };

  const update__dropdown__prev = () => {
    dropdown.forEach((menu, index) => {
      menu.style.display = index === prev__index ? "none" : "none";
    });

    dropdown__btns.forEach((btn, index) => {
      btn.style.color =
        index === prev__index
          ? "var(--color-slate-100)"
          : "var(--color-slate-100)";
    });
  };

  header.addEventListener("mouseleave", () => {
    prev__index = current__index;
    update__dropdown__prev();
  });

  dropdown__btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      current__index = index;
      update__dropdown();
    });
    btn.addEventListener("mouseover", () => {
      current__index = index;
      update__dropdown();
    });

    btn.addEventListener("mouseleave", () => {
      left__header__menu = true;
      dropdown[index].addEventListener("mouseenter", () => {
        current__index = index;
        update__dropdown();
      });
      dropdown[index].addEventListener("mouseleave", () => {
        prev__index = current__index;
        update__dropdown__prev();
      });
    });
  });
};

export default header__dropdown;
