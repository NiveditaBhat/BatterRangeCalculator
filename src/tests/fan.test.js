import Fan from "../scripts/fan";

describe("Fan", () => {
  let fanButton;
  let title;

  beforeEach(async () => {
    fanButton = document.querySelector(".fanButton");
    title = fanButton.querySelector(".title");
  });

  it("is rendered", () => {
    const fan = new Fan(fanButton);
    expect(fan.getSwitched()).toBe(false);

    expect(fanButton.getAttribute("aria-label")).toBe("ac icon");
    expect(title.textContent).toBe("AC OFF");
  });

  it("toggles on/off state on click", () => {
    const fan = new Fan(fanButton);
    expect(fan.getSwitched()).toBe(false);

    expect(title.textContent).toBe("AC OFF");

    fanButton.click();

    expect(fan.getSwitched()).toBe(true);
    expect(title.textContent).toBe("AC ON");

    fanButton.click();

    expect(fan.getSwitched()).toBe(false);

    expect(title.textContent).toBe("AC OFF");
  });

  it("changes fan type to heater when temperature is less that 10 degrees", () => {
    const fan = new Fan(fanButton);
    expect(fan.getSwitched()).toBe(false);

    expect(title.textContent).toBe("AC OFF");

    document.dispatchEvent(
      new CustomEvent("temperatureChangedEvent", {
        detail: { temperature: 0 },
      }),
    );
    expect(title.textContent).toBe("HEATER OFF");

    document.dispatchEvent(
      new CustomEvent("temperatureChangedEvent", {
        detail: { temperature: 20 },
      }),
    );

    expect(title.textContent).toBe("AC OFF");
  });
});
