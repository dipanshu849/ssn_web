import { supabase } from "../supabaseClient";

const getNSetMsgData = async () => {
  const msgSection = document.querySelector(".message__container");

  return new Promise((resolve, reject) => {
    // ------------------------------------------------------------------------- FUNCTIONS
    async function getData() {
      return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.storage
          .from("home")
          .list("msg/");

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    // async function getImgText() {
    //   return new Promise(async (resolve, reject) => {
    //     let { data, error } = await supabase.from("meta-data-img").select("*");

    //     if (error) {
    //       reject(error);
    //     }
    //     resolve(data);
    //   });
    // }
    ///

    getData().then((imgs) => {
      // imgs.forEach((img, index) => {
      const img = imgs[0];
      if (img.name == ".emptyFolderPlaceholder") {
        img = imgs[1];
      }

      const { data } = supabase.storage
        .from("home")
        .getPublicUrl("msg/" + img.name);

      const msgItem = document.createElement("div");
      msgItem.classList.add("message__img-wrapper");
      msgItem.innerHTML = `<img class="message__img lazy loading" src="https://placehold.co/1000x1000/jpg" data-src="${data.publicUrl}" alt="Image of school principal" />`;
      msgSection.appendChild(msgItem);

      // getImgText().then((data) => {
      //   data.forEach((row) => {
      //     if (row.path == `msg/${img.name}`) {
      //       const text = row.description.split("\n");
      //       const msgWrapper = document.createElement("div");
      //       msgWrapper.classList.add("message__content-wrapper");
      //       msgWrapper.innerHTML = `
      //         <p class="message__content">
      //       <span> " </span>${text[0]} <br /> ${text[1]} <span> "</span>
      //     </p>
      //       `;
      //       msgSection.appendChild(msgWrapper);
      //       return;
      //     }
      //   });
      // });

      resolve();
    });
  });
};

export default getNSetMsgData;
