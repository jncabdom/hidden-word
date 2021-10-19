export const MIN_NUMBER = 100;
export const MAX_NUMBER = 999999;

const BASE_STRING = "oblietadnm";

export const translateCode = (numberCode) => {
  if (numOutOfRange(numberCode)) {
    throw (new Error("Number out of range"));
  }

  return decodeString(numberCode.toString());
}

export const decodeString = (numberCode) => {
  let result = '';
  numberCode = numberCode.toString();

  for(const number of numberCode) {
    result += BASE_STRING[number];
  }
  return result;
}

const numOutOfRange = (number) => {
  return (number < MIN_NUMBER || number > MAX_NUMBER);
}
