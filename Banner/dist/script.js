const banner = document.querySelector(".banner");
const bannerElements = document.querySelectorAll(".banner__element");

let bannerCounter = 0;
let isInTransition = false;

const rootStyles = document.documentElement.style; //getting css variables. With these we'll handle the transform and transition property

const getTransformValue = () =>
  //getting transform property value
  Number(rootStyles.getPropertyValue("--banner-transform").replace("%", ""));

const reorderBanner = () => {
  const transformValue = getTransformValue();
  rootStyles.setProperty("--transition", "none");
  if (bannerCounter === bannerElements.length - 1) {
    //The first element is put after the last element -- Direction RIGHT (Disable for now)
    banner.appendChild(banner.firstElementChild);
    rootStyles.setProperty("--banner-transform", `${transformValue + 100}%`);
    bannerCounter--;
  } else if (bannerCounter === 0) {
    //The last element is put before the firts element -- Direction LEFT (Disable for now)
    banner.prepend(banner.lastElementChild);
    rootStyles.setProperty("--banner-transform", `${transformValue - 100}px`);
    BannerCounter++;
  }

  isInTransition = false;
};

const moveBanner = () => {
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty("--transition", "transform 1s");
  isInTransition = true;

  rootStyles.setProperty("--banner-transform", `${transformValue - 100}%`); //Changing transform value
  bannerCounter++;
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    moveBanner();
  }, 3000);

  banner.addEventListener("transitionend", reorderBanner); //The reorderBanner function only is fired when the transition between slides finish
});
