class Distance {
  constructor(data, element = null) {
    this.data = data;
    this.element = element;
  }

  #kilometers;

  computeDistance(speed, outsideTemperature, fan, wheel) {
    this.#kilometers =
      this.data
        .find(
          (item) =>
            item.ac === fan &&
            item.temp === outsideTemperature &&
            item.wheelsize === wheel,
        )
        ?.hwy.find((hwyItem) => hwyItem.kmh === speed)?.kilometers ?? "-";

    this.#updateDistance();
  }

  getDistance() {
    return this.#kilometers;
  }

  #updateDistance() {
    const distanceElement = this.element.querySelector(".kiloMeters .distance");
    distanceElement.textContent = this.getDistance();
    distanceElement.setAttribute("kms", this.getDistance());
  }
}

export default Distance;
