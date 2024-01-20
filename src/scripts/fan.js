class Fan {
  #airConditioner = true;

  #isSwitchedOn = false;

  #element = null;

  constructor(element = null) {
    this.#element = element;

    this.#addEventListeners();
  }

  #setSwitched() {
    this.#isSwitchedOn = !this.#isSwitchedOn;
  }

  getSwitched() {
    return this.#isSwitchedOn;
  }

  #setFanType(temperature) {
    this.#airConditioner = temperature > 10;
  }

  #addEventListeners() {
    if (!this.#element) {
      throw new Error("Fan element not found!");
    }

    const title = this.#element.querySelector(".title");

    const updateStyling = (element) => {
      const innerElement = element.querySelector(".innerCircle");

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
    };

    const updateAirConditionerTitle = () => {
      title.textContent = this.#isSwitchedOn ? "AC ON" : "AC OFF";
    };

    const updateHeaterTitle = () => {
      title.textContent = this.#isSwitchedOn ? "HEATER ON" : "HEATER OFF";
    };

    const updateTitle = () => {
      if (this.#airConditioner) {
        updateAirConditionerTitle();
      } else {
        updateHeaterTitle();
      }
    };

    const updateFanType = (temperature) => {
      this.#setFanType(temperature);

      const airConditioner = this.#element.querySelector(".airConditioner");
      const heater = this.#element.querySelector(".heater");

      if (this.#airConditioner) {
        heater.classList.add("hide");
        airConditioner.classList.remove("hide");

        updateAirConditionerTitle(title);
      } else {
        airConditioner.classList.add("hide");
        heater.classList.remove("hide");

        updateHeaterTitle(title);
      }
    };

    this.#element.addEventListener("click", () => {
      this.#setSwitched();

      updateTitle(title);
      updateStyling(this.#element);

      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });

    document.addEventListener("temperatureChangedEvent", (e) => {
      const { detail } = e;

      updateFanType(detail.temperature);
      updateStyling(this.#element);
    });
  }
}

export default Fan;
