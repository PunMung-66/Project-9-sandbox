export const LOCALSTORAGE_KEY = {
  collections: "COLLECTIONS",
  categories: "CATEGORIES",
};

const genExp = (day) => {
  if (typeof day !== "number")
    throw new Error("expired time in localStorage must be number");
  const today = new Date().getTime();
  return today + day * 24 * 60 * 60 * 1000;
};

const formatData = (data, expDate) => {
  const expDateUnix = genExp(expDate);
  const formatedData = { expDate: expDateUnix, data };
  return JSON.stringify(formatedData);
};

const verifyLocalData = (stringData) => {
  if (!stringData) return null;
  const { expDate, data } = JSON.parse(stringData);
  if (expDate < new Date().getTime()) return null;
  return data;
};

export const saveToLocal = (key) => (data, expDate) => {
  const stringData = formatData(data, expDate);
  localStorage.setItem(key, stringData);
};

export const loadLocal = (key) => {
  const stringData = localStorage.getItem(key);
  const result = verifyLocalData(stringData);
  return result;
};
