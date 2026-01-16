const STORAGE_KEY = "moo-money-data";

export function getData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data
    ? JSON.parse(data)
    : { income: [], expenses: [], reports: [] };
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
