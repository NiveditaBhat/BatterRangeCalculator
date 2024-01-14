class Fan {
  #airConditioner = true;

  #isSwitchedOn = false;

  constructor(element = null) {
    this.element = element;
  }

  #setSwitched() {
    this.#isSwitchedOn = !this.#isSwitchedOn;
  }

  getSwitched() {
    return this.#isSwitchedOn;
  }

  #updateAirConditionerTitle(title) {
    const fanTitle = title;
    fanTitle.textContent = this.#isSwitchedOn ? "AC ON" : "AC OFF";
  }

  #updateHeaterTitle(title) {
    const fanTitle = title;
    fanTitle.textContent = this.#isSwitchedOn ? "HEATER ON" : "HEATER OFF";
  }

  #updateTitle(title) {
    if (this.#airConditioner) {
      this.#updateAirConditionerTitle(title);
    } else {
      this.#updateHeaterTitle(title);
    }
  }

  #updateStyling(element) {
    const innerElement = element.querySelector(".innerCircle");
    const title = this.element.querySelector(".title");

    if (this.#isSwitchedOn) {
      title.style.color = "#FFFFFF";
    } else {
      title.style.color = "#707070";
    }

    if (this.#airConditioner) {
      innerElement.style.backgroundColor = this.#isSwitchedOn
        ? "#008DFF"
        : "#FFFFFF";
    } else {
      innerElement.style.backgroundColor = this.#isSwitchedOn
        ? "#EC1C24"
        : "#FFFFFF";
    }
  }

  #setFanType(temperature) {
    this.#airConditioner = temperature > 10;
  }

  #updateFanType(temperature) {
    this.#setFanType(temperature);

    const airConditioner = this.element.querySelector(".airConditioner");
    const heater = this.element.querySelector(".heater");
    const title = this.element.querySelector(".title");

    if (this.#airConditioner) {
      heater.classList.add("hide");
      airConditioner.classList.remove("hide");

      this.#updateAirConditionerTitle(title);
    } else {
      airConditioner.classList.add("hide");
      heater.classList.remove("hide");

      this.#updateHeaterTitle(title);
    }
  }

  addEventListeners() {
    const title = this.element.querySelector(".title");

    this.element.addEventListener("click", () => {
      this.#setSwitched();

      this.#updateTitle(title);
      this.#updateStyling(this.element);

      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });

    document.addEventListener("temperatureChangedEvent", (e) => {
      const { detail } = e;

      this.#updateFanType(detail.temperature);
      this.#updateStyling(this.element);
    });
  }
}

export default Fan;
