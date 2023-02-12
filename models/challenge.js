class Challenge {
  constructor(
    title,
    subtitle,
    image,
    startAt,
    endAt,
    joinUserIds,
    price,
    maxPerDay
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.startAt = startAt;
    this.endAt = endAt;
    this.joinUserIds = joinUserIds;
    this.price = price;
    this.maxPerDay = maxPerDay;
  }
}

export default Challenge;
