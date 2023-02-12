import { View, Image, StyleSheet } from "react-native";

function AlarmIcon() {
  return (
    <View style={styles.mivvContainer}>
      <Image source={require("../assets/alarmIcon.png")} />
    </View>
  );
}

export default AlarmIcon;

const styles = StyleSheet.create({
  mivvContainer: {
    width: 22,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
