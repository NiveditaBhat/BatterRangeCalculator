class Counter {
  constructor(min, max, element = null) {
    this.#min = min;
    this.#max = max;
    this.#element = element;

    this.#addEventListeners();
  }

  #min;

  #max;

  #element;

  #count;

  #increment() {
    if (this.#count < this.#max) {
      this.#count += 10;
    }
  }

  #decrement() {
    if (this.#count >= this.#min) {
      this.#count -= 10;
    }
  }

  #setCount(count = 0) {
    this.#count = Number(count);
  }

  #isCountMax() {
    return this.#count === this.#max;
  }

  #isCountMin() {
    return this.#count === this.#min;
  }

  getCount() {
    return this.#count;
  }

  getElement() {
    return this.#element;
  }

  #addEventListeners() {
    const initalCount = this.#element?.querySelector("input")?.value ?? 0;
    this.#setCount(initalCount);

    const counterInput = this.#element?.querySelector("input");
    const incrementButton = this.#element?.querySelector(".incrementButton");
    const decrementButton = this.#element?.querySelector(".decrementButton");

    if (!counterInput || !incrementButton || !decrementButton) {
      throw new Error("Counter element not found!");
    }

    const updateCounterValue = () => {
      const newValue = this.getCount();
      counterInput.value = newValue;
    };

    const updateButtonColor = (counterButton, isDisabled) => {
      const svg = counterButton.querySelector("object")?.contentDocument;
      const svgPath = svg?.querySelector("path");
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

      updateButtonColor(counterButton, true);
    };

    const enableButton = (button) => {
      if (!button) {
        return;
      }
      const counterButton = button;
      counterButton.disabled = false;

      updateButtonColor(counterButton, false);
    };

    const changeIncrementButtonState = () => {
      if (this.#isCountMax()) {
        disableButton(incrementButton);
      } else if (this.#count > this.#min) {
        enableButton(decrementButton);
      }
    };

    const changeDecrementButtonState = () => {
      if (this.#isCountMin()) {
        disableButton(decrementButton);
      } else if (this.#count < this.#max) {
        enableButton(incrementButton);
      }
    };

    incrementButton.addEventListener("click", () => {
      this.#increment();
      updateCounterValue();
      changeIncrementButtonState();

      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });

    window.addEventListener("load", () => {
      changeIncrementButtonState();
      changeDecrementButtonState();
    });

    decrementButton.addEventListener("click", () => {
      this.#decrement();
      updateCounterValue();
      changeDecrementButtonState();
      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });
  }
}

export default Counter;
