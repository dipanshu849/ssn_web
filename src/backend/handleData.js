import lazy__loading from "../components/lazy-loading";
import getNSetAboutData from "./about";
import getNSetMsgData from "./msg";
import getNSetHeroData from "./hero";
import hero__img__slider from "../components/hero_slider";
import getNsetCalendarData from "./table/eventNathleticsCalendar.js";
import calenderTimeNavigator from "../components/calender__time__navigator";
import getNsetCircularsData from "./table/circularsCalendar.js";
import getNsetDataForFeaturedSlider from "./featuredSlider";
import featured__carousel from "../components/featured_slider.js";
import getNsetHeaderLinks from "./header.js";
import getNsetFooterData from "./footer.js";
import { supabase } from "../supabaseClient";

async function fetchViewCounterFromSupabase() {
  return new Promise(async (resolve, reject) => {
    const { data, error } = await supabase.from("meta-data").select("views");

    if (error) {
      reject(error);
    }
    resolve(data);
  });
}

async function updateViewCounterInSupabase() {
  fetchViewCounterFromSupabase().then(async (obj) => {
    const { error } = await supabase
      .from("meta-data")
      .update({ views: obj[0].views + 1 })
      .eq("id", 1);

    if (error) {
      console.log(error);
    }
  });
}

const handleData = () => {
  Promise.all([
    getNSetAboutData(),
    getNSetMsgData(),
    getNSetHeroData(),
    getNsetCalendarData("events"),
    getNsetCalendarData("athletics"),
    calenderTimeNavigator(),
    getNsetCircularsData(),
    getNsetDataForFeaturedSlider(),
    getNsetHeaderLinks(),
    getNsetFooterData(),
  ]).then(() => {
    featured__carousel();
    hero__img__slider();
    lazy__loading();
    updateViewCounterInSupabase();
  });
};

export default handleData;
