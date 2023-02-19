import { View, Image, StyleSheet, Pressable } from "react-native";

function CheckIcon() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/checkIcon.png")} />
    </View>
  );
}

export default CheckIcon;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});
