import getNSetGalleryImgs from "../backend/gallery";

const galleryNavMenu = () => {
  console.log("galleryNavMenu");
  const controller = new AbortController();
  const navItems = document.querySelectorAll(".gallery__nav-item");
  const navContainer = document.querySelector(".gallery__nav");
  const selectedYearElement = document.querySelector(".selected-year");

  navContainer.addEventListener(
    "click",
    () => {
      console.log("CLICK IN NAV CONTAINER");
      navContainer.classList.toggle("active");
    },
    { signal: controller.signal }
  );

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("CLICKED ON NAV ITEM");
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      getNSetGalleryImgs(item.textContent);
      item.classList.add("active");
      navContainer.classList.remove("active");
      selectedYearElement.textContent = item.textContent;
      controller.abort();
    });
  });
};

export default galleryNavMenu;
