import { translateCode } from "../main.js";

describe("translateCode", () => {
  it(`Returns an error code when receiving a number that's out of range`, () => {
    const funct = () => translateCode(10);

    expect(funct).toThrow(new Error("Number out of range"));
  });
  it(`returns the translated code "bed" when receiving 147`, () => {
    const translation = translateCode(147);

    expect(translation).toEqual("bed");
  });
});

describe("decodeString", () => {
  it(`returns the translated code "bed" when receiving 147`, () => {
    const translation = translateCode(147);

    expect(translation).toEqual("bed");
  });

  it(`returns the translated code "noted" when receiving 80547`, () => {
    const translation = translateCode(80547);

    expect(translation).toEqual("noted");
  });

  it(`returns the translated code "total" when receiving 5005622`, () => {
    const translation = translateCode(50562);

    expect(translation).toEqual("total");
  });
});
