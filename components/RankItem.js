import { Image, StyleSheet, Text, View } from "react-native";

function RankItem({ rank, image, nickname, price }) {
  return (
    <View style={styles.rankContainer}>
      <Text
        style={{
          color: "#535353",
          fontFamily: "KoPubWorldDotum700",
          fontSize: 18,
        }}
      >
        {rank}
      </Text>
      <Text
        style={{
          color: "#535353",
          fontFamily: "KoPubWorldDotum700",
          fontSize: 15,
        }}
      >
        위
      </Text>
      <Image
        style={{
          width: 35,
          height: 35,
          borderRadius: 18,
          margin: 15,
          backgroundColor: "#f0f0f0",
        }}
        source={{ uri: image }}
      />
      <Text
        style={{
          color: "#535353",
          fontFamily: "KoPubWorldDotum700",
          fontSize: 15,
        }}
      >
        {nickname} 님
      </Text>
      <Text
        style={{
          marginLeft: 50,
          color: "#535353",
          fontFamily: "KoPubWorldDotum500",
          fontSize: 15,
        }}
      >
        {price.toLocaleString("ko-KR")} 원
      </Text>
    </View>
  );
}

export default RankItem;

const styles = StyleSheet.create({
  rankContainer: {
    width: 330,
    height: 60,
    backgroundColor: "#f6f7fa",
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
