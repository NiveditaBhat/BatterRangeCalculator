import Wheels from "../scripts/wheels";

describe("Wheels", () => {
  let wheelElements;

  beforeEach(async () => {
    wheelElements = document.querySelector(".wheelButtons");
  });

  it("is rendered", () => {
    const wheels = new Wheels(wheelElements);
    window.onload();
    expect(wheels.getSelectedWheel()).toBe(19);
  });

  it("updates selection on click", () => {
    const wheels = new Wheels(wheelElements);
    window.onload();
    expect(wheels.getSelectedWheel()).toBe(19);

    const bigWheelButton = wheelElements.querySelector("[data-size='21']");

    bigWheelButton.click();

    expect(wheels.getSelectedWheel()).toBe(21);

    const smallWheelButton = wheelElements.querySelector("[data-size='19']");
    smallWheelButton.click();

    expect(wheels.getSelectedWheel()).toBe(19);
  });
});
