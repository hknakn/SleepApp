describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it("should display all family members", async () => {
    await expect(element(by.text("Hakan Akin"))).toBeVisible();
    await expect(element(by.text("Aslihan Akalin"))).toBeVisible();
    await expect(element(by.text("Nihat Akin"))).toBeVisible();
  });

  it("should display all average sleep times", async () => {
    await expect(element(by.text("Average: 6h 21m"))).toBeVisible();
    await expect(element(by.text("Average: 8h 38m"))).toBeVisible();
    await expect(element(by.text("Average: 9h 30m"))).toBeVisible();
  });

  it("should display all latest sleep times", async () => {
    await expect(element(by.text("Latest: 6h 13m"))).toBeVisible();
    await expect(element(by.text("Latest: 6h 36m"))).toBeVisible();
    await expect(element(by.text("Latest: 7h 19m"))).toBeVisible();
  });

  it("should display all sleep scores", async () => {
    await expect(element(by.text("50%"))).toBeVisible();
    await expect(element(by.text("88%"))).toBeVisible();
    await expect(element(by.text("81%"))).toBeVisible();
  });

  it("should press first person card", async () => {
    await expect(element(by.id("person-card-0"))).toBeVisible();
    await element(by.id("person-card-0")).tap();
  });

  it("should display sleep scores and dates", async () => {
    await expect(element(by.text("47%")).atIndex(0)).toBeVisible();
    await expect(element(by.text("58%"))).toBeVisible();
    await expect(element(by.text("44%"))).toBeVisible();
    await expect(element(by.text("Mar 7"))).toBeVisible();
    await expect(element(by.text("Mar 8"))).toBeVisible();
    await expect(element(by.text("Mar 9"))).toBeVisible();
  });

  it("should display sleep details", async () => {
    await expect(element(by.text("Time to fall asleep"))).toBeVisible();
    await expect(element(by.text("7 minutes"))).toBeVisible();
    await expect(element(by.text("Average: 10 minutes"))).toBeVisible();

    await expect(element(by.text("Sleep score"))).toBeVisible();
    await expect(element(by.text("47%")).atIndex(1)).toBeVisible();
    await expect(element(by.text("Average: 50%"))).toBeVisible();

    await expect(element(by.text("Heart rate")).atIndex(0)).toBeVisible();
    await expect(element(by.text("71"))).toBeVisible();
    await expect(element(by.text("Average: 77"))).toBeVisible();

    await expect(element(by.text("Respiratory rate")).atIndex(0)).toBeVisible();
    await expect(element(by.text("17"))).toBeVisible();
    await expect(element(by.text("Average: 17"))).toBeVisible();

    await expect(element(by.text("Toss and turns"))).toBeVisible();
    await expect(element(by.text("16"))).toBeVisible();
    await expect(element(by.text("Average: 18"))).toBeVisible();

    await expect(element(by.text("Bed temperature"))).toBeVisible();
    await expect(element(by.text("33"))).toBeVisible();
    await expect(element(by.text("Average: 33"))).toBeVisible();
  });

  it("should scroll to end", async () => {
    await element(by.id("detailSrollView")).scrollTo("bottom");
  });

  it("should navigate back", async () => {
    await element(by.id("backButton")).tap();
    await expect(element(by.id("person-card-0"))).toBeVisible();
  });
});
