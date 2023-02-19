import { View, Image, StyleSheet } from "react-native";

function MivvLogo() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/mivvLogo.png")} />
    </View>
  );
}

export default MivvLogo;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
