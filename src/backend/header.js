import { supabase } from "../supabaseClient";

const getNsetHeaderLinks = () => {
  const feeStructureLink = document.querySelectorAll(".fee-structure a");
  const admissionCriteriaLink = document.querySelectorAll(
    ".admission-criteria a"
  );
  const admissionProcessLink = document.querySelectorAll(
    ".admission-process a"
  );

  const curriculumLink = document.querySelectorAll(".curriculum a");
  const examScheduleLink = document.querySelectorAll(".exam-schedule a");
  const schoolDressLink = document.querySelectorAll(".school-dress a");
  const schoolFacilitiesLink = document.querySelectorAll(
    ".school-facilities a"
  );
  const featuredLink = document.querySelector(".featured__link");

  const listOfSportsLink = document.querySelectorAll(".list-of-sports a");
  const sportsFacilitiesLink = document.querySelectorAll(
    ".sports-facilities a"
  );

  return new Promise((resolve, reject) => {
    ///
    async function getData() {
      return new Promise(async (resolve, reject) => {
        let { data, error } = await supabase.storage.from("pdfs").list();

        if (error) {
          reject(error);
        }
        resolve(data);
      });
    }

    getData().then((data) => {
      data.forEach((file) => {
        let { data } = supabase.storage.from("pdfs").getPublicUrl(file.name);
        if (file.name.includes("feeStructure")) {
          feeStructureLink[0].href = data.publicUrl;
          feeStructureLink[1].href = data.publicUrl;
        } else if (file.name.includes("admissionCriteria")) {
          admissionCriteriaLink[0].href = data.publicUrl;
          admissionCriteriaLink[1].href = data.publicUrl;
        } else if (file.name.includes("admissionProcess")) {
          admissionProcessLink[0].href = data.publicUrl;
          admissionProcessLink[1].href = data.publicUrl;
        } else if (file.name.includes("curriculum")) {
          curriculumLink[0].href = data.publicUrl;
          curriculumLink[1].href = data.publicUrl;
        } else if (file.name.includes("examSchedule")) {
          examScheduleLink[0].href = data.publicUrl;
          examScheduleLink[1].href = data.publicUrl;
        } else if (file.name.includes("schoolDress")) {
          schoolDressLink[0].href = data.publicUrl;
          schoolDressLink[1].href = data.publicUrl;
        } else if (file.name.includes("schoolFacilities")) {
          schoolFacilitiesLink[0].href = data.publicUrl;
          schoolFacilitiesLink[1].href = data.publicUrl;
          if (featuredLink) {
            featuredLink.href = data.publicUrl;
          }
        } else if (file.name.includes("listOfSports")) {
          listOfSportsLink[0].href = data.publicUrl;
          listOfSportsLink[1].href = data.publicUrl;
        } else if (file.name.includes("sportsFacilities")) {
          sportsFacilitiesLink[0].href = data.publicUrl;
          sportsFacilitiesLink[1].href = data.publicUrl;
        }
      });
      resolve();
    });
  });
};

export default getNsetHeaderLinks;
