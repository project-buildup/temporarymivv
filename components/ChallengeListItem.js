import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function ChallengeListItem({
  imageUri,
  subtitle,
  title,
  min,
  max,
  num,
  endAt,
}) {
  const date = new Date(endAt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().substring(-2);

  const formattedDate = `${year}.${month}.${day}.`;
  return (
    <ImageBackground source={{ uri: imageUri }} style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: 110 }}>
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
        </View>
        <View>
          <View style={{ marginTop: 20, marginRight: 0 }}>
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
          <View style={{}}>
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
              marginRight: 10,
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
      </View>
    </ImageBackground>
  );
}

export default ChallengeListItem;

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 110,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    overflow: "hidden",
  },
});
