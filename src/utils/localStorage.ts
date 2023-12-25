export const saveLocalStorage = (key: string, value: any): void => {
  let valueToSave = value;
  if (typeof value === "object") {
    valueToSave = JSON.stringify(value);
  }
  localStorage.setItem(key, valueToSave);
};

export const loadLocalStorage = (
  key: string,
  parseJson = false
): string | undefined => {
  const value = localStorage.getItem(key);
  if (value == null) {
    return undefined;
  }
  if (parseJson) {
    return JSON.parse(value);
  } else {
    return value.replace(/^"(.*)"$/, "$1");
  }
};

export const removeLocalStorage = (
  keys: string | string[],
  isRemove = true
): void => {
  keys = !Array.isArray(keys) ? [keys] : keys;
  if (isRemove) {
    keys.forEach((key) => localStorage.removeItem(key));
  } else {
    keys.forEach((key) => localStorage.setItem(key, ""));
  }
};
