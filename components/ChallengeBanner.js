import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function ChallengeBanner({
  imageUri,
  subtitle,
  title,
  min,
  max,
  num,
  endAt,
  isArrow = true,
}) {
  const date = new Date(endAt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().substring(-2);

  const formattedDate = `${year}.${month}.${day}.`;

  return (
    <ImageBackground
      source={{ uri: imageUri }}
      style={styles.challengeBannerContainer}
    >
      <View>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text
            style={{
              color: "#ECECEC",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 14,
            }}
          >
            {subtitle}
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              color: "#ECECEC",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 20,
            }}
          >
            {title}!
          </Text>
        </View>
        {isArrow ? (
          <View
            style={{
              height: 24,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: 24, alignItems: "center" }}>
              <Image source={require("../assets/leftArrowIcon.png")} />
            </View>
            <View style={{ width: 24, alignItems: "center" }}>
              <Image source={require("../assets/rightArrowIcon.png")} />
            </View>
          </View>
        ) : (
          <View
            style={{
              height: 24,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          />
        )}
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              color: "#ECECEC",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 9,
            }}
          >
            회당 절약 금액 {min.toLocaleString("ko-KR")} ~{" "}
            {max.toLocaleString("ko-KR")} ₩
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              color: "#ECECEC",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 10,
            }}
          >
            지금 이 챌린지에 참여중인 세이버
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/participantIcon.png")} />
          <View style={{ margin: 5 }}>
            <Text
              style={{
                color: "#ECECEC",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 8,
              }}
            >
              {num.toLocaleString("ko-KR")} 명
            </Text>
          </View>
          <View style={{ margin: 5 }}>
            <Image source={require("../assets/calendarIcon.png")} />
          </View>
          <Text
            style={{
              color: "#F2F2F2",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 8,
            }}
          >
            {formattedDate} 챌린지 종료
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default ChallengeBanner;

const styles = StyleSheet.create({
  challengeBannerContainer: {
    width: 315,
    height: 160,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    overflow: "hidden",
  },
});
