import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/intro.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/featured.css";
import "../styles/components/calender.css";
import "../styles/components/message.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import featured__carousel from "./components/featured_slider.js";
import calender__type__navigator from "./components/calender_type_navigator.js";
import hero__img__slider from "./components/hero_slider.js";
import header__dropdown from "./components/header__dropdown.js";
import mobile__nav from "./components/mobile-nav.js";
import lazy__loading from "./components/lazy-loading.js";

featured__carousel();
calender__type__navigator();
hero__img__slider();
header__dropdown();
mobile__nav();
lazy__loading();
