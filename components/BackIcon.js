import { View, Image, StyleSheet } from "react-native";

function BackIcon() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/backIcon.png")} />
    </View>
  );
}

export default BackIcon;

const styles = StyleSheet.create({
  container: {
    width: 11,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
  },
});
