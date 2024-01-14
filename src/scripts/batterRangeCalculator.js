import Counter from "./counter";
import Fan from "./fan";
import TemperatureCounter from "./temperatureCounter";
import Wheels from "./wheels";
import Distance from "./distance";
import dataModel100D from "../data/metric-100D.json";
import dataModelP100D from "../data/metric-P100D.json";

class BatterRangeCalculator {
  speed;

  outsideTemperature;

  fan;

  wheels;

  setupEvents() {
    const setupSpeedEvents = () => {
      const speedCounterElement = document.querySelector(
        ".counter.speedCounter",
      );
      const initialValue = speedCounterElement.querySelector("input")?.value;
      this.speed = new Counter(
        Number(initialValue) ?? 70,
        70,
        140,
        speedCounterElement,
      );

      this.speed.addEventListeners();
    };

    const setupTemperatureEvents = () => {
      const temperatureCounterElement = document.querySelector(
        ".counter.temperatureCounter",
      );
      const initialValue =
        temperatureCounterElement.querySelector("input")?.value;
      this.outsideTemperature = new TemperatureCounter(
        Number(initialValue) ?? -10,
        -10,
        40,
        this.fan,
        temperatureCounterElement,
      );

      this.outsideTemperature.addEventListeners();
    };

    const setupFanEvents = () => {
      const fan = document.querySelector(".fanButton");
      this.fan = new Fan(fan);

      this.fan.addEventListeners();
    };

    const setupWheelEvents = () => {
      const wheels = document.querySelector(".wheelButtons");
      this.wheels = new Wheels(wheels);

      this.wheels.addEventListeners();
    };

    const setupDistanceEvents = () => {
      const model100D = document.querySelector("[data-model='100D']");
      const distanceModel100D = new Distance(dataModel100D, model100D);

      const modelP100D = document.querySelector("[data-model='P100D']");
      const distanceModelP100D = new Distance(dataModelP100D, modelP100D);

      const updateWheelAnimation = (speed, distance, wheelSize) => {
        const time = distance / (speed * 10);

        const frontWheel = document.querySelector(
          `.carWheelImageFront[data-size="${wheelSize}"]`,
        );
        frontWheel.style.animationDuration = `${time}s`;

        const rearWheel = document.querySelector(
          `.carWheelImageRear[data-size="${wheelSize}"]`,
        );
        rearWheel.style.animationDuration = `${time}s`;
      };

      const updateDistanceForModels = () => {
        const ac = this.fan.getSwitched() ? "on" : "off";
        const temp = this.outsideTemperature.getCount();
        const kmh = this.speed.getCount();
        const wheelSize = this.wheels.getSelectedWheel() ?? 19;

        distanceModel100D.computeDistance(kmh, temp, ac, wheelSize);
        distanceModelP100D.computeDistance(kmh, temp, ac, wheelSize);

        const distance1 = distanceModel100D.getDistance();
        const distance2 = distanceModelP100D.getDistance();

        const avgDistance = (distance1 + distance2) / 2;

        updateWheelAnimation(kmh, Math.round(avgDistance), wheelSize);
      };

      window.addEventListener("load", () => {
        updateDistanceForModels();
      });

      document.addEventListener("kiloMetersChangedEvent", () => {
        updateDistanceForModels();
      });
    };

    setupSpeedEvents();
    setupTemperatureEvents();
    setupFanEvents();
    setupWheelEvents();
    setupDistanceEvents();
  }

  getSpeed() {
    this.speed.getCount();
  }

  getOutsideTemperature() {
    this.outsideTemperature.getCount();
  }
}

export default BatterRangeCalculator;
