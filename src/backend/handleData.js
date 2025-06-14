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

const handleData = async () => {
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
  });
};

export default handleData;
