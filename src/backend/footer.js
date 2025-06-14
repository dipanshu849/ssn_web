import { supabase } from "../supabaseClient";

const getNsetFooterData = () => {
  const fbLink = document.querySelector(".facebook-link");
  const instaLink = document.querySelector(".instagram-link");
  const youtubeLink = document.querySelector(".youtube-link");

  const phoneNoContainer = document.querySelector(
    ".footer__contact-section-pn-container"
  );
  phoneNoContainer.replaceChildren();

  const familyResourcesLink = document.querySelector(".family-resources-link");
  const schoolLocationLink = document.querySelector(".school-location-link");

  return new Promise((resolve, reject) => {
    ///
    async function getData() {
      return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase
          .from("meta-data-links")
          .select("*");

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    getData().then((data) => {
      data.forEach((links) => {
        fbLink.href = links.fb__link;
        instaLink.href = links.insta__link;
        youtubeLink.href = links.yt__link;

        familyResourcesLink.href = links.family__resources__link;
        schoolLocationLink.href = links.address__map__link;

        let phoneNoArr = links.phoneNos.split(",");
        phoneNoArr.forEach((phoneNo) => {
          let phoneNoElement = document.createElement("p");
          phoneNoElement.classList.add("footer__contact-section-pn");
          phoneNoElement.textContent = `+91 ${phoneNo}`;
          phoneNoContainer.appendChild(phoneNoElement);
        });

        resolve();
      });
    });
  });
};

export default getNsetFooterData;
