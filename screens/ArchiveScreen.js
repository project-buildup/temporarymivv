import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

function ArchiveScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>ArchiveScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default ArchiveScreen;

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
