import User from "../models/user";
import Challenge from "../models/challenge";
import ChallengeLog from "../models/challengeLog";
import Value from "../models/value";
import Coupon from "../models/coupon";
import CouponLog from "../models/couponLog";
import Archive from "../models/archive";
import Short from "../models/short";
import Advertisement from "../models/advertisement";
import Help from "../models/help";

export const users = [
  new User(
    "Paul1",
    "https://github.com/Sebyeok/mivvAssets/blob/main/profile1.jpeg?raw=true",
    "010-1234-5678",
    "홍길동",
    "1999-02-05",
    "testemail1@projectbuildup.io",
    "123456",
    0,
    { bank: "shinhan", account: "12345678910123" },
    [],
    [],
    { total: 850000, thisMonth: { price: 80000, ranking: 1 } },
    [],
    [],
    [],
    true,
    true
  ),
  new User(
    "Paul2",
    "https://github.com/Sebyeok/mivvAssets/blob/main/profile2.jpg?raw=true",
    "010-1234-5679",
    "홍길서",
    "1998-02-05",
    "testemail2@projectbuildup.io",
    "123456",
    0,
    { bank: "shinhan", account: "12345678910124" },
    [],
    [],
    { total: 840000, thisMonth: { price: 70000, ranking: 2 } },
    [],
    [],
    [],
    true,
    true
  ),
  new User(
    "Paul3",
    "https://github.com/Sebyeok/mivvAssets/blob/main/profile3.png?raw=true",
    "010-1234-5670",
    "홍길남",
    "1997-02-05",
    "testemail3@projectbuildup.io",
    "123456",
    0,
    { bank: "shinhan", account: "12345678910125" },
    [],
    [],
    { total: 830000, thisMonth: { price: 60000, ranking: 3 } },
    [],
    [],
    [],
    true,
    true
  ),
  new User(
    "Paul4",
    "https://github.com/Sebyeok/mivvAssets/blob/main/profile4.png?raw=true",
    "010-1234-5671",
    "홍길북",
    "1996-02-05",
    "testemail4@projectbuildup.io",
    "123456",
    0,
    { bank: "shinhan", account: "12345678910126" },
    [],
    [],
    { total: 820000, thisMonth: { price: 50000, ranking: 4 } },
    [],
    [],
    [],
    true,
    true
  ),
  new User(
    "Paul5",
    "https://github.com/Sebyeok/mivvAssets/blob/main/profile5.jpg?raw=true",
    "010-1234-5672",
    "홍길중",
    "1995-02-05",
    "testemail4@projectbuildup.io",
    "123456",
    0,
    { bank: "shinhan", account: "12345678910127" },
    [],
    [],
    { total: 810000, thisMonth: { price: 40000, ranking: 5 } },
    [],
    [],
    [],
    true,
    true
  ),
];

export const challenges = [
  new Challenge(
    "배달팁 아끼기",
    "배달말고 포장, 배달팁 아끼기!",
    "https://github.com/Sebyeok/mivvAssets/blob/main/challengeImage1.png?raw=true",
    [
      "배달말고 포장해서, 배달팁도 아끼고 건강도 챙기기!",
      "칼로리 높은 배달음식도 먹을텐데, 조금 걸어두는 편이 좋지 않겠어요?",
    ],
    "2023-01-01",
    "2023-02-28",
    [
      "-NOcTHuPMea5OLbyK2k0",
      "-NOcTHudLIXBMPezagmn",
      "-NOcTHusucX0NEVnjC0x",
      "-NOcTHv4850d_iGuGidE",
    ],
    { min: 2000, max: 4000 },
    2
  ),
  new Challenge(
    "커피값 아끼기",
    "그 커피 꼭 사야 해?",
    "https://github.com/Sebyeok/mivvAssets/blob/main/challengeImage2.png?raw=true",
    [
      "배달말고 포장해서, 배달팁도 아끼고 건강도 챙기기!",
      "칼로리 높은 배달음식도 먹을텐데, 조금 걸어두는 편이 좋지 않겠어요?",
    ],
    "2023-01-01",
    "2023-02-28",
    ["-NOcTHuPMea5OLbyK2k0", "-NOcTHusucX0NEVnjC0x", "-NOcTHv4850d_iGuGidE"],
    { min: 3000, max: 5000 },
    3
  ),
  new Challenge(
    "택시비 아끼기",
    "걸어서 갈 수 있잖아?",
    "https://github.com/Sebyeok/mivvAssets/blob/main/challengeImage3.png?raw=true",
    [
      "배달말고 포장해서, 배달팁도 아끼고 건강도 챙기기!",
      "칼로리 높은 배달음식도 먹을텐데, 조금 걸어두는 편이 좋지 않겠어요?",
    ],
    "2023-01-01",
    "2023-02-28",
    ["-NOcTHuPMea5OLbyK2k0", "-NOcTHudLIXBMPezagmn"],
    { min: 3000, max: 6000 },
    3
  ),
];

