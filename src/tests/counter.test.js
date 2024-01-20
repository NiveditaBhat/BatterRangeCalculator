import Counter from "../scripts/counter";

describe("Counter", () => {
  let counterElement;
  let incrementButton;
  let input;
  let decrementButton;

  beforeEach(async () => {
    counterElement = document.querySelector("[data-counter='speed']");
    incrementButton = counterElement.querySelector(".incrementButton");
    input = counterElement.querySelector("input");
    decrementButton = counterElement.querySelector(".decrementButton");
  });

  it("creates a counter", () => {
    const counter = new Counter(20, 150, counterElement);
    expect(counter.getCount()).toBe(100);
    expect(input.value).toBe("100");
  });

  it("increments the counter by 10", () => {
    const counter = new Counter(20, 150, counterElement);

    incrementButton.click();

    expect(counter.getCount()).toBe(110);
    expect(input.value).toBe("110");

    incrementButton.click();

    expect(counter.getCount()).toBe(120);
    expect(input.value).toBe("120");
  });

  it("increment button is disabled when max value is reached", () => {
    const counter = new Counter(20, 110, counterElement);

    incrementButton.click();
    incrementButton.click();

    expect(counter.getCount()).toBe(110);
    expect(incrementButton.disabled).toBe(true);

    decrementButton.click();

    expect(incrementButton.disabled).toBe(false);
  });

  it("decrements the counter by 10", () => {
    const counter = new Counter(20, 150, counterElement);

    decrementButton.click();

    expect(counter.getCount()).toBe(90);
    expect(input.value).toBe("90");

    decrementButton.click();

    expect(counter.getCount()).toBe(80);
    expect(input.value).toBe("80");
  });

  it("decrement button is disabled when min value is reached", () => {
    const counter = new Counter(90, 150, counterElement);

    decrementButton.click();

    expect(counter.getCount()).toBe(90);
    expect(input.value).toBe("90");

    expect(decrementButton.disabled).toBe(true);

    incrementButton.click();

    expect(decrementButton.disabled).toBe(false);
  });
});
