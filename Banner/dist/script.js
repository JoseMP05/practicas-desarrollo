const banner = document.querySelector(".banner");
const bannerElements = document.querySelectorAll(".banner__element");

let bannerCounter = 0;
let isInTransition = false;

const rootStyles = document.documentElement.style;

const getTransformValue = () =>
  Number(rootStyles.getPropertyValue("--banner-transform").replace("%", ""));

const reorderBanner = () => {
  const transformValue = getTransformValue();
  rootStyles.setProperty("--transition", "none");
  if (bannerCounter === bannerElements.length - 1) {
    banner.appendChild(banner.firstElementChild);
    rootStyles.setProperty("--banner-transform", `${transformValue + 100}%`);
    bannerCounter--;
  } else if (bannerCounter === 0) {
    banner.prepend(banner.lastElementChild);
    rootStyles.setProperty("--banner-transform", `${transformValue - 100}px`);
    BannerCounter++;
  }

  isInTransition = false;
};

const moveToRight = () => {};

const moveBanner = () => {
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty("--transition", "transform 1s");
  isInTransition = true;

  rootStyles.setProperty("--banner-transform", `${transformValue - 100}%`);
  bannerCounter++;
  console.log(banner.scrollLeft);
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    moveBanner();
  }, 3000);

  banner.addEventListener("transitionend", reorderBanner);
});
