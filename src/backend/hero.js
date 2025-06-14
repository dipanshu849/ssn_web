import { supabase } from "../supabaseClient";

const getNSetHeroData = async () => {
  let imgCounter = 0;
  const heroImgContainer = document.querySelector(".hero__img-container");
  const heroImgNavigator = document.querySelector(".hero__img-navigator");

  return new Promise((resolve, reject) => {
    // ------------------------------------------------------------------------- FUNCTIONS
    async function getData() {
      return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.storage
          .from("home")
          .list("hero/");

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    getData().then((imgs) => {
      imgs.forEach((img, index) => {
        if (img.name == ".emptyFolderPlaceholder") {
          return;
        }

        const { data } = supabase.storage
          .from("home")
          .getPublicUrl("hero/" + img.name);

        imgCounter++;
        /// - BUTTONS
        const heroNavigatorItem = document.createElement("button");
        heroNavigatorItem.classList.add(
          "hero__img-navigator-btn",
          "radial-btn"
        );
        heroNavigatorItem.innerHTML = `${imgCounter}`;
        heroImgNavigator.appendChild(heroNavigatorItem);

        /// - IMGS
        const heroImg = document.createElement("img");
        heroImg.classList.add("hero__img");
        heroImg.src = data.publicUrl;
        heroImg.alt = "School students studying and enjoying themselves";
        heroImgContainer.appendChild(heroImg);

        console.log("In Hero");
      });
    });
    resolve();
  });
};

export default getNSetHeroData;
