import Distance from "../scripts/distance";

const data = [
  {
    temp: 20,
    wheelsize: 21,
    ac: "off",
    hwy: [
      { kmh: 70, kilometers: 798 },
      { kmh: 80, kilometers: 710 },
      { kmh: 90, kilometers: 627 },
      { kmh: 100, kilometers: 555 },
      { kmh: 110, kilometers: 491 },
      { kmh: 120, kilometers: 435 },
      { kmh: 130, kilometers: 386 },
      { kmh: 140, kilometers: 338 },
    ],
  },
  {
    temp: -10,
    wheelsize: 19,
    ac: "on",
    hwy: [
      { kmh: 70, kilometers: 618 },
      { kmh: 80, kilometers: 575 },
      { kmh: 90, kilometers: 526 },
      { kmh: 100, kilometers: 478 },
      { kmh: 110, kilometers: 433 },
      { kmh: 120, kilometers: 390 },
      { kmh: 130, kilometers: 351 },
      { kmh: 140, kilometers: 311 },
    ],
  },
  {
    temp: -10,
    wheelsize: 21,
    ac: "off",
    hwy: [
      { kmh: 70, kilometers: 788 },
      { kmh: 80, kilometers: 698 },
      { kmh: 90, kilometers: 616 },
      { kmh: 100, kilometers: 543 },
      { kmh: 110, kilometers: 480 },
      { kmh: 120, kilometers: 424 },
      { kmh: 130, kilometers: 376 },
      { kmh: 140, kilometers: 329 },
    ],
  },
];

describe("Distance", () => {
  let distanceElement;
  let kms;

  beforeEach(async () => {
    [distanceElement] = document.querySelectorAll("[data-model]");
    kms = distanceElement.querySelector("[data-kms]");
  });

  it("computes distance based on speed, temperature, ac state and wheel size", () => {
    const distance = new Distance(data, distanceElement);

    distance.computeDistance(70, -10, "on", 19);
    expect(distance.getDistance()).toBe(618);
    expect(kms.textContent).toBe("618");

    distance.computeDistance(120, 20, "off", 21);
    expect(distance.getDistance()).toBe(435);
    expect(kms.textContent).toBe("435");

    distance.computeDistance(170, 20, "on", 21);
    expect(distance.getDistance()).toBe("-");
    expect(kms.textContent).toBe("-");
  });
});
