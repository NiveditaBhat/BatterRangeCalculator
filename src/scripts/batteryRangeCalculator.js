import Counter from "./counter";
import Fan from "./fan";
import TemperatureCounter from "./temperatureCounter";
import Wheels from "./wheels";
import Distance from "./distance";
import dataModel100D from "../data/metric-100D.json";
import dataModelP100D from "../data/metric-P100D.json";
import debounce from "./debounce";

const MIN_SPEED = 70;
const MAX_SPEED = 140;
const MIN_TEMPERATURE = -10;
const MAX_TEMPERATURE = 40;
const DELAY = 500;

class BatteryRangeCalculator {
  #speed;

  #outsideTemperature;

  #fan;

  #wheels;

  #distanceModel100D;

  #distanceModelP100D;

  constructor() {
    this.#initialize();
    this.#setupEvents();
  }

  getDistanceModel100D() {
    return this.#distanceModel100D.getDistance();
  }

  getDistanceModelP100D() {
    return this.#distanceModelP100D.getDistance();
  }

  #initialize() {
    const speedElement = document.querySelector(`[data-counter='speed']`);
    this.#speed = new Counter(MIN_SPEED, MAX_SPEED, speedElement);

    const temperatureElement = document.querySelector(
      `[data-counter='temperature']`,
    );
    this.#outsideTemperature = new TemperatureCounter(
      MIN_TEMPERATURE,
      MAX_TEMPERATURE,
      temperatureElement,
    );

    const fanElement = document.querySelector(".fanButton");
    this.#fan = new Fan(fanElement);

    const wheels = document.querySelector(".wheelButtons");
    this.#wheels = new Wheels(wheels);

    const model100D = document.querySelector("[data-model='100D']");
    this.#distanceModel100D = new Distance(dataModel100D, model100D);

    const modelP100D = document.querySelector("[data-model='P100D']");
    this.#distanceModelP100D = new Distance(dataModelP100D, modelP100D);
  }

  #setupEvents() {
    const updateCarWheel = (type, previousWheelSize) => {
      const currentSelection = document.querySelector(
        `[data-type='${type}'][data-size='${this.#wheels.getSelectedWheel()}']`,
      );
      currentSelection?.classList.remove("hide");
      const previousSelection = document.querySelector(
        `[data-type='${type}'][data-size='${previousWheelSize}']`,
      );

      previousSelection?.classList.add("hide");
    };

    const updateWheelAnimation = (speed, distance, wheelSize) => {
      const time = distance / (speed * 10);

      const frontWheel = document.querySelector(
        `[data-type="front"][data-size="${wheelSize}"]`,
      );
      frontWheel.style.animationDuration = `${time}s`;

      const rearWheel = document.querySelector(
        `.carWheelImageRear[data-size="${wheelSize}"]`,
      );
      rearWheel.style.animationDuration = `${time}s`;
    };

    const updateDistanceForModels = () => {
      const ac = this.#fan.getSwitched() ? "on" : "off";
      const temp = this.#outsideTemperature.getCount();
      const kmh = this.#speed.getCount();
      const wheelSize = this.#wheels.getSelectedWheel();

      this.#distanceModel100D.computeDistance(kmh, temp, ac, wheelSize);
      this.#distanceModelP100D.computeDistance(kmh, temp, ac, wheelSize);

      const distance1 = this.#distanceModel100D.getDistance();
      const distance2 = this.#distanceModelP100D.getDistance();

      if (distance1 === "-" || distance2 === "-") {
        return;
      }

      const avgDistance = (distance1 + distance2) / 2;

      updateWheelAnimation(kmh, Math.round(avgDistance), wheelSize);
    };

    window.addEventListener("load", () => {
      updateDistanceForModels();
    });

    document.addEventListener("kiloMetersChangedEvent", () => {
      const debouncedDistance = debounce(updateDistanceForModels, DELAY);
      debouncedDistance();
    });

    document.addEventListener("wheelSelectionChangedEvent", (e) => {
      const { detail } = e;
      if (!detail?.previousWheelSize) {
        return;
      }

      const { previousWheelSize } = detail;

      updateCarWheel("front", previousWheelSize);

      updateCarWheel("rear", previousWheelSize);
    });
  }
}

export default BatteryRangeCalculator;
