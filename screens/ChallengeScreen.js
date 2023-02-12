import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

function ChallengeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>ChallengeScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default ChallengeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
});
