import "../../styles/modern-normalize.css";
import "../../styles/style.css";
import "../../styles/components/intro.css";
import "../../styles/components/header.css";
import "../../styles/components/hero.css";
import "../../styles/components/footer.css";
import "../../styles/components/mobile-nav.css";
import "../../styles/components/gallery.css";
import "../../styles/utils.css";

import hero__img__slider from "../components/hero_slider.js";
import header__dropdown from "../components/header__dropdown.js";
import mobile__nav from "../components/mobile-nav.js";
import getNSetGalleryImgs from "../backend/gallery.js";
import getNsetHeaderLinks from "../backend/header.js";
import getNsetFooterData from "../backend/footer.js";
import getNSetHeroData from "../backend/hero.js";

const handleData = () => {
  Promise.all([
    getNSetGalleryImgs(),
    getNsetHeaderLinks(),
    getNsetFooterData(),
    getNSetHeroData(),
  ]).then(() => {
    hero__img__slider();
  });
};

header__dropdown();
mobile__nav();

handleData();
