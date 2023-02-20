import { atom } from "recoil";

export const splashState = atom({
  key: "splashState", //splash화면을 띄워야 하는가?
  default: true, //기본 값 : true
});

export const idStoreState = atom({
  key: "idStoreState", //기기에 id가 저장되어 있는가?
  default: false, //기본 값 : false
});

export const loginState = atom({
  key: "loginState", //로그인 하였는가?
  default: false, //기본 값 : false
});

export const regFinishState = atom({
  key: "regFinishState", // 회원가입을 마쳤는가?
  default: false, //기본 값 : false
});

export const accountLinkState = atom({
  key: "accountLinkState", // 계좌를 연결하였는가?
  default: false, //기본 값 : false
});

export const passwordState = atom({
  key: "passwordState", // 패스워드 등록 시 처음의 입력과 2번째 입력의 비교를 위한 State
  default: null, //기본 값 : null
});

export const loadingState = atom({
  key: "loadingState", // 서버에서 데이터 로딩 중인가?
  default: false, // 기본 값 : false
});
//-----------------------------------------------------
export const userIdState = atom({
  key: "userIdState", // 유저 키 저장소
  default: null, // 기본 값 : null
});
//-----------------------------------------------------
export const usersState = atom({
  key: "usersState", // users table
  default: null,
});

export const challengesState = atom({
  key: "challengesState", // challenges table
  default: null,
});

export const challengeLogsState = atom({
  key: "challengeLogsState", // challengeLogs table
  default: null,
});

export const valuesState = atom({
  key: "valuesState", // values table
  default: null,
});

export const couponsState = atom({
  key: "couponsState", // coupons table
  default: null,
});

export const couponLogsState = atom({
  key: "couponLogsState", // couponLog table
  default: null,
});

export const archivesState = atom({
  key: "archivesState", // archives table
  default: null,
});

export const shortsState = atom({
  key: "shortsState", // shorts table
  default: null,
});

export const advertisementsState = atom({
  key: "advertisementsState", // advertisements table
  default: null,
});

export const helpsState = atom({
  key: "helpsState", // helps table
  default: null,
});
