import { atom } from "recoil";

export const splashState = atom({
  key: "splashState",
  default: true,
});

export const idStoreState = atom({
  key: "idStoreState",
  default: false,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const regFinishState = atom({
  key: "regFinishState",
  default: false,
});

export const accountLinkState = atom({
  key: "accountLinkState",
  default: false,
});

export const passwordState = atom({
  key: "passwordState",
  default: null,
});
