import { View, Image, StyleSheet } from "react-native";

function MivvLogo() {
  return (
    <View style={styles.mivvContainer}>
      <Image source={require("../assets/mivvLogo.png")} />
    </View>
  );
}

export default MivvLogo;

const styles = StyleSheet.create({
  mivvContainer: {
    width: 90,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
