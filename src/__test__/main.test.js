import { translateCode, decodeString, MIN_NUMBER, MAX_NUMBER } from "../main.js";

describe("translateCode", () => {
  it(`Returns an error code when receiving a number that's out of range`, () => {
    const funct = () => translateCode(10);

    expect(funct).toThrow("Number out of range");
  });
  it(`returns the translated code "bed" when receiving 147`, () => {
    const translation = translateCode(147);

    expect(translation).toEqual("bed");
  });
});

describe("decodeString", () => {
  it(`returns the translated code "bed" when receiving 147`, () => {
    const translation = decodeString(147);

    expect(translation).toEqual("bed");
  });

  it(`returns the translated code "noted" when receiving 80547`, () => {
    const translation = decodeString(80547);

    expect(translation).toEqual("noted");
  });

  it(`returns the translated code "total" when receiving 5005622`, () => {
    const translation = decodeString(50562);

    expect(translation).toEqual("total");
  });
});

describe("correct formatting in the returning solution", () => {
  let randomCode;
  beforeEach(() => {
    randomCode = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
  })

  it(`returns a translated code in lower case`, () => {
    expect(translateCode(randomCode)).toEqual(translateCode(randomCode).toLowerCase());
  });

  it(`returns a single word, no spaces inbetween`, () => {
    expect(translateCode(randomCode)).toEqual(translateCode(randomCode).split(" ")[0]);
  });
});
