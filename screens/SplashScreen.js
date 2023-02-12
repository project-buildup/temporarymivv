import { Image, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../components/MivvLogo";

function SplashScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <MivvLogo />
        <View style={styles.bottomLogo}>
          <View style={styles.pbuContainer}>
            <Image
              style={styles.pbu}
              source={require("../assets/pbuLogo.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLogo: {
    position: "absolute",
    bottom: 30,
  },
  pbuContainer: {
    width: 2541 * 0.08,
    height: 636 * 0.08,
    justifyContent: "center",
    alignItems: "center",
  },
  pbu: {
    width: "100%",
    height: "100%",
  },
});
