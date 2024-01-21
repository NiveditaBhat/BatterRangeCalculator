import "./css/style.css";
import "./scripts/imageImporter";
import BatteryRangeCalculator from "./scripts/batteryRangeCalculator";

const toggleMenu = () => {
  const navButton = document.querySelector(".navButton");
  navButton.addEventListener("click", () => {
    const navMenu = document.querySelector(".navContainerMobile");
    if (navMenu.classList.contains("hide")) {
      navMenu.classList.remove("hide");
    } else {
      navMenu.classList.add("hide");
    }
  });
};

toggleMenu();

const batterRangeCalculator = new BatteryRangeCalculator();
