class User {
  constructor(
    nickname,
    image,
    phone,
    name,
    birth,
    email,
    password,
    passwordErrorCount,
    account,
    challengeIds,
    couponIds,
    price,
    ranking,
    shortIds,
    valueIds,
    archiveIds,
    activated,
    marketing
  ) {
    this.nickname = nickname;
    this.image = image;
    this.phone = phone;
    this.name = name;
    this.birth = birth;
    this.email = email;
    this.password = password;
    this.passwordErrorCount = passwordErrorCount;
    this.account = account;
    this.challengeIds = challengeIds;
    this.couponIds = couponIds;
    this.price = price;
    this.ranking = ranking;
    this.shortIds = shortIds;
    this.valueIds = valueIds;
    this.archiveIds = archiveIds;
    this.activated = activated;
    this.marketing = marketing;
  }
}

export default User;
