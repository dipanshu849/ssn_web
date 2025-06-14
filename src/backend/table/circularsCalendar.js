import { supabase } from "../../supabaseClient";

const getNsetCircularsData = async () => {
  const circularsSection = document.querySelector(
    ".calender__type-circulars-content"
  );
  const circularsContainer = document.createElement("div");
  circularsContainer.classList.add("calender__type-content-item");
  circularsSection.appendChild(circularsContainer);

  const circularsHeading = document.createElement("div");
  circularsHeading.classList.add("calender__type-content-item-heading");
  circularsHeading.innerHTML = `<p></p> <p> </p>`;
  circularsContainer.appendChild(circularsHeading);

  const circularsList = document.createElement("ul");
  circularsList.classList.add("calender__type-content-item-list", "ciculars");
  circularsContainer.appendChild(circularsList);

  return new Promise((resolve, reject) => {
    /// -----------------------
    async function getDataFromTable() {
      return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase
          .from("circulars-table")
          .select("*")
          .order("date", { ascending: false });

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    getDataFromTable().then((data) => {
      data.forEach((row) => {
        const circularsListItem = document.createElement("li");

        const { data } = supabase.storage
          .from("circulars-pdfs")
          .getPublicUrl(`${row.file__name}`);

        circularsListItem.innerHTML = `
                <div class="calender__type-content-date circulars">${row.date}</div>
                <div class="calender__type-content-name circulars">
                ${row.title}
                </div>
                <div class="calender__type-content-link circulars">
                  <a href="${data.publicUrl}" target="_blank">View</a>
                </div>
            `;
        circularsList.appendChild(circularsListItem);
      });
      resolve();
    });
  });
};

export default getNsetCircularsData;
