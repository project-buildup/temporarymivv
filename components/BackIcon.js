import { View, Image, StyleSheet, Pressable } from "react-native";

function BackIcon() {
  return (
    <View style={styles.mivvContainer}>
      <Image source={require("../assets/backIcon.png")} />
    </View>
  );
}

export default BackIcon;

const styles = StyleSheet.create({
  mivvContainer: {
    width: 11,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
  },
});
