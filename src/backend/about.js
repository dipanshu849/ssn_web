import { supabase } from "../supabaseClient";

const getNSetAboutData = async () => {
  const aboutSection = document.querySelector(".about");

  return new Promise((resolve, reject) => {
    // ------------------------------------------------------------------------- FUNCTIONS
    async function getData() {
      return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.storage
          .from("home")
          .list("about/");

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    ///

    getData().then((imgs) => {
      imgs.forEach((img, index) => {
        if (img.name == ".emptyFolderPlaceholder") {
          return;
        }

        const { data } = supabase.storage
          .from("home")
          .getPublicUrl("about/" + img.name);

        const aboutItem = document.createElement("div");
        aboutItem.classList.add("about__img-wrapper");
        aboutItem.innerHTML = `<img class="about__img lazy loading" src="https://placehold.co/1000x1000/jpg" data-src="${data.publicUrl}" alt="Image of school" />`;
        aboutSection.appendChild(aboutItem);
      });
      resolve();
    });
  });
};

export default getNSetAboutData;
