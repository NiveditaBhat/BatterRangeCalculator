import BatteryRangeCalculator from "../scripts/batteryRangeCalculator";

describe("BatteryRangeCalculator", () => {
  let speed;
  let incrementSpeedButton;
  let decrementSpeedButton;

  let temperature;
  let decrementTempButton;

  let fan;

  let largeWheel;

  let distanceModel100D;
  let distanceModelP100D;

  beforeEach(async () => {
    speed = document.querySelector("[data-counter='speed']");
    incrementSpeedButton = speed.querySelector(".incrementButton");
    decrementSpeedButton = speed.querySelector(".decrementButton");

    temperature = document.querySelector("[data-counter='temperature']");

    decrementTempButton = temperature.querySelector(".decrementButton");

    fan = document.querySelector(".fanButton");

    largeWheel = document.querySelector(".wheelButton[data-size='21']");

    distanceModel100D = document.querySelector(
      "[data-model='100D'] [data-kms]",
    );

    distanceModelP100D = document.querySelector(
      "[data-model='P100D'] [data-kms]",
    );
  });

  it("computes distance in kms for model 100D when speed, temperature, fan state and wheel size change", () => {
    const batterRangeCalculator = new BatteryRangeCalculator();

    expect(distanceModel100D.textContent).toBe("-");

    incrementSpeedButton.click();
    expect(batterRangeCalculator.getDistanceModel100D()).toBe(550);
    expect(distanceModel100D.textContent).toBe("550");

    fan.click();
    expect(batterRangeCalculator.getDistanceModel100D()).toBe(500);
    expect(distanceModel100D.textContent).toBe("500");

    decrementTempButton.click();
    expect(batterRangeCalculator.getDistanceModel100D()).toBe(508);
    expect(distanceModel100D.textContent).toBe("508");

    largeWheel.click();

    expect(batterRangeCalculator.getDistanceModel100D()).toBe(496);
    expect(distanceModel100D.textContent).toBe("496");
  });

  it("computes distance in kms for model P100D when speed, temperature, fan state and wheel size change", () => {
    const batterRangeCalculator = new BatteryRangeCalculator();

    expect(distanceModelP100D.textContent).toBe("-");

    decrementSpeedButton.click();
    expect(batterRangeCalculator.getDistanceModelP100D()).toBe(659);
    expect(distanceModelP100D.textContent).toBe("659");

    fan.click();
    expect(batterRangeCalculator.getDistanceModelP100D()).toBe(584);
    expect(distanceModelP100D.textContent).toBe("584");

    decrementTempButton.click();
    expect(batterRangeCalculator.getDistanceModelP100D()).toBe(606);
    expect(distanceModelP100D.textContent).toBe("606");

    largeWheel.click();
    expect(batterRangeCalculator.getDistanceModelP100D()).toBe(577);
    expect(distanceModelP100D.textContent).toBe("577");
  });
});