export const challengeLogs = [
  new ChallengeLog(
    "-NOcWPoCf-dxmNWSC42r",
    "-NOcTHuPMea5OLbyK2k0",
    4500,
    "2023-02-04"
  ),
  new ChallengeLog(
    "-NOcWPoDteSMlEcLb2SL",
    "-NOcTHuPMea5OLbyK2k0",
    3000,
    "2023-02-03"
  ),
];

export const values = [
  new Value(
    "레드 맥스 짐",
    ["오운완", "갓생", "헬린이"],
    100,
    "https://youtu.be/0gY_z7fqPjs",
    "https://github.com/Sebyeok/mivvAssets/blob/main/valueBackground1.png?raw=true",
    { original: 99000, sale: 79000 },
    [
      "정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.",
      "선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다.",
      "국가안전보장에 관련되는 대외정책, 군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전 보장회의를 둔다.",
      "국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다.",
    ],
    "1달 회원권",
    "대구 전 지역",
    [
      "쿠폰 발급 가능한 전월 달성 금액",
      "한 줄 설명",
      "인원 제한(무제한, 선착순 10명 등)",
    ]
  ),
];

export const coupons = [
  new Coupon(
    "-NOcXWLxTvrw1VY5qhYq",
    "레드맥스짐 3월 할인권",
    "1234",
    "2023-03-31"
  ),
  new Coupon(
    "-NOcXWLxTvrw1VY5qhYq",
    "레드맥스짐 2월 할인권",
    "1234",
    "2023-02-28"
  ),
];
export const couponLogs = [
  new CouponLog(
    "-NOcY-UF9Ph1t8QCguwc",
    "-NOcTHuPMea5OLbyK2k0",
    "create",
    "2023-02-10"
  ),
  new CouponLog(
    "-NOcY-UF9Ph1t8QCguwc",
    "-NOcTHuPMea5OLbyK2k0",
    "use",
    "2023-02-19"
  ),
];

export const archives = [new Archive("SAVER", ["-NOcTHuPMea5OLbyK2k0"])];

export const shorts = [
  new Short(
    "https://youtu.be/0gY_z7fqPjs",
    "https://github.com/Sebyeok/mivvAssets/blob/main/shortImage1.png?raw=true",
    "고길동",
    "sav",
    "샘플 비디오1"
  ),
  new Short(
    "https://youtu.be/0gY_z7fqPjs",
    "https://github.com/Sebyeok/mivvAssets/blob/main/shortImage2.png?raw=true",
    "고등어",
    "edu",
    "샘플 비디오2"
  ),
];

export const advertisements = [
  new Advertisement(
    "https://github.com/Sebyeok/mivvAssets/blob/main/advertiseExample1.png?raw=true"
  ),
  new Advertisement(
    "https://github.com/Sebyeok/mivvAssets/blob/main/advertiseExample2.png?raw=true"
  ),
];

export const helps = [
  new Help(
    "-NOcTHuPMea5OLbyK2k0",
    "문의 샘플1",
    "문의 내용입니다.",
    "문의 답변입니다",
    "2023-02-10",
    "2023-02-11"
  ),
  new Help(
    "-NOcTHuPMea5OLbyK2k0",
    "문의 샘플2",
    "문의 내용입니다.",
    "",
    "2023-02-11",
    ""
  ),
];
