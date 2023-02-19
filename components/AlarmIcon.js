import { View, Image, StyleSheet } from "react-native";

function AlarmIcon() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/alarmIcon.png")} />
    </View>
  );
}

export default AlarmIcon;

const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
