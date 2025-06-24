import { supabase } from "../supabaseClient";

const getNSetMsgData = async () => {
  const msgSection = document.querySelectorAll(".message__container");

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

    getData().then((imgs) => {
      let counter = 0;
      imgs.forEach((img, index) => {
        if (img.name == ".emptyFolderPlaceholder") {
          return;
        }

        const { data } = supabase.storage
          .from("home")
          .getPublicUrl("msg/" + img.name);

        const msgItem = document.createElement("div");
        msgItem.classList.add("message__img-wrapper");
        msgItem.innerHTML = `<img class="message__img lazy loading" src="https://placehold.co/1000x1000/jpg" data-src="${data.publicUrl}" alt="Image of school principal" />`;
        msgSection[counter].appendChild(msgItem);
        counter++;
        if (counter == 2) {
          resolve();
        }
      });
    });
  });
};

export default getNSetMsgData;
