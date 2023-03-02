import { atom } from "recoil";

export const splashState = atom({
  key: "splashState", //splash화면을 띄워야 하는가?
  default: false, //기본 값 : true
});

export const isIdentifiedState = atom({
  key: "isIdentifiedState", //본인인증을 하였는가?
  default: true, //기본 값 : false
});

export const idStoreState = atom({
  key: "idStoreState", //기기에 id가 저장되어 있는가?
  default: true, //기본 값 : false
});

export const loginState = atom({
  key: "loginState", //로그인 하였는가?
  default: true, //기본 값 : false
});

export const regFinishState = atom({
  key: "regFinishState", // 회원가입을 마쳤는가?
  default: true, //기본 값 : false
});

export const accountLinkState = atom({
  key: "accountLinkState", // 계좌를 연결하였는가?
  default: true, //기본 값 : false
});

export const passwordState = atom({
  key: "passwordState", // 패스워드 등록 시 처음의 입력과 2번째 입력의 비교를 위한 State
  default: null, //기본 값 : null
});

export const loadingState = atom({
  key: "loadingState", // 서버에서 데이터 로딩 중인가?
  default: true, // 기본 값 : true
});
//-----------------------------------------------------
export const userIdState = atom({
  key: "userIdState", // 유저 키 저장소
  default: [],
});
export const challengeIdState = atom({
  key: "challengeIdState", // 챌린지 키 저장소
  default: [],
});
export const challengeLogIdState = atom({
  key: "challengeLogIdState", // 챌린지로그 키 저장소
  default: [],
});
export const valueIdState = atom({
  key: "valueIdState", // 가치소비 키 저장소
  default: [],
});
export const couponIdState = atom({
  key: "couponIdState", // 쿠폰 키 저장소
  default: [],
});
export const couponLogIdState = atom({
  key: "couponLogIdState", // 쿠폰로그 키 저장소
  default: [],
});
export const archiveIdState = atom({
  key: "archiveIdState", // 아카이브 키 저장소
  default: [],
});
export const shortIdState = atom({
  key: "shortIdState", // 쇼츠 키 저장소
  default: [], //
});
export const advertisementIdState = atom({
  key: "advertisementIdState", // 광고 키 저장소
  default: null, //
});
export const helpIdState = atom({
  key: "helpIdState", // 문의 내역 키 저장소`
  default: null, //
});

//-----------------------------------------------------
export const userState = atom({
  key: "userState", // users table
  default: {},
});

export const challengeState = atom({
  key: "challengeState", // challenges table
  default: {},
});

export const challengeLogState = atom({
  key: "challengeLogState", // challengeLogs table
  default: {},
});

export const valueState = atom({
  key: "valueState", // values table
  default: {},
});

export const couponState = atom({
  key: "couponState", // coupons table
  default: {},
});

export const couponLogState = atom({
  key: "couponLogState", // couponLog table
  default: {},
});

export const archiveState = atom({
  key: "archiveState", // archives table
  default: {},
});

export const shortState = atom({
  key: "shortState", // shorts table
  default: {},
});

export const advertisementState = atom({
  key: "advertisementsState", // advertisements table
  default: {},
});

export const helpState = atom({
  key: "helpState", // helps table
  default: {},
});
