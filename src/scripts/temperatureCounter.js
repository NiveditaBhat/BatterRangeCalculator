import Counter from "./counter";

class TemperatureCounter extends Counter {
  constructor(min, max, type) {
    super(min, max, type);

    this.#addEventListeners();
  }

  #addEventListeners() {
    const counterElement = this.getElement();
    const incrementButton = counterElement.querySelector(".incrementButton");
    const decrementButton = counterElement.querySelector(".decrementButton");

    incrementButton.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("temperatureChangedEvent", {
          detail: { temperature: this.getCount() },
        }),
      );
    });

    decrementButton.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("temperatureChangedEvent", {
          detail: { temperature: this.getCount() },
        }),
      );
    });
  }
}

export default TemperatureCounter;
