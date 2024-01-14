class Counter {
  constructor(initialCount, min, max, element = null) {
    this.count = initialCount;
    this.element = element;
    this.min = min;
    this.max = max;
  }

  #increment() {
    if (this.count <= this.max) {
      this.count += 10;
    }
  }

  #decrement() {
    if (this.count >= this.min) {
      this.count -= 10;
    }
  }

  getCount() {
    return this.count;
  }

  addEventListeners() {
    const counterInput = this.element.querySelector("input");
    const incrementButton = this.element.querySelector(".incrementButton");
    const decrementButton = this.element.querySelector(".decrementButton");

    if (!counterInput || !incrementButton || !decrementButton) {
      throw new Error("Counter element not found!");
    }

    const updateCounterValue = () => {
      const newValue = this.getCount();
      counterInput.value = newValue;
    };

    const updateButtonColor = (counterButton, isDisabled) => {
      const svg = counterButton.querySelector("object").contentDocument;
      const svgPath = svg.querySelector("path");
      if (svgPath) {
        svgPath.setAttribute("stroke", isDisabled ? "#707070" : "#008dff");
      }
    };

    const disableButton = (button) => {
      if (!button) {
        return;
      }
      const counterButton = button;
      counterButton.disabled = true;

      this.isDisabled = true;

      updateButtonColor(counterButton, true);
    };

    const enableButton = (button) => {
      if (!button) {
        return;
      }
      const counterButton = button;
      counterButton.disabled = false;

      this.isDisabled = false;

      updateButtonColor(counterButton, false);
    };

    incrementButton.addEventListener("click", () => {
      this.#increment();
      updateCounterValue();
      if (this.count === this.max) {
        disableButton(incrementButton);
      }

      if (this.count > this.min) {
        enableButton(decrementButton);
      }

      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });

    decrementButton.addEventListener("click", () => {
      this.#decrement();
      updateCounterValue();
      if (this.count === this.min) {
        disableButton(decrementButton);
      }
      if (this.count < this.max) {
        enableButton(incrementButton);
      }
      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });
  }
}

export default Counter;
