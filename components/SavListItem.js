import { Image, StyleSheet, Text, View } from "react-native";

function SavListItem({ image, content, time, price }) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{
            width: 43,
            height: 43,
            borderRadius: 100,
            marginLeft: 20,
            backgroundColor: "#f0f0f0",
          }}
          source={{ uri: image }}
        />
        <View
          style={{
            marginLeft: 11,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum500",
              fontSize: 15,
            }}
          >
            {content}
          </Text>
          <Text
            style={{
              color: "#999999",
              fontFamily: "KoPubWorldDotum500",
              fontSize: 12,
            }}
          >
            {time}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 20,
            }}
          >
            + {price.toLocaleString("ko-KR")}{" "}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontFamily: "KoPubWorldDotum500",
              fontSize: 12,
            }}
          >
            원
          </Text>
        </View>
      </View>
      <View style={{ width: 390, height: 1, backgroundColor: "#E3E3E3" }} />
    </View>
  );
}

export default SavListItem;

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 83,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
  },
});
