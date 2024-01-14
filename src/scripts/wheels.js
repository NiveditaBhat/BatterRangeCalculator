class Wheels {
  constructor(element = null) {
    this.element = element;
  }

  #wheel;

  getSelectedWheel() {
    return this.#wheel;
  }

  addEventListeners() {
    const updateSelection = (selectedElement) => {
      const wheelSize = selectedElement.getAttribute("data-size");
      this.#wheel = Number(wheelSize);
    };

    const updateSelectedButton = (prevSelection, currentSelection) => {
      prevSelection.classList.remove("selected");
      currentSelection.classList.add("selected");
    };

    const updateFrontWheel = (previous) => {
      const currentSelection = document.querySelector(
        `.carWheelImageFront[data-size='${this.getSelectedWheel()}']`,
      );
      currentSelection.classList.remove("hide");
      const previousSelection = document.querySelector(
        `.carWheelImageFront[data-size='${previous}']`,
      );

      previousSelection.classList.add("hide");
    };

    const updateRearWheel = (previous) => {
      const currentSelection = document.querySelector(
        `.carWheelImageRear[data-size='${this.getSelectedWheel()}']`,
      );
      currentSelection.classList.remove("hide");
      const previousSelection = document.querySelector(
        `.carWheelImageRear[data-size='${previous}']`,
      );

      previousSelection.classList.add("hide");
    };

    window.onload = () => {
      const defaultSelectedWheel = this.element.querySelector(
        ".wheelButton.selected",
      );
      updateSelection(defaultSelectedWheel);
    };

    this.element.addEventListener("click", (e) => {
      e.stopPropagation();

      const previousWheelSize = this.getSelectedWheel();
      const prevSelection = e.target.parentElement.querySelector(
        ".wheelButton.selected",
      );
      const currentSelection = e.target.closest(".wheelButton");

      updateSelection(currentSelection);
      updateFrontWheel(previousWheelSize);
      updateRearWheel(previousWheelSize);
      updateSelectedButton(prevSelection, currentSelection);

      document.dispatchEvent(new CustomEvent("kiloMetersChangedEvent"));
    });
  }
}

export default Wheels;
