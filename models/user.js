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
    coupons,
    price,
    shortIds,
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
    this.coupons = coupons;
    this.price = price;
    this.shortIds = shortIds;
    this.archiveIds = archiveIds;
    this.activated = activated;
    this.marketing = marketing;
  }
}

export default User;
