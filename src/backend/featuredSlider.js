import { supabase } from "../supabaseClient";

const getNsetDataForFeaturedSlider = () => {
  const featuredSliderContainer = document.querySelector(
    ".featured__glance-stack"
  );
  featuredSliderContainer.replaceChildren();

  return new Promise((resolve, reject) => {
    ///
    async function getData() {
      return new Promise(async (resolve, reject) => {
        let { data, error } = await supabase.from("meta-data").select("*");

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    getData().then((data) => {
      data.forEach((row) => {
        const featuredGlanceItem1 = document.createElement("div");
        featuredGlanceItem1.classList.add("featured__glance-item");

        featuredGlanceItem1.innerHTML = `
                    <p class="featured__glance-number">${row.student__number}+</p>
                    <h3 class="featured__glance-title">students</h3>
                `;

        const featuredGlanceItem2 = document.createElement("div");
        featuredGlanceItem2.classList.add("featured__glance-item");

        featuredGlanceItem2.innerHTML = `
                    <p class="featured__glance-number">${row.faculty__number}+</p>
                    <h3 class="featured__glance-title">faculty members</h3>
                `;

        const featuredGlanceItem3 = document.createElement("div");
        featuredGlanceItem3.classList.add("featured__glance-item");

        featuredGlanceItem3.innerHTML = `
                    <p class="featured__glance-number">${row.avg__class__size}</p>
                    <h3 class="featured__glance-title">average class size</h3>
                `;

        const featuredGlanceItem4 = document.createElement("div");
        featuredGlanceItem4.classList.add("featured__glance-item");

        featuredGlanceItem4.innerHTML = `
                    <p class="featured__glance-number">${row.acre__campus}</p>
                    <h3 class="featured__glance-title">acre campus</h3>
                `;

        const featuredGlanceItem5 = document.createElement("div");
        featuredGlanceItem5.classList.add("featured__glance-item");

        featuredGlanceItem5.innerHTML = `
                    <p class="featured__glance-number">${row.classroom__number}</p>
                    <h3 class="featured__glance-title">classes</h3>
                `;

        featuredSliderContainer.append(
          featuredGlanceItem1,
          featuredGlanceItem2,
          featuredGlanceItem3,
          featuredGlanceItem4,
          featuredGlanceItem5
        );
        resolve();
      });
    });
  });
};

export default getNsetDataForFeaturedSlider;
