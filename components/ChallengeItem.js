import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function ChallengeItem({
  onPress,
  imageUri,
  title,
  minPrice,
  maxPrice,
  maxPerDay,
}) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPress();
      }}
    >
      <ImageBackground source={{ uri: imageUri }} style={styles.container}>
        <View style={{ marginTop: 7, marginLeft: 15, marginRight: 15 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 24,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 10,
            }}
          >
            회당 절약 금액 {minPrice.toLocaleString("ko-KR")} ~{" "}
            {maxPrice.toLocaleString("ko-KR")} ₩
          </Text>
          <Text
            style={{
              textAlign: "right",
              color: "white",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 10,
            }}
          >
            오늘 남은 절약 가능 횟수 ( 1 / {maxPerDay} )
            {
              //오늘 남은 절약 횟수 API 필요
            }
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

export default ChallengeItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 90,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
});
