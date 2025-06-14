import galleryNavMenu from "../pages/galleryNavController";
import { supabase } from "../supabaseClient";

const getNSetGalleryImgs = (selectedYear = new Date().getFullYear()) => {
  const loading = document.querySelector(".gallery__loading");
  const selectedYearElement = document.querySelector(".selected-year");
  const navMenu = document.querySelector(".gallery__nav-menu");

  const imgContainer = document.querySelector(".gallery__content-wrapper");
  imgContainer.replaceChildren();
  navMenu.replaceChildren();

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let avaliableYears = [];

  return new Promise((resolve, reject) => {
    loading.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    // HELPER
    const getImgs = async (path) => {
      return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.storage
          .from("sub-home")
          .list(`${path}/`);

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    };

    // START
    getImgs("gallery")
      .then((years) => {
        years.forEach((year, index) => {
          const newLi = document.createElement("li");
          newLi.classList.add("gallery__nav-item");
          newLi.innerHTML = `<a href="#${year.name}">${year.name}</a>`;

          navMenu.appendChild(newLi);
          avaliableYears.push(year.name);
        });
        selectedYearElement.textContent = selectedYear;
        console.log("1");
      })
      .finally(() => {
        getImgs(`gallery/${selectedYear}`).then((data) => {
          data.forEach((monthObj, index) => {
            getImgs(`gallery/${selectedYear}/${monthObj.name}`).then((imgs) => {
              console.log(months[monthObj.name]);
              console.log(imgs);
              const monthContainer = document.createElement("div");
              const monthTitle = document.createElement("h3");
              const monthImgsContainer = document.createElement("div");
              monthContainer.classList.add("gallery__content-monthly");
              monthTitle.classList.add("gallery__content-subtitle");
              monthImgsContainer.classList.add("gallery__content");
              monthTitle.textContent = `${months[monthObj.name]}`;
              imgs.forEach((img) => {
                const { data } = supabase.storage
                  .from("sub-home")
                  .getPublicUrl(
                    `gallery/${selectedYear}/${monthObj.name}/${img.name}`
                  );
                if (img.name == ".emptyFolderPlaceholder") {
                  return;
                }
                const monthlyImg = document.createElement("img");
                monthlyImg.classList.add("gallery__content-img");
                monthlyImg.src = data.publicUrl;
                monthImgsContainer.appendChild(monthlyImg);
              });
              monthContainer.appendChild(monthTitle);
              monthContainer.appendChild(monthImgsContainer);
              imgContainer.appendChild(monthContainer);

              if (index == data.length - 1) {
                galleryNavMenu();
                loading.style.display = "none";
                document.body.style.overflow = "auto";
                document.body.style.pointerEvents = "auto";
                resolve();
              }
            });
          });
        });
      });
  });
};

export default getNSetGalleryImgs;
