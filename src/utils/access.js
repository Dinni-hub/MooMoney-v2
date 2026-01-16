const ACCESS_KEY = "moo-money-access";

export function hasAccess() {
  return localStorage.getItem(ACCESS_KEY) === "granted";
}

export function grantAccess() {
  localStorage.setItem(ACCESS_KEY, "granted");
}
