export function checkKeyValue(object, key) {
  if (
    key in object &&
    object[key] !== null &&
    object[key] !== undefined &&
    object[key].trim() !== ''
  ) {
    return object[key];
  }
  return null;
}
