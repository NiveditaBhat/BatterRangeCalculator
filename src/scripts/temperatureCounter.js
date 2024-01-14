import Counter from "./counter";

class TemperatureCounter extends Counter {
  constructor(initialCount, min, max, fan, element = null) {
    super(initialCount, min, max, element);
    this.fan = fan;
  }

  addEventListeners() {
    const incrementButton = this.element.querySelector(".incrementButton");
    const decrementButton = this.element.querySelector(".decrementButton");

    super.addEventListeners();

    incrementButton.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("temperatureChangedEvent", {
          detail: { temperature: this.count },
        }),
      );
    });

    decrementButton.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("temperatureChangedEvent", {
          detail: { temperature: this.count },
        }),
      );
    });
  }
}

export default TemperatureCounter;
