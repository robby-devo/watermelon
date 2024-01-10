export const urlConstants = Object.freeze({
  BASE_URL: process.env.REACT_APP_BASE_URL,
});

export const signInRoutes: Array<string | undefined> = ["/login"];

export const openRoutes: Array<string | undefined> = [
  "/register",
  "/reset-password",
  "/verify-account/[token]",
];
