const DEFAULT_SIZE = 19;

class Wheels {
  constructor(element = null) {
    this.element = element;
    this.#selectedWheel = DEFAULT_SIZE;

    this.#addEventListeners();
  }

  #selectedWheel;

  getSelectedWheel() {
    return this.#selectedWheel;
  }

  #setSelectedWheel(size) {
    this.#selectedWheel = Number(size);
  }

  #addEventListeners() {
    const updateSelectedButton = (prevSelection, currentSelection) => {
      prevSelection.classList.remove("selected");
      currentSelection.classList.add("selected");
    };

    window.onload = () => {
      const defaultSelectedWheel =
        this.element
          .querySelector(".wheelButton.selected")
          ?.getAttribute("data-size") ?? DEFAULT_SIZE;
      this.#setSelectedWheel(defaultSelectedWheel);
    };

    this.element.addEventListener("click", (e) => {
      e.stopPropagation();

      const previousWheelSize = this.getSelectedWheel();
      const prevSelection = e.target.parentElement.querySelector(
        ".wheelButton.selected",
      );
      const currentSelection = e.target.closest(".wheelButton");
      const currentWheelSize = currentSelection?.getAttribute("data-size");

      if (!prevSelection || !currentSelection) {
        throw new Error("Wheel buttons not found");
      }

      this.#setSelectedWheel(currentWheelSize);

      updateSelectedButton(prevSelection, currentSelection);

      document.dispatchEvent(new CustomEvent("wheelSelectionChangedEvent"), {
        detail: { previousWheelSize },
      });

      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });
  }
}

export default Wheels;
