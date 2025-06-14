const calender__type__navigator = () => {
  const event__btn = document.querySelector(".calender__type-event");
  const athletics__btn = document.querySelector(".calender__type-athletics");
  const circulars__btn = document.querySelector(".calender__type-circulars");

  const calendar = document.querySelector("#calender__time-navigator");

  const table__contents = document.querySelectorAll(".calender__type-content");

  const type__btn = document.querySelectorAll(".calender__type");

  let current__index = 0;

  const update__calender__table = () => {
    table__contents.forEach((item, index) => {
      item.style.display = index === current__index ? "block" : "none";
    });

    type__btn.forEach((item, index) => {
      item.style.backgroundColor =
        index === current__index ? "var(--color-slate-200)" : "white";
    });
  };

  const update__current__index = (type) => {
    if (type == "events") {
      current__index = 0;
      calendar.disabled = false;
    } else if (type == "athletics") {
      current__index = 1;
      calendar.disabled = false;
    } else {
      current__index = 2;
      calendar.disabled = true;
    }

    update__calender__table();
  };

  event__btn.addEventListener("click", () => {
    update__current__index("events");
  });
  athletics__btn.addEventListener("click", () => {
    update__current__index("athletics");
  });
  circulars__btn.addEventListener("click", () => {
    update__current__index("circulars");
  });
  update__calender__table();
};

export default calender__type__navigator;
