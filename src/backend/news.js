import { supabase } from "../supabaseClient";

const getNSetNewsImgs = () => {
  const allTypes = [
    "achievements",
    "upcomingevents",
    "competitions",
    "specialvisit",
    "outdooractivities",
    "vacancies",
  ];

  const displayedType = [];

  ///
  async function getImgData() {
    return new Promise(async (resolve, reject) => {
      let { data, error } = await supabase.from("meta-data-img").select("*");

      if (error) {
        reject(error);
      }
      resolve(data);
    });
  }
  ///

  getImgData()
    .then((rows) => {
      rows.forEach(async (row) => {
        const { data } = supabase.storage
          .from("sub-home")
          .getPublicUrl(row.path);

        const type = row.path.split("/")[1].toLowerCase();
        displayedType.push(type);
        const cardContainer = document.querySelector(`
            .news__subcontent-wrapper-${type} .news__subcontent`);

        const newsCard = document.createElement("div");
        newsCard.classList.add("news__subcontent-card");

        const newsCardImgWrapper = document.createElement("div");
        newsCardImgWrapper.classList.add("news__subcontent-card-img-wrapper");
        newsCardImgWrapper.innerHTML = `
            <img src="${data.publicUrl}" alt="" class="news__subcontent-card-img">
        `;

        const newsCardContentWrapper = document.createElement("div");
        newsCardContentWrapper.classList.add(
          "news__subcontent-card-description"
        );
        newsCardContentWrapper.innerHTML = `
            <div class="news__subcontent-card-description-preview">
              <div
                class="news__subcontent-card-description-title-wrapper"
              >
                <h4 class="news__subcontent-card-description-subtitle">
                  ${row.date}
                </h4>
                <p class="news__subcontent-card-description-title">
                  ${row.title}
                </p>
              </div>
            </div>
            <p class="news__subcontent-card-description-content">
             ${row.description}
            </p>
        `;

        newsCard.append(newsCardImgWrapper);
        newsCard.append(newsCardContentWrapper);
        cardContainer.append(newsCard);
      });
    })
    .finally(() => {
      allTypes.forEach((type) => {
        if (!displayedType.includes(type)) {
          const displayNoteElement = document.createElement("div");
          displayNoteElement.classList.add("news__no-item");
          displayNoteElement.textContent = "No items to display";
          document
            .querySelector(
              `.news__subcontent-wrapper-${type} .news__subcontent`
            )
            .append(displayNoteElement);
        }
      });
    });
};

export default getNSetNewsImgs;
